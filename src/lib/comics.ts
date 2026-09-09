/**
 * Best-effort comics RSS ingestion.
 * Hotlink image from feed + credit + link out. Fallback UI if fetch/hotlink fails.
 */
import { XMLParser } from 'fast-xml-parser';
import { COMIC_FEEDS, type ComicFeedConfig } from '../data/feeds/comics';
import type { ComicStripData } from '../data/types';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  cdataPropName: '__cdata',
  trimValues: true,
});

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

function pickLink(item: Record<string, unknown>): string {
  const link = item.link;
  if (typeof link === 'string') return link;
  if (link && typeof link === 'object') {
    const o = link as Record<string, unknown>;
    if (o['@_href']) return String(o['@_href']);
    if (o['#text']) return String(o['#text']);
  }
  return '';
}

function pickImageFromHtml(html: string): string | null {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m?.[1] ?? null;
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
      const url = o['@_url'] ? String(o['@_url']) : '';
      if (url && (type.startsWith('image') || /\.(gif|png|jpe?g|webp)(\?|$)/i.test(url))) {
        return url;
      }
    }
  }
  const desc = textOf(item.description ?? item.summary ?? item.content ?? item['content:encoded']);
  return pickImageFromHtml(desc);
}

function extractItems(doc: unknown): Record<string, unknown>[] {
  const root = doc as Record<string, unknown>;
  const rss = root.rss as Record<string, unknown> | undefined;
  if (rss?.channel) {
    const channel = rss.channel as Record<string, unknown>;
    return asArray(channel.item) as Record<string, unknown>[];
  }
  const feed = root.feed as Record<string, unknown> | undefined;
  if (feed) return asArray(feed.entry) as Record<string, unknown>[];
  return [];
}

async function fetchOne(feed: ComicFeedConfig): Promise<ComicStripData> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(feed.url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'TheDailyMike/0.1 (+personal newspaper; comics RSS)',
        Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const doc = parser.parse(xml);
    const items = extractItems(doc);
    const item = items[0];
    if (!item) throw new Error('empty feed');
    const title = textOf(item.title) || feed.title;
    const link = pickLink(item) || feed.url;
    const imageUrl = pickImage(item);
    const caption = textOf(item.description ?? item.summary ?? '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 180);
    return {
      id: feed.id,
      title: feed.title,
      credit: feed.credit,
      caption: caption || title,
      imageUrl: imageUrl ?? null,
      link,
      live: Boolean(imageUrl || link),
    };
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchComics(): Promise<ComicStripData[]> {
  const out: ComicStripData[] = [];
  for (const feed of COMIC_FEEDS) {
    try {
      out.push(await fetchOne(feed));
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      out.push({
        id: feed.id,
        title: feed.title,
        credit: feed.credit,
        caption: `Comic feed unavailable (${msg}). Open the strip on the publisher site.`,
        imageUrl: null,
        link: feed.url,
        live: false,
      });
    }
  }
  return out;
}
