/**
 * RSS fetch + normalize → RssStory.
 * Used at build time and by /api/rss. Failures are skipped so builds never break.
 */
import { XMLParser } from 'fast-xml-parser';
import type { RssStory, StoryCategory } from '../data/types';
import { NEWS_FEEDS, type FeedConfig, type FeedSection } from '../data/feeds';
import { isSameChicagoDay } from './dateFilter';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  cdataPropName: '__cdata',
  trimValues: true,
});

export interface FetchedSections {
  lead: RssStory[];
  alsoToday: RssStory[];
  news: RssStory[];
  businessTech: RssStory[];
  sports: RssStory[];
  okFeeds: string[];
  failedFeeds: { id: string; error: string }[];
}

function asArray<T>(v: T | T[] | undefined | null): T[] {
  if (v == null) return [];
  return Array.isArray(v) ? v : [v];
}

function textOf(v: unknown): string {
  if (v == null) return '';
  if (typeof v === 'string' || typeof v === 'number') return String(v);
  if (typeof v === 'object') {
    const o = v as Record<string, unknown>;
    if (o.__cdata != null) return textOf(o.__cdata);
    if (o['#text'] != null) return textOf(o['#text']);
  }
  return '';
}

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function excerpt(text: string, max = 220): string {
  const t = stripHtml(text);
  if (t.length <= max) return t;
  return t.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}

function pickLink(item: Record<string, unknown>): string {
  const link = item.link;
  if (typeof link === 'string') return link;
  if (link && typeof link === 'object') {
    const o = link as Record<string, unknown>;
    if (o['@_href']) return String(o['@_href']);
    if (o['#text']) return String(o['#text']);
  }
  const id = item.guid ?? item.id;
  if (typeof id === 'string' && id.startsWith('http')) return id;
  if (id && typeof id === 'object') {
    const t = textOf(id);
    if (t.startsWith('http')) return t;
  }
  return '';
}

function pickImage(item: Record<string, unknown>): string | null {
  const media = item['media:content'] ?? item['media:thumbnail'];
  for (const m of asArray(media)) {
    if (m && typeof m === 'object' && (m as Record<string, unknown>)['@_url']) {
      return String((m as Record<string, unknown>)['@_url']);
    }
  }
  const enclosure = item.enclosure;
  for (const e of asArray(enclosure)) {
    if (e && typeof e === 'object') {
      const o = e as Record<string, unknown>;
      const type = String(o['@_type'] || '');
      if (type.startsWith('image') && o['@_url']) return String(o['@_url']);
    }
  }
  const desc = textOf(item.description ?? item.summary ?? item.content);
  const m = desc.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m?.[1] ?? null;
}

function sectionToCategory(section: FeedSection): StoryCategory {
  switch (section) {
    case 'sports':
      return 'sports';
    case 'businessTech':
      return 'tech';
    case 'alsoToday':
      return 'national';
    case 'lead':
      return 'national';
    default:
      return 'news';
  }
}

function normalizeItem(
  item: Record<string, unknown>,
  feed: FeedConfig,
  index: number,
): RssStory | null {
  const title = stripHtml(textOf(item.title));
  const url = pickLink(item);
  if (!title || !url) return null;
  const rawDesc = textOf(
    item.description ?? item.summary ?? item.content ?? item['content:encoded'] ?? '',
  );
  const publishedAt =
    textOf(item.pubDate ?? item.published ?? item.updated ?? item['dc:date']) ||
    new Date().toISOString();
  return {
    id: `${feed.id}-${index}-${Buffer.from(url).toString('base64url').slice(0, 12)}`,
    title,
    description: excerpt(rawDesc),
    url,
    image: pickImage(item),
    source: feed.name,
    publishedAt,
    category: sectionToCategory(feed.section),
  };
}

