/**
 * Client settings shape for The Daily Mike.
 * Persisted in localStorage; structured for future sync.
 */
import { NEWS_FEEDS } from '../data/feeds';

export const SETTINGS_STORAGE_KEY = 'daily-mike-settings-v1';

export interface CustomFeed {
  id: string;
  name: string;
  url: string;
}

export interface PaperSettings {
  zip: string;
  /** Built-in feed ids that are enabled */
  enabledFeedIds: string[];
  customFeeds: CustomFeed[];
}

/** Sensible defaults — Northbrook ZIP, a few feeds on. */
export function defaultSettings(): PaperSettings {
  const preferred = ['npr-news', 'bbc-world', 'nyt-home', 'ars', 'espn', 'npr-also'];
  const available = new Set(NEWS_FEEDS.map((f) => f.id));
  return {
    zip: '60062',
    enabledFeedIds: preferred.filter((id) => available.has(id)),
    customFeeds: [],
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
    };
  } catch {
    return defaultSettings();
  }
}

export function saveSettings(settings: PaperSettings): void {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}

export function wundergroundUrlForZip(zip: string): string {
  return `https://www.wunderground.com/weather/us/il/northbrook/${zip}`;
}
