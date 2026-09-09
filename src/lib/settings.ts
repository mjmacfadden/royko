/**
 * Client settings shape for The Daily Mike.
 * Persisted in localStorage; structured for future sync.
 */
import { DEFAULT_ENABLED_COMIC_IDS } from '../data/feeds/comics';
import type { CalendarSource } from './calendar';

export const SETTINGS_STORAGE_KEY = 'daily-mike-settings-v1';
export const GROK_BRIEF_STORAGE_KEY = 'daily-mike-grok-brief-v1';

export interface CustomFeed {
  id: string;
  name: string;
  url: string;
}

export interface GrokBriefStore {
  text: string;
  /** Edition date (YYYY-MM-DD) the paste was saved for */
  date: string;
  savedAt: string;
}

export interface PaperSettings {
  zip: string;
  /**
   * When false (default), news columns come from the Grok brief only.
   * RSS code remains available; enable feeds in Settings to opt back in.
   */
  rssEnabled: boolean;
  /** Built-in feed ids that are enabled (ignored when rssEnabled is false) */
  enabledFeedIds: string[];
  customFeeds: CustomFeed[];
  /** Comic source ids (xkcd, smbc, oatmeal) */
  enabledComicIds: string[];
  /** Public ICS calendar URLs */
  calendars: CalendarSource[];
}

/** Sensible defaults — Northbrook ZIP, RSS off (Grok is the news backbone). */
export function defaultSettings(): PaperSettings {
  return {
    zip: '60062',
    rssEnabled: false,
    enabledFeedIds: [],
    customFeeds: [],
    enabledComicIds: [...DEFAULT_ENABLED_COMIC_IDS],
    calendars: [],
  };
}

export function loadSettings(): PaperSettings {
  if (typeof localStorage === 'undefined') return defaultSettings();
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return defaultSettings();
    const parsed = JSON.parse(raw) as Partial<PaperSettings>;
    const base = defaultSettings();
    const enabledFeedIds = Array.isArray(parsed.enabledFeedIds)
      ? parsed.enabledFeedIds.filter((id) => typeof id === 'string')
      : base.enabledFeedIds;
    // Explicit flag wins; otherwise infer from whether any feeds are checked
    const rssEnabled =
      typeof parsed.rssEnabled === 'boolean'
        ? parsed.rssEnabled
        : enabledFeedIds.length > 0 || (Array.isArray(parsed.customFeeds) && parsed.customFeeds.length > 0);
    return {
      zip: typeof parsed.zip === 'string' && /^\d{5}$/.test(parsed.zip) ? parsed.zip : base.zip,
      rssEnabled,
      enabledFeedIds,
      customFeeds: Array.isArray(parsed.customFeeds)
        ? parsed.customFeeds.filter(
            (f) => f && typeof f.url === 'string' && f.url.startsWith('http'),
          )
        : [],
      enabledComicIds: Array.isArray(parsed.enabledComicIds)
        ? parsed.enabledComicIds.filter((id) => typeof id === 'string')
        : base.enabledComicIds,
      calendars: Array.isArray(parsed.calendars)
        ? parsed.calendars.filter(
            (c) => c && typeof c.url === 'string' && c.url.startsWith('http'),
          )
        : [],
    };
  } catch {
    return defaultSettings();
  }
}

export function saveSettings(settings: PaperSettings): void {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}

export function loadGrokBrief(): GrokBriefStore | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem(GROK_BRIEF_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GrokBriefStore;
    if (!parsed || typeof parsed.text !== 'string') return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveGrokBrief(text: string, date: string): GrokBriefStore {
  const store: GrokBriefStore = {
    text,
    date,
    savedAt: new Date().toISOString(),
  };
  localStorage.setItem(GROK_BRIEF_STORAGE_KEY, JSON.stringify(store));
  return store;
}

export function clearGrokBrief(): void {
  localStorage.removeItem(GROK_BRIEF_STORAGE_KEY);
}

export function wundergroundUrlForZip(zip: string): string {
  return `https://www.wunderground.com/weather/us/il/northbrook/${zip}`;
}

/** Northbrook weatherwidget / forecast7 URL (known-good default embed). */
export function forecast7UrlForNorthbrook(): string {
  return 'https://forecast7.com/en/42d13n87d83/northbrook/';
}

export interface ZipGeo {
  lat: number;
  lon: number;
  city: string;
  stateAbbr: string;
}

/** City slug for forecast7 path: lowercased, hyphenated. */
export function citySlug(city: string): string {
  return city
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Encode lat/lon + city for forecast7 / weatherwidget.io.
 * Decimal point → `d`; negative lon → `n` prefix (US west).
 * Example: 42.13, -87.83, Northbrook → `42d13n87d83/northbrook`
 */
export function forecast7PathFromCoords(lat: number, lon: number, city: string): string {
  const round2 = (n: number) => Math.round(n * 100) / 100;
  const rLat = round2(lat);
  const rLon = round2(lon);

  const enc = (n: number): string => {
    const parts = Math.abs(n).toFixed(2).split('.');
    return `${parts[0]}d${parts[1]}`;
  };

  let latPart = enc(rLat);
  if (rLat < 0) latPart = `s${latPart}`;

  // Negative lon → `n` prefix; positive lon has no prefix (e.g. Barcelona 41d392d17).
  const lonPart = rLon < 0 ? `n${enc(rLon)}` : enc(rLon);

  const slug = citySlug(city) || 'location';
  return `${latPart}${lonPart}/${slug}`;
}

export function forecast7UrlFromCoords(lat: number, lon: number, city: string): string {
  return `https://forecast7.com/en/${forecast7PathFromCoords(lat, lon, city)}/`;
}

/** Lookup US ZIP via zippopotam.us (no API key). */
export async function lookupZipGeo(zip: string): Promise<ZipGeo | null> {
  if (!/^\d{5}$/.test(zip)) return null;
  try {
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`);
    if (!res.ok) return null;
    const data = (await res.json()) as {
      places?: Array<{
        'place name'?: string;
        latitude?: string;
        longitude?: string;
        'state abbreviation'?: string;
      }>;
    };
    const place = data.places?.[0];
    if (!place) return null;
    const lat = Number(place.latitude);
    const lon = Number(place.longitude);
    const city = place['place name'];
    if (!Number.isFinite(lat) || !Number.isFinite(lon) || !city) return null;
    return {
      lat,
      lon,
      city,
      stateAbbr: place['state abbreviation'] || '',
    };
  } catch {
    return null;
  }
}

/**
 * Map ZIP → forecast7 URL. Uses zippopotam.us; falls back to Northbrook on failure.
 * Prefer known Northbrook URL for default ZIP so the embed matches Mike's snippet.
 */
export async function forecast7UrlForZip(
  zip: string,
): Promise<{ url: string; label: string; city: string; stateAbbr: string; fromFallback: boolean }> {
  if (zip === '60062') {
    return {
      url: forecast7UrlForNorthbrook(),
      label: 'NORTHBROOK',
      city: 'Northbrook',
      stateAbbr: 'IL',
      fromFallback: false,
    };
  }
  const geo = await lookupZipGeo(zip);
  if (!geo) {
    return {
      url: forecast7UrlForNorthbrook(),
      label: 'NORTHBROOK',
      city: 'Northbrook',
      stateAbbr: 'IL',
      fromFallback: true,
    };
  }
  return {
    url: forecast7UrlFromCoords(geo.lat, geo.lon, geo.city),
    label: geo.city.toUpperCase(),
    city: geo.city,
    stateAbbr: geo.stateAbbr,
    fromFallback: false,
  };
}

