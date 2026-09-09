/**
 * Parse Mike's Grok Automation morning brief.
 * Canonical patterns:
 *   **The Daily Mike** title, date line, optional lede
 *   ## Section headers
 *   **Headline** + prose (+ optional Named source / Source: lines)
 *   - bullets under "What to watch today"
 */

export type GrokSectionKind =
  | 'weather'
  | 'national'
  | 'local'
  | 'sports'
  | 'markets'
  | 'watch'
  | 'other';

export interface GrokStoryItem {
  headline: string;
  body: string;
  source?: string;
}

export interface GrokSection {
  heading: string;
  kind: GrokSectionKind;
  /** Prose blocks when section isn't headline-driven (e.g. weather) */
  paragraphs: string[];
  items: GrokStoryItem[];
  bullets: string[];
}

export interface ParsedGrokBrief {
  title: string | null;
  dateLine: string | null;
  lede: string | null;
  footer: string | null;
  sections: GrokSection[];
  raw: string;
}

function classifyHeading(heading: string): GrokSectionKind {
  const h = heading.toLowerCase();
  if (/\bweather\b/.test(h)) return 'weather';
  if (/what to watch|to watch today|watch today|agenda/.test(h)) return 'watch';
  if (/\bsports?\b/.test(h)) return 'sports';
  if (/\bmarkets?\b|business|tech\b/.test(h)) return 'markets';
  if (/illinois|chicago|united states|local|northbrook|metro/.test(h)) return 'local';
  if (/national|world|international|global/.test(h)) return 'national';
  return 'other';
}

function stripBoldMarkers(s: string): string {
  return s.replace(/\*\*/g, '').trim();
}

function isSourceLine(line: string): string | null {
  const t = line.trim();
  const m =
    t.match(/^(?:Named\s+)?[Ss]ource:\s*(.+)$/) ||
    t.match(/^Named\s+source:\s*(.+)$/i);
  return m ? m[1].trim() : null;
}

function isFooter(line: string): boolean {
  return /^compiled\b/i.test(line.trim());
}

function isBullet(line: string): string | null {
  const m = line.match(/^\s*[-*•]\s+(.+)$/);
  return m ? m[1].trim() : null;
}

