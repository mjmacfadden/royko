/**
 * Best-effort comics RSS ingestion.
 * Hotlink image from feed + credit + link out. Fallback UI if fetch/hotlink fails.
 * Supports RSS 2.0, Atom, and RSS 1.0 RDF (The Oatmeal).
 */
import { XMLParser } from 'fast-xml-parser';
import {
  COMIC_FEEDS,
  MAX_COMICS_ON_PAGE,
  type ComicFeedConfig,
} from '../data/feeds/comics';
import type { ComicStripData } from '../data/types';
import { fetchWithCorsFallback } from './corsFetch';

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

function decodeEntities(html: string): string {
  return html
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
}

function pickLink(item: Record<string, unknown>): string {
  const link = item.link;
  if (typeof link === 'string') return link;
  if (link && typeof link === 'object') {
    const o = link as Record<string, unknown>;
    if (o['@_href']) return String(o['@_href']);
    if (o['#text']) return String(o['#text']);
  }
  const about = item['@_rdf:about'] || item['@_about'];
  if (about) return String(about);
  return '';
}

function pickImageFromHtml(html: string): string | null {
  const decoded = decodeEntities(html);
  const m = decoded.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m?.[1] ?? null;
}

function pickImage(item: Record<string, unknown>): string | null {
  const mediaCandidates = [
    ...asArray(item['media:content']),
    ...asArray(item['media:thumbnail']),
  ];
  for (const m of mediaCandidates) {
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

  const rdf = (root['rdf:RDF'] ?? root.RDF ?? root) as Record<string, unknown>;
  if (rdf && typeof rdf === 'object') {
    const items = asArray(rdf.item) as Record<string, unknown>[];
    if (items.length) return items;
  }
  return [];
}

function pickPublishedAt(item: Record<string, unknown>): string | null {
  const raw =
    textOf(item.pubDate) ||
    textOf(item.published) ||
    textOf(item.updated) ||
    textOf(item['dc:date']) ||
    '';
  if (!raw) return null;
  const ms = Date.parse(raw);
  return Number.isFinite(ms) ? new Date(ms).toISOString() : null;
}

async function imageReachable(url: string): Promise<boolean> {
  if (!url || !/^https?:\/\//i.test(url)) return false;
  // In the browser, the <img> error handler in DOM acts as the reachability test.
  // Probing images via fetch often fails due to CDN hotlinking/CORS headers.
  return true;
}

function feedHomeUrl(feed: ComicFeedConfig): string {
  return feed.url
    .replace(/\/feed\/cartoons\/daily-cartoon\/rss\/?$/i, '/cartoons/daily-cartoon')
    .replace(/\/feed\/rss\/?$/i, '/')
    .replace(/\/rss\.xml$/i, '/');
}

function itemToStrip(
  feed: ComicFeedConfig,
  item: Record<string, unknown>,
): ComicStripData | null {
  const imageUrl = pickImage(item);
  if (!imageUrl) return null;
  const title = textOf(item.title) || feed.title;
  const link = pickLink(item) || feedHomeUrl(feed);
  const caption = decodeEntities(textOf(item.description ?? item.summary ?? ''))
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 180);
  const publishedAt = pickPublishedAt(item);
  return {
    id: feed.id,
    title: feed.title,
    credit: feed.credit,
    caption: caption || title,
    imageUrl,
    link,
    live: true,
    publishedAt,
  };
}

async function fetchOne(feed: ComicFeedConfig): Promise<ComicStripData> {
  try {
    const res = await fetchWithCorsFallback(feed.url, {
      headers: {
        Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
      },
    }, 12000);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    if (!xml.trim()) throw new Error('empty body');
    const doc = parser.parse(xml);
    const items = extractItems(doc);
    if (!items.length) throw new Error('empty feed');

    let withImage: ComicStripData | null = null;
    for (const item of items.slice(0, 8)) {
      const strip = itemToStrip(feed, item);
      if (!strip?.imageUrl) continue;
      if (!withImage) withImage = strip;
      if (await imageReachable(strip.imageUrl)) return strip;
    }
    if (withImage) return withImage;
    throw new Error('no comic image in feed');
  } catch (err: any) {
    throw err;
  }
}

/** Full live candidate list from the last fetchComics() call (sorted). */
export let lastComicsPool: ComicStripData[] = [];

export function getComicsPool(): ComicStripData[] {
  return lastComicsPool;
}

/**
 * Fetch comics. Optional enabledIds filters sources.
 * Skips feeds whose images fail to load and continues to the next source
 * until MAX_COMICS_ON_PAGE live strips are filled (or candidates run out).
 */
export async function fetchComics(enabledIds?: string[] | null): Promise<ComicStripData[]> {
  const enabled = enabledIds?.length ? new Set(enabledIds) : null;
  const feeds = COMIC_FEEDS.filter((f) => !enabled || enabled.has(f.id));
  const live: ComicStripData[] = [];

  for (const feed of feeds) {
    try {
      live.push(await fetchOne(feed));
    } catch {
      // Skip — try next feed
    }
  }

  live.sort((a, b) => {
    const ta = a.publishedAt ? Date.parse(a.publishedAt) : 0;
    const tb = b.publishedAt ? Date.parse(b.publishedAt) : 0;
    if (tb !== ta) return tb - ta;
    return 0;
  });

  lastComicsPool = live;
  return live.slice(0, MAX_COMICS_ON_PAGE);
}
