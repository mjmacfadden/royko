import type { APIRoute } from 'astro';
import { fetchAllFeeds } from '../../lib/rss';
import { chicagoDateKey } from '../../lib/dateFilter';
import { NEWS_FEEDS } from '../../data/feeds';

export const prerender = false;

/**
 * POST /api/rss
 * Body: { enabledFeedIds?: string[], customFeeds?: {id,name,url}[], editionDate?: YYYY-MM-DD }
 * Returns normalized section stories. Custom feeds are always today-only (America/Chicago).
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      enabledFeedIds?: string[];
      customFeeds?: { id: string; name: string; url: string }[];
      editionDate?: string;
      todayOnlyBuiltIn?: boolean;
    };

    const editionDate = body.editionDate || chicagoDateKey();
    const feeds = await fetchAllFeeds({
      enabledFeedIds: body.enabledFeedIds ?? null,
      customFeeds: body.customFeeds ?? [],
      todayOnlyBuiltIn: body.todayOnlyBuiltIn !== false,
      editionDate,
    });

    return new Response(
      JSON.stringify({
        editionDate,
        catalog: NEWS_FEEDS.map((f) => ({ id: f.id, name: f.name, section: f.section })),
        ...feeds,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      ok: true,
      catalog: NEWS_FEEDS.map((f) => ({
        id: f.id,
        name: f.name,
        section: f.section,
        url: f.url,
      })),
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
};