function extractItems(doc: unknown): Record<string, unknown>[] {
  const root = doc as Record<string, unknown>;
  const rss = root.rss as Record<string, unknown> | undefined;
  if (rss?.channel) {
    const channel = rss.channel as Record<string, unknown>;
    return asArray(channel.item) as Record<string, unknown>[];
  }
  const feed = root.feed as Record<string, unknown> | undefined;
  if (feed) {
    return asArray(feed.entry) as Record<string, unknown>[];
  }
  return [];
}

export async function fetchFeed(
  feed: FeedConfig,
  opts: { todayOnly?: boolean; editionDate?: string } = {},
): Promise<RssStory[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(feed.url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'TheDailyMike/0.1 (+personal newspaper; RSS reader)',
        Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const doc = parser.parse(xml);
    const items = extractItems(doc);
    const limit = feed.limit ?? 5;
    const out: RssStory[] = [];
    for (let i = 0; i < items.length && out.length < limit; i++) {
      const story = normalizeItem(items[i], feed, i);
      if (!story) continue;
      if (opts.todayOnly && opts.editionDate) {
        if (!isSameChicagoDay(story.publishedAt, opts.editionDate)) continue;
      }
      out.push(story);
    }
    return out;
  } finally {
    clearTimeout(timer);
  }
}

function dedupe(stories: RssStory[]): RssStory[] {
  const seen = new Set<string>();
  const out: RssStory[] = [];
  for (const s of stories) {
    const key = s.url || s.title.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(s);
  }
  return out;
}

export interface FetchFeedsOptions {
  /** If set, only these built-in feed ids run. */
  enabledFeedIds?: string[] | null;
  /** Extra custom feeds (section defaults to news). */
  customFeeds?: { id: string; name: string; url: string; section?: FeedSection }[];
  /** When true, keep only items published on editionDate (America/Chicago). Custom feeds always today-only. */
  todayOnlyBuiltIn?: boolean;
  editionDate?: string;
}

/** Fetch configured feeds; never throws. */
export async function fetchAllFeeds(opts: FetchFeedsOptions = {}): Promise<FetchedSections> {
  const empty: FetchedSections = {
    lead: [],
    alsoToday: [],
    news: [],
    businessTech: [],
    sports: [],
    okFeeds: [],
    failedFeeds: [],
  };

  const enabled = opts.enabledFeedIds
    ? new Set(opts.enabledFeedIds)
    : null;

  const builtIns = NEWS_FEEDS.filter((f) => !enabled || enabled.has(f.id));
  const customs: FeedConfig[] = (opts.customFeeds || []).map((c) => ({
    id: c.id,
    name: c.name || 'Custom',
    url: c.url,
    section: c.section || 'news',
    limit: 8,
  }));

  const editionDate = opts.editionDate;
  const jobs: { feed: FeedConfig; todayOnly: boolean }[] = [
    ...builtIns.map((feed) => ({
      feed,
      todayOnly: Boolean(opts.todayOnlyBuiltIn && editionDate),
    })),
    ...customs.map((feed) => ({
      feed,
      // Custom feeds MUST be today-only
      todayOnly: true,
    })),
  ];

  const results = await Promise.all(
    jobs.map(async ({ feed, todayOnly }) => {
      try {
        const stories = await fetchFeed(feed, {
          todayOnly,
          editionDate: editionDate,
        });
        return { feed, stories, error: null as string | null };
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        return { feed, stories: [] as RssStory[], error: msg };
      }
    }),
  );

  for (const r of results) {
    if (r.error) {
      empty.failedFeeds.push({ id: r.feed.id, error: r.error });
      continue;
    }
    empty.okFeeds.push(r.feed.id);
    empty[r.feed.section].push(...r.stories);
  }

  empty.lead = dedupe(empty.lead);
  empty.alsoToday = dedupe(empty.alsoToday);
  empty.news = dedupe(empty.news);
  empty.businessTech = dedupe(empty.businessTech);
  empty.sports = dedupe(empty.sports);

  return empty;
}
