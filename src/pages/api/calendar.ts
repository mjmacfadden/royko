import type { APIRoute } from 'astro';
import { fetchMergedAgenda, type CalendarSource } from '../../lib/calendar';
import { chicagoDateKey } from '../../lib/dateFilter';

export const prerender = false;

/**
 * POST /api/calendar
 * Body: { calendars: {id,label,url}[], editionDate?: YYYY-MM-DD }
 * Returns merged today's agenda (America/Chicago), sorted by start.
 */
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      calendars?: CalendarSource[];
      editionDate?: string;
    };
    const editionDate = body.editionDate || chicagoDateKey();
    const calendars = Array.isArray(body.calendars) ? body.calendars : [];
    const result = await fetchMergedAgenda({ calendars, editionDate });
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
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
      help: 'POST { calendars: [{id,label,url}], editionDate? } — public ICS only, no OAuth',
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
};
