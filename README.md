# Royko — THE NORTHBROOK CHRONICLE

Personal morning newspaper for Northbrook, IL. **Not a news dashboard** — the site *is* the newspaper: cream paper, black ink, serif type, thin rules, three finite pages, designed for **print first** (letter 8.5×11).

**Masthead:** THE NORTHBROOK CHRONICLE  
**Tagline:** Independent · Personal · Daily  
**Sample edition:** Wednesday, September 9, 2026 · Vol. I, No. 214

## Quick start

```bash
cd /path/to/Royko
npm install
npm run dev
```

Open **http://localhost:4321/**  
Print: use **Print today's paper** (or ⌘/Ctrl+P). Screen chrome is hidden when printing.

```bash
npm run build    # static output → dist/
npm run preview  # preview production build
```

## Phase 1 (this repo)

| Area | Status |
|------|--------|
| Astro app + 3-page newspaper shell | ✅ |
| Print-first 3-column letter layout | ✅ |
| Date-centric `Edition` model | ✅ |
| RSS-**shaped** story placeholders (title, description, url, image?, source, publishedAt, category) | ✅ |
| Weather Underground widget container (iframe to public WU page for ZIP 60062) + print fallback strip | ✅ |
| Agenda placeholders (incl. Jack) | ✅ |
| Static puzzle banks (~100 each), day-indexed | ✅ Jumble, sports trivia, mini crossword |
| Comics / How to Draw / Today in History placeholders | ✅ |
| Live RSS ingestion | ❌ Phase 2 |
| Live calendar (Google OAuth) | ❌ Later |
| WU API key / official embed snippet | ❌ Optional — paste into edition `weather.embedSrc` |
| Grok paste admin / AI roundup as primary news | ❌ Roundup is optional secondary box only |
| Auth / Supabase | ❌ Out of scope |

### News backbone = RSS-shaped items

Page 2 columns (News / Business·Tech / Sports) and Page 1 lead + “Also today” render `RssStory` objects. Phase 2 should normalize feed items into that shape — see `src/data/types.ts` and comments in `src/data/edition-2026-09-09.ts`. Do **not** treat the optional Morning Roundup as the primary news source.

### Puzzle banks (static JS/TS, day-indexed)

- Files: `src/data/puzzles/jumble.ts`, `trivia.ts`, `crossword.ts` (~100 entries each).
- Lookup by `dayOfYear` (1–365) or `dateKey` (`MM-DD`) via `pickByDate()` / `puzzlesForDate()`.
- Regenerate scaffold: `node src/scripts/generate-puzzle-banks.mjs`
- **Maintenance:** refresh/extend the banks manually every ~3 months.

### Weather

`WeatherWidget` iframes the public Weather Underground forecast page for Northbrook / **60062** (no API secret). Print CSS hides the iframe and shows the edition’s fallback high/low/summary. If you obtain an official WU embed URL, set `weather.embedSrc` on the edition.

## Project layout

```
src/
  components/     Masthead, WeatherWidget, Agenda, LeadStory, StoryColumn, puzzles…
  data/
    types.ts
    edition-2026-09-09.ts
    editions/latest.ts
    dayIndex.ts
    puzzles/      jumble · trivia · crossword banks
  pages/index.astro
  styles/newspaper.css   ← print rules are authoritative
  scripts/generate-puzzle-banks.mjs
```

## Later phases (planned)

1. **RSS ingestion** — fetch/normalize feeds → `RssStory[]` per section.
2. **Calendar** — today’s agenda from Google Calendar (or ICS).
3. **Weather** — richer WU embed or API if keys are available.
4. **Grok paste admin** — optional short Morning Roundup only.
5. **Puzzle bank tooling** — easier quarterly refresh; keep day-index model.

## License / personal use

Built for Mike Macfadden (Northbrook, America/Chicago). Family-facing morning paper.
