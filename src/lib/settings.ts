/**
 * Client settings shape for The Daily Mike.
 * Persisted in localStorage; structured for future sync.
 */
import { NEWS_FEEDS } from '../data/feeds';
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
  /** Built-in feed ids that are enabled */
  enabledFeedIds: string[];
  customFeeds: CustomFeed[];
  /** Comic source ids (xkcd, smbc, oatmeal) */
  enabledComicIds: string[];
  /** Public ICS calendar URLs */
  calendars: CalendarSource[];
}

/** Sensible defaults — Northbrook ZIP, a few feeds on. */
export function defaultSettings(): PaperSettings {
  const preferred = ['npr-news', 'bbc-world', 'nyt-home', 'ars', 'espn', 'npr-also'];
  const available = new Set(NEWS_FEEDS.map((f) => f.id));
  return {
    zip: '60062',
    enabledFeedIds: preferred.filter((id) => available.has(id)),
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
    return {
      zip: typeof parsed.zip === 'string' && /^\d{5}$/.test(parsed.zip) ? parsed.zip : base.zip,
      enabledFeedIds: Array.isArray(parsed.enabledFeedIds)
        ? parsed.enabledFeedIds.filter((id) => typeof id === 'string')
        : base.enabledFeedIds,
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