function isHeading(line: string): string | null {
  const m = line.match(/^##\s+(.+)$/);
  return m ? m[1].trim() : null;
}

/** **Headline** alone on a line (or almost alone). */
function isHeadlineLine(line: string): string | null {
  const t = line.trim();
  const m = t.match(/^\*\*(.+?)\*\*\s*$/);
  if (!m) return null;
  const inner = m[1].trim();
  // Title line is also bold — handled separately
  if (/^the daily mike$/i.test(inner)) return null;
  return inner;
}

/**
 * Parse raw Grok Automation paste into structured sections + story items.
 */
export function parseGrokBrief(raw: string): ParsedGrokBrief {
  const text = (raw || '').replace(/\r\n/g, '\n').trim();
  const empty: ParsedGrokBrief = {
    title: null,
    dateLine: null,
    lede: null,
    footer: null,
    sections: [],
    raw: text,
  };
  if (!text) return empty;

  const lines = text.split('\n');
  let title: string | null = null;
  let dateLine: string | null = null;
  let footer: string | null = null;
  const preHeading: string[] = [];
  const sections: GrokSection[] = [];

  let i = 0;
  // Title
  if (lines[i] && /^\*\*The Daily Mike\*\*/i.test(lines[i].trim())) {
    title = 'The Daily Mike';
    i++;
  } else if (lines[i] && /^The Daily Mike$/i.test(stripBoldMarkers(lines[i]))) {
    title = 'The Daily Mike';
    i++;
  }

  // Skip blanks
  while (i < lines.length && !lines[i].trim()) i++;

  // Date line (before first ##)
  if (i < lines.length && !isHeading(lines[i]) && /20\d{2}|january|february|march|april|may|june|july|august|september|october|november|december|america\/chicago|\bCT\b/i.test(lines[i])) {
    dateLine = lines[i].trim();
    i++;
  }

  while (i < lines.length && !lines[i].trim()) i++;

  // Lede / pre-heading paragraphs until first ##
  const ledeParts: string[] = [];
  while (i < lines.length && !isHeading(lines[i])) {
    const line = lines[i];
    if (isFooter(line)) {
      footer = line.trim();
      i++;
      break;
    }
    if (line.trim()) ledeParts.push(line.trim());
    i++;
  }
  const lede = ledeParts.length ? ledeParts.join(' ') : null;

  let current: GrokSection | null = null;
  let pendingItem: GrokStoryItem | null = null;

  const flushItem = () => {
    if (current && pendingItem) {
      pendingItem.body = pendingItem.body.trim();
      current.items.push(pendingItem);
      pendingItem = null;
    }
  };

  const startSection = (heading: string) => {
    flushItem();
    current = {
      heading,
      kind: classifyHeading(heading),
      paragraphs: [],
      items: [],
      bullets: [],
    };
    sections.push(current);
  };

  for (; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (isFooter(trimmed)) {
      flushItem();
      footer = trimmed;
      continue;
    }

    const heading = isHeading(trimmed);
    if (heading) {
      startSection(heading);
      continue;
    }

    if (!current) {
      preHeading.push(trimmed);
      continue;
    }

    const bullet = isBullet(trimmed);
    if (bullet) {
      flushItem();
      current.bullets.push(bullet);
      continue;
    }

    const hl = isHeadlineLine(trimmed);
    if (hl) {
      flushItem();
      pendingItem = { headline: hl, body: '' };
      continue;
    }

    const src = isSourceLine(trimmed);
    if (src && pendingItem) {
      pendingItem.source = src;
      flushItem();
      continue;
    }

    if (pendingItem) {
      pendingItem.body = pendingItem.body ? `${pendingItem.body} ${trimmed}` : trimmed;
      continue;
    }

    // Free prose in section (weather, etc.)
    current.paragraphs.push(trimmed);
  }
  flushItem();

  // If no ## sections, treat whole body as one "other" section of paragraphs
  if (!sections.length && (lede || text)) {
    sections.push({
      heading: 'Brief',
      kind: 'other',
      paragraphs: lede ? [lede] : text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean),
      items: [],
      bullets: [],
    });
  }

  return { title, dateLine, lede, footer, sections, raw: text };
}

/** Map section kind → newspaper column key for interleave. */
export function sectionColumn(
  kind: GrokSectionKind,
): 'news' | 'also' | 'sports' | 'businessTech' | 'weather' | 'watch' | 'lead' {
  switch (kind) {
    case 'weather':
      return 'weather';
    case 'watch':
      return 'watch';
    case 'sports':
      return 'sports';
    case 'markets':
      return 'businessTech';
    case 'local':
      return 'also';
    case 'national':
      return 'news';
    default:
      return 'news';
  }
}

export interface BriefStoryCard {
  id: string;
  title: string;
  description: string;
  source: string;
  kind: GrokSectionKind;
  column: ReturnType<typeof sectionColumn>;
}

/** Flatten story-like Grok items for interleaving with RSS. */
export function grokItemsAsStories(parsed: ParsedGrokBrief): BriefStoryCard[] {
  const out: BriefStoryCard[] = [];
  let n = 0;
  for (const sec of parsed.sections) {
    const col = sectionColumn(sec.kind);
    for (const item of sec.items) {
      n++;
      out.push({
        id: `grok-${n}`,
        title: item.headline,
        description: item.body,
        source: item.source ? `Brief · ${item.source}` : 'Brief',
        kind: sec.kind,
        column: col,
      });
    }
  }
  return out;
}

/** Alternate A and B arrays (A-first). */
export function interleave<T>(a: T[], b: T[]): T[] {
  const out: T[] = [];
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (i < a.length) out.push(a[i]);
    if (i < b.length) out.push(b[i]);
  }
  return out;
}
