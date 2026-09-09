# Royko — THE DAILY MIKE

Personal morning newspaper for Northbrook, IL. **Not a news dashboard** — the site *is* the newspaper: cream paper, black ink, serif type, thin rules, three finite pages, designed for **print first** (letter 8.5×11).

**Masthead:** THE DAILY MIKE (Manufacturing Consent + Playfair for headlines)  
**Tagline:** Independent · Personal · Daily  
**Location context:** Northbrook / ZIP 60062 (weather & dateline — not the paper’s name)  
**Weather:** [weatherwidget.io](https://weatherwidget.io) Northbrook embed on screen (transparent `data-basecolor` so cream paper shows through); compact high/low (+ Grok weather prose) for print  
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
| weatherwidget.io Northbrook embed (print fallback) | ✅ |
| Live RSS ingestion (optional; **off by default**) | ✅ code kept |
| Settings panel (feeds, ZIP, comics, calendars, Grok brief) | ✅ localStorage |
| Comics RSS (xkcd + SMBC + The Oatmeal) | ✅ best-effort hotlink |
| Public ICS calendars → agenda (multi-calendar merge) | ✅ `/api/calendar` |
| Grok Automation paste = news backbone (RSS optional) | ✅ |
| Page 3 games band + horizontal comics | ✅ |
| Google Calendar OAuth | ❌ Not needed — use public ICS |
| Auth / Supabase | ❌ Out of scope |

### Settings (screen only)

Open **Settings** in the top chrome (or **Paste brief** for a quick Grok paste):

1. **Grok Automation brief** — **required news backbone**; paste markdown to fill lead / news / local / sports / markets.
2. **Public calendar ICS URLs** — add/remove; today’s events (America/Chicago) merge into the agenda.
3. **Comics** — opt into/out of xkcd, SMBC, The Oatmeal (horizontal band on page 3).
4. **ZIP code** — default `60062` (Northbrook). The screen weather widget is currently the fixed Northbrook [weatherwidget.io / forecast7](https://forecast7.com/en/42d13n87d83/northbrook/) embed; settings ZIP may drive a different forecast7 URL later.
5. **Built-in / custom RSS** — **disabled by default**. Opt in via “Enable RSS news” if you want wires mixed with the brief.

When no Grok paste is saved, columns show: **“Paste today’s Grok brief to fill the paper.”**

Prefs persist in `localStorage` (`daily-mike-settings-v1`). Grok paste: `daily-mike-grok-brief-v1`.

### Grok Automation brief

Paste the morning Automation output. Parser: `src/lib/grokBrief.ts` · sample: `src/data/samples/grok-brief-example.md` (also `/samples/grok-brief-example.md`).

#### Paste format (canonical — what Grok emits now)

```
***Weather — Northbrook, Illinois***
Prose paragraphs (no headlines required).
Source: National Weather Service…

***National & World***

**Headline here**
*Named source: Reuters, September 9*
****https://pbs.twimg.com/amplify_video_thumb/2097497733732909056/img/pDq6ih9vJoy0SjBi.jpg****
Story body paragraph(s) in plain text.

**Another headline**
*Named source: Associated Press, September 9*
More body…

***United States / Illinois / Chicago***
**Headline**
*Named source: …*
body

***Sports***
**Headline**
*Named source: …*
body

***Markets***
Prose only (becomes one Brief card in Business · Tech).

***What to watch today***
- bullet one
- bullet two

Compiled 8:42 a.m. CT from 34 sources.
```

Optional masthead lines (`**The Daily Mike**`, date, timezone, lede) may appear *before* the first `***Section***` — both with and without are fine.

**Rules**

1. `***Section Name***` alone on a line = **section** when it matches known kinds/titles (Weather, National & World, United States / Illinois / Chicago, Sports, Markets, What to watch today) or looks like a section (`—`, `/`, keywords). Otherwise `***…***` is still treated as a legacy headline.
2. `**Headline**` alone on a line = story headline.
3. `*Named source: Outlet, Date*` (italic single asterisks) = byline/source. Plain `Named source:` / `Source:` and legacy `**byline**` still work.
4. Plain paragraphs = story body until the next headline or section. Weather + Markets are prose under the section; What to watch uses `-` bullets.
5. Images (optional): alone on a line under a story (or before the next story), use quadruple asterisks — `****https://image-url.jpg****`. Automation may also emit a duplicate URL in parentheses: `****https://…jpg (https://…jpg//)****`. The primary URL is attached as `imageUrl` on the story; the raw `****…****` line is stripped from body text. Rendered images fit the column (`max-width: 100%`, constrained height).
6. Alternates still accepted: `## Section` headers, and older `***Headline***` + `**byline**` dialect.

**How it maps onto the paper**

| Brief section | Placement |
|---------------|-----------|
| Weather prose | Under the weatherwidget strip on screen; also fills the **print** weather fallback |
| National & World | **News** (first item can lead page 1) |
| Illinois / Chicago / Local | **Also today · Local** |
| Sports | **Sports** |
| Markets | **Business · Tech · Markets** |
| What to watch | Tight list under agenda |
| Lede | Roundup box on page 1 |

Grok items show **Brief** (plus named source when present). Optional RSS (when enabled) can interleave with Brief cards.

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

### News / RSS (optional)

**Default: RSS off.** The edition’s stories come from the parsed Grok Automation paste. Feed catalog and `/api/rss` remain for optional re-enable in Settings.

Feed catalog: `src/data/feeds.ts`

Starter feeds (skipped gracefully on failure when enabled):

- NPR News, NPR briefs  
- BBC World, BBC Business  
- NYT Home, NYT U.S.  
- Ars Technica, The Verge, Hacker News  
- ESPN  

Normalize → `RssStory` (`src/data/types.ts`). Headlines + short excerpts + source link only — **no full-article republish**.

`src/lib/edition.ts` skips news RSS by default (comics still fetch). Pass `rssEnabled: true` / Settings opt-in to merge wires.

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
