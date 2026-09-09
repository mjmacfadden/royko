# Royko — THE DAILY MIKE

Personal morning newspaper for Northbrook, IL. **Not a news dashboard** — the site *is* the newspaper: cream paper, black ink, serif type, thin rules, three finite pages, designed for **print first** (letter 8.5×11).

**Masthead:** THE DAILY MIKE (Manufacturing Consent + Playfair for headlines)  
**Tagline:** Independent · Personal · Daily  
**Location context:** Northbrook / ZIP 60062 (weather & dateline — not the paper’s name)  
**Sample edition:** Wednesday, September 9, 2026 · Vol. I, No. 214

## Quick start

```bash
cd /path/to/Royko
cp .env.example .env   # optional — sets PUBLIC_SITE_URL for QR codes
npm install
npm run dev
```

Open **http://localhost:4321/**  
Print: **Print today’s paper** (or ⌘/Ctrl+P). Screen chrome & settings are hidden when printing.

```bash
npm run build    # Node SSR build → dist/
npm run preview  # preview production build
npm start        # node dist/server/entry.mjs
```

### Environment

| Variable | Purpose |
|----------|---------|
| `PUBLIC_SITE_URL` | Absolute origin for puzzle-answer QR codes (e.g. `https://daily-mike.example.com`). Defaults to `http://localhost:4321`. |

QR / answers URL pattern: **`{PUBLIC_SITE_URL}/answers/YYYY-MM-DD`**  
Example: `http://localhost:4321/answers/2026-09-09`

## What’s in this phase

| Area | Status |
|------|--------|
| Astro app + 3-page newspaper shell | ✅ |
| Print-first 3-column letter layout (dense, no blank waste page) | ✅ |
| Masthead one-line on screen + print (Manufacturing Consent) | ✅ |
| Merriweather body ~10pt print / tight screen | ✅ |
| Puzzle answers page + build-time QR (no on-paper spoilers) | ✅ |
| Live RSS ingestion (build-time + `/api/rss`) | ✅ Phase 2-lite |
| Settings panel (feeds, ZIP, custom RSS) | ✅ localStorage |
| Comics RSS (xkcd + Garfield via comicsrss) | ✅ best-effort hotlink |
| Live calendar (Google OAuth) | ❌ Later |
| Auth / Supabase | ❌ Out of scope |

### Settings (screen only)

Open **Settings** in the top chrome:

1. **Opt into/out of built-in RSS feeds** (checkboxes).
2. **ZIP code** for Weather Underground (default `60062`).
3. **Custom RSS URLs** — **today-only** (America/Chicago / edition date). Built-in refresh also uses today-only via the API.

Prefs persist in `localStorage` (`daily-mike-settings-v1`). Save triggers `/api/rss` (server-side fetch, avoids CORS). Empty/failed settings never blank the paper — build-time snapshot remains.

### News / RSS

Feed catalog: `src/data/feeds.ts`

Starter feeds (skipped gracefully on failure):

- NPR News, NPR briefs  
- BBC World, BBC Business  
- NYT Home, NYT U.S.  
- Ars Technica, The Verge, Hacker News  
- ESPN  

Normalize → `RssStory` (`src/data/types.ts`). Headlines + short excerpts + source link only — **no full-article republish**.

Build merges live items in `src/lib/edition.ts` (today-first, then latest, then placeholders).

### Puzzle answers + QR

- Paper puzzles **do not** reveal answers (`<details>` removed).
- Answers: `/answers/YYYY-MM-DD` (phone-friendly).
- QR on puzzles page (build-time SVG via `qrcode`) → answers URL; caption: “Scan for today’s puzzle answers”.

### Comics

Config: `src/data/feeds/comics.ts`  
Pipeline: `src/lib/comics.ts` — fetch image URL + title + link; **hotlink** with credit; link out to publisher (do not re-host). Fallback UI if feed fails.

Default strips: **xkcd**, **SMBC** (creator RSS). GoComics-backed comicsrss feeds are currently halted.

### Typography

- **Masthead:** [Manufacturing Consent](https://fonts.google.com/specimen/Manufacturing+Consent) (NYT-style blackletter, Google Fonts)
- **Headlines:** Playfair Display  
- **Body:** Merriweather ≈ **10pt** print, tight leading  
- **UI/small caps:** Libre Franklin  

## Project layout

```
src/
  components/     Masthead, SettingsPanel, AnswersQr, puzzles, ComicStrip…
  data/
    feeds.ts              curated news RSS list
    feeds/comics.ts       comic RSS slots
    types.ts
    edition-2026-09-09.ts placeholders / agenda / weather
    editions/latest.ts
    puzzles/              jumble · trivia · crossword banks
  lib/
    site.ts               PAPER_NAME, PUBLIC_SITE_URL, answers URLs
    rss.ts                fetch/normalize
    comics.ts
    edition.ts            merge live → Edition
    settings.ts           localStorage settings shape
    dateFilter.ts         America/Chicago today filter
  pages/
    index.astro
    answers/[date].astro
    api/rss.ts            POST settings-driven fetch
  styles/newspaper.css    print rules are authoritative
```

## License / personal use

Built for Mike Macfadden (Northbrook, America/Chicago). Family-facing morning paper.
