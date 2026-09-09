/**
 * Public ICS calendar fetch + parse (no OAuth).
 * Merges VEVENT for a given America/Chicago calendar day.
 */
import { chicagoDateKey } from './dateFilter';
import type { AgendaItem } from '../data/types';

export interface CalendarSource {
  id: string;
  label: string;
  url: string;
}

export interface CalendarEvent {
  uid: string;
  title: string;
  start: Date;
  end: Date | null;
  allDay: boolean;
  calendarLabel: string;
  calendarId: string;
}

function unfoldIcs(text: string): string {
  return text.replace(/\r\n[ \t]/g, '').replace(/\n[ \t]/g, '');
}

function unescapeIcs(v: string): string {
  return v
    .replace(/\\n/gi, '\n')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\');
}

function parseIcsDate(raw: string, params: string): { date: Date; allDay: boolean } {
  const value = raw.trim();
  const allDay = /VALUE=DATE/i.test(params) || /^\d{8}$/.test(value);

  if (allDay) {
    const y = Number(value.slice(0, 4));
    const m = Number(value.slice(4, 6)) - 1;
    const d = Number(value.slice(6, 8));
    return { date: new Date(Date.UTC(y, m, d, 17, 0, 0)), allDay: true };
  }

  const m = value.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?$/);
  if (!m) {
    const t = Date.parse(value);
    return { date: Number.isNaN(t) ? new Date() : new Date(t), allDay: false };
  }
  const [, yy, mo, dd, hh, mi, ss, z] = m;
  if (z) {
    return {
      date: new Date(Date.UTC(+yy, +mo - 1, +dd, +hh, +mi, +ss)),
      allDay: false,
    };
  }
  const wall = `${yy}-${mo}-${dd}T${hh}:${mi}:${ss}`;
  const month = +mo;
  const offset = month >= 3 && month <= 10 ? '-05:00' : '-06:00';
  return { date: new Date(`${wall}${offset}`), allDay: false };
}

function propParts(line: string): { name: string; params: string; value: string } {
  const colon = line.indexOf(':');
  if (colon < 0) return { name: line, params: '', value: '' };
  const left = line.slice(0, colon);
  const value = line.slice(colon + 1);
  const semi = left.indexOf(';');
  if (semi < 0) return { name: left.toUpperCase(), params: '', value };
  return {
    name: left.slice(0, semi).toUpperCase(),
    params: left.slice(semi + 1),
    value,
  };
}

export function parseIcsEvents(icsText: string, calendar: CalendarSource): CalendarEvent[] {
  const unfolded = unfoldIcs(icsText);
  const lines = unfolded.split(/\r?\n/);
  const events: CalendarEvent[] = [];
  let inEvent = false;
  let cur: Record<string, { params: string; value: string }> = {};

  const flush = () => {
    const summary = cur.SUMMARY?.value;
    const dtstart = cur.DTSTART;
    if (!summary || !dtstart) {
      cur = {};
      return;
    }
    const start = parseIcsDate(dtstart.value, dtstart.params);
    let end: Date | null = null;
    if (cur.DTEND) {
      end = parseIcsDate(cur.DTEND.value, cur.DTEND.params).date;
    }
    events.push({
      uid: unescapeIcs(cur.UID?.value || `${calendar.id}-${start.date.toISOString()}-${summary}`),
      title: unescapeIcs(summary),
      start: start.date,
      end,
      allDay: start.allDay,
      calendarLabel: calendar.label,
      calendarId: calendar.id,
    });
    cur = {};
  };

  for (const line of lines) {
    if (line === 'BEGIN:VEVENT') {
      inEvent = true;
      cur = {};
      continue;
    }
    if (line === 'END:VEVENT') {
      if (inEvent) flush();
      inEvent = false;
      continue;
    }
    if (!inEvent || !line) continue;
    const { name, params, value } = propParts(line);
    if (!cur[name]) cur[name] = { params, value };
  }
  return events;
}

function formatChicagoTime(d: Date, allDay: boolean): string {
  if (allDay) return 'All day';
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    hour: 'numeric',
    minute: '2-digit',
  }).format(d);
}

export function eventsForChicagoDay(
  events: CalendarEvent[],
  editionDate: string,
): CalendarEvent[] {
  return events
    .filter((e) => chicagoDateKey(e.start) === editionDate)
    .sort((a, b) => {
      if (a.allDay !== b.allDay) return a.allDay ? -1 : 1;
      return a.start.getTime() - b.start.getTime();
    });
}

export function toAgendaItems(
  events: CalendarEvent[],
  showLabels: boolean,
): AgendaItem[] {
  return events.map((e) => ({
    time: formatChicagoTime(e.start, e.allDay),
    title: e.title,
    note: showLabels ? e.calendarLabel : undefined,
  }));
}

async function fetchOne(cal: CalendarSource): Promise<{ events: CalendarEvent[]; error?: string }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(cal.url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'TheDailyMike/0.1 (+personal newspaper; public ICS)',
        Accept: 'text/calendar, text/plain, application/ics, */*',
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    if (!/BEGIN:VCALENDAR/i.test(text)) throw new Error('not an ICS calendar');
    return { events: parseIcsEvents(text, cal) };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return { events: [], error: msg };
  } finally {
    clearTimeout(timer);
  }
}

export function placeholderAgenda(): AgendaItem[] {
  return [
    {
      time: '—',
      title: 'Add a public calendar ICS URL in Settings',
      note: 'Google Calendar → Settings → Integrate calendar',
    },
  ];
}

export async function fetchMergedAgenda(opts: {
  calendars: CalendarSource[];
  editionDate?: string;
  fallback?: AgendaItem[];
}): Promise<{
  items: AgendaItem[];
  editionDate: string;
  ok: string[];
  failed: { id: string; error: string }[];
  usedFallback: boolean;
}> {
  const editionDate = opts.editionDate || chicagoDateKey();
  const calendars = opts.calendars.filter((c) => c.url?.startsWith('http'));
  if (!calendars.length) {
    return {
      items: opts.fallback?.length ? opts.fallback : placeholderAgenda(),
      editionDate,
      ok: [],
      failed: [],
      usedFallback: true,
    };
  }

  const ok: string[] = [];
  const failed: { id: string; error: string }[] = [];
  const all: CalendarEvent[] = [];

  await Promise.all(
    calendars.map(async (cal) => {
      const r = await fetchOne(cal);
      if (r.error) failed.push({ id: cal.id, error: r.error });
      else ok.push(cal.id);
      all.push(...r.events);
    }),
  );

  const today = eventsForChicagoDay(all, editionDate);
  if (!today.length) {
    return {
      items: opts.fallback?.length ? opts.fallback : placeholderAgenda(),
      editionDate,
      ok,
      failed,
      usedFallback: true,
    };
  }

  const showLabels = calendars.length > 1;
  return {
    items: toAgendaItems(today, showLabels),
    editionDate,
    ok,
    failed,
    usedFallback: false,
  };
}
