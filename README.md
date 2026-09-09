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
| Live RSS ingestion (build-time + `/api/rss`) | ✅ |
| Settings panel (feeds, ZIP, comics, calendars, Grok brief) | ✅ localStorage |
| Comics RSS (xkcd + SMBC + The Oatmeal) | ✅ best-effort hotlink |
| Public ICS calendars → agenda (multi-calendar merge) | ✅ `/api/calendar` |
| Grok Automation paste interleaved with RSS | ✅ |
| Google Calendar OAuth | ❌ Not needed — use public ICS |
| Auth / Supabase | ❌ Out of scope |

### Settings (screen only)

Open **Settings** in the top chrome (or **Paste brief** for a quick Grok paste):

1. **Grok Automation brief** — paste markdown; compose into the paper interleaved with RSS.
2. **Public calendar ICS URLs** — add/remove; today’s events (America/Chicago) merge into the agenda.
3. **Comics** — opt into/out of xkcd, SMBC, The Oatmeal (max 3 on page).
4. **ZIP code** for Weather Underground (default `60062`).
5. **Built-in / custom RSS** — today-only filter via `/api/rss`.

Prefs persist in `localStorage` (`daily-mike-settings-v1`). Grok paste: `daily-mike-grok-brief-v1`.

### Grok Automation brief

Paste the morning Automation output. Parser: `src/lib/grokBrief.ts` · sample: `src/data/samples/grok-brief-example.md` (also `/samples/grok-brief-example.md`).

#### Paste format

Copy this into your Grok system prompt (or paste a matching brief into Settings / Paste brief):

```
**The Daily Mike**
Wednesday, September 9, 2026
America/Chicago

Optional lede paragraph…

## National & World

***Headline here***
**Named source: AP, Sept. 8**
Story body paragraph(s) in plain text (no required italics).

***Another headline***
**byline or source**
More body…

## Weather — Northbrook, Illinois
Prose paragraphs (no headlines required).

## What to watch today
- bullet one
- bullet two

Compiled 5:50 a.m. CT from 28 sources.
```

**Rules**

1. `## Section` = section header (kind classification unchanged: weather / national / local / sports / markets / watch).
2. `***Headline***` alone on a line (or headline then body after closing `***`) = story headline — prefer **triple-asterisk** over double.
3. `**byline/source**` alone on the line immediately after a headline = byline/source. Plain `Named source:` / `Source:` lines still work.
4. Plain paragraphs = story body until the next `***` headline or `##` section. **Do not** wrap body in italic `*…*` (multi-paragraph italics break).
5. Backward compatible: older `**Headline**` alone-on-line pastes still parse; when both possible, `***` wins for headlines.

Typical sections: `## Weather — …`, `## National & World`, `## United States / Illinois / Chicago`, `## Sports`, `## Markets`, `## What to watch today`.

**How it maps onto the paper**

| Brief section | Placement |
|---------------|-----------|
| Weather prose | Small “Brief · Weather” under the WU strip (doesn’t replace the widget) |
| National & World | Interleaved into **News** with RSS (`Brief` label) |
| Illinois / Chicago | Interleaved into **Also today** |
| Sports / Markets | Interleaved into Sports / Business · Tech |
| What to watch | Tight list under agenda |
| Lede | Roundup box under the lead wire story |

RSS items keep their source attribution; Grok items show **Brief** (plus named source when present).

### Public calendars (ICS)

No OAuth. Server route **`POST /api/calendar`** fetches ICS (avoids CORS), parses `VEVENT`, keeps events whose start falls on **today in America/Chicago**, merges all calendars, sorts by start ascending.

**Google Calendar → public ICS / secret address**

1. Open [Google Calendar](https://calendar.google.com) on the web.
2. Settings (gear) → select the calendar under **Settings for my calendars**.
3. Scroll to **Integrate calendar**.
4. Copy **Secret address in iCal format** (private-but-URL) *or* make the calendar public and use **Public address in iCal format**.
5. Paste that `https://calendar.google.com/calendar/ical/…/basic.ics` URL into Settings → Public calendars.
6. Optional label (e.g. “Family”) — shown on agenda rows when more than one calendar is configured.

Any other `.ics` URL works the same way. Empty/failed fetches fall back to the placeholder agenda.

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

- Paper puzzles **do not** reveal answers.
- Answers: `/answers/YYYY-MM-DD` (phone-friendly).
- QR on puzzles page (build-time SVG via `qrcode`) → answers URL.

### Comics

Config: `src/data/feeds/comics.ts`  
Pipeline: `src/lib/comics.ts` — RSS 2.0 / Atom / **RSS 1.0 RDF** (Oatmeal); hotlink + credit; link out (do not re-host). Graceful fallback if empty/fails.

Default strips: **xkcd**, **SMBC**, **The Oatmeal** (capped at 3 for print).

### Typography

- **Masthead:** [Manufacturing Consent](https://fonts.google.com/specimen/Manufacturing+Consent)
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
    samples/grok-brief-example.md
    types.ts
    edition-2026-09-09.ts placeholders / agenda / weather
    editions/latest.ts
    puzzles/              jumble · trivia · crossword banks
  lib/
    site.ts               PAPER_NAME, PUBLIC_SITE_URL, answers URLs
    rss.ts                fetch/normalize
    comics.ts
    calendar.ts           public ICS parse + merge
    grokBrief.ts          Grok Automation paste parser + interleave helpers
    edition.ts            merge live → Edition
    settings.ts           localStorage settings + Grok store
    dateFilter.ts         America/Chicago today filter
  pages/
    index.astro
    answers/[date].astro
    api/rss.ts            POST settings-driven fetch
    api/calendar.ts       POST multi-ICS → today’s agenda
  styles/newspaper.css    print rules are authoritative
public/samples/           served sample brief for Settings “Load sample”
```

## License / personal use

Built for Mike Macfadden (Northbrook, America/Chicago). Family-facing morning paper.
