import type { Edition, RssStory, ComicStripData } from '../data/types';
import { fetchAllFeeds } from './rss';
import { fetchComics } from './comics';
import { chicagoDateKey } from './dateFilter';

function take<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n);
}

/**
 * Merge live RSS + comics into the sample edition.
 * Placeholders win only when a section has no live items.
 * Built-in feeds: prefer today (America/Chicago); if empty, fall back to latest items then placeholders.
 */
export async function buildLiveEdition(base: Edition): Promise<{
  edition: Edition;
  feedStatus: { ok: string[]; failed: { id: string; error: string }[] };
  comicsLive: boolean;
}> {
  const editionDate = base.date || chicagoDateKey();

  let feeds = await fetchAllFeeds({
    todayOnlyBuiltIn: true,
    editionDate,
  });

  const needFallback =
    !feeds.news.length && !feeds.businessTech.length && !feeds.sports.length && !feeds.lead.length;
  if (needFallback) {
    feeds = await fetchAllFeeds({ todayOnlyBuiltIn: false, editionDate });
  }

  const comics = await fetchComics();

  const news = feeds.news.length ? take(feeds.news, 4) : base.news;
  const businessTech = feeds.businessTech.length
    ? take(feeds.businessTech, 4)
    : base.businessTech;
  const sports = feeds.sports.length ? take(feeds.sports, 4) : base.sports;

  let leadStory: RssStory = base.leadStory;
  if (feeds.lead[0]) leadStory = feeds.lead[0];
  else if (feeds.news[0]) leadStory = feeds.news[0];

  let alsoToday: RssStory[] = base.alsoToday;
  if (feeds.alsoToday.length) alsoToday = take(feeds.alsoToday, 4);
  else if (feeds.news.length > 1) alsoToday = take(feeds.news.slice(1), 4);

  const comicSlots: ComicStripData[] = comics.length
    ? comics
    : base.comics.map((c) => ({
        ...c,
        imageUrl: null,
        link: undefined,
        live: false,
      }));

  const edition: Edition = {
    ...base,
    leadStory,
    alsoToday,
    news,
    businessTech,
    sports,
    comics: comicSlots,
  };

  return {
    edition,
    feedStatus: { ok: feeds.okFeeds, failed: feeds.failedFeeds },
    comicsLive: comics.some((c) => c.live),
  };
}
