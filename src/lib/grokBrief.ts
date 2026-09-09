/**
 * Parse Mike's Grok Automation morning brief.
 * Canonical patterns:
 *   **The Daily Mike** title, date line, optional lede
 *   ## Section headers
 *   **Headline** + prose (+ optional Named source / Source: lines)
 *   - bullets under "What to watch today"
 */

export type GrokSectionKind =
  | 'weather'
  | 'national'
  | 'local'
  | 'sports'
  | 'markets'
  | 'watch'
  | 'other';

export interface GrokStoryItem {
  headline: string;
  body: string;
  source?: string;
}

export interface GrokSection {
  heading: string;
  kind: GrokSectionKind;
  /** Prose blocks when section isn't headline-driven (e.g. weather) */
  paragraphs: string[];
  items: GrokStoryItem[];
  bullets: string[];
}

export interface ParsedGrokBrief {
  title: string | null;
  dateLine: string | null;
  lede: string | null;
  footer: string | null;
  sections: GrokSection[];
  raw: string;
  /** True when ## / ** structure was found and stories/sections extracted. */
  structured: boolean;
  /** Human-readable parse issue (e.g. missing markdown). */
  warning: string | null;
}

function classifyHeading(heading: string): GrokSectionKind {
  const h = heading.toLowerCase();
  if (/\bweather\b/.test(h)) return 'weather';
  if (/what to watch|to watch today|watch today|agenda/.test(h)) return 'watch';
  if (/\bsports?\b/.test(h)) return 'sports';
  if (/\bmarkets?\b|business|tech\b/.test(h)) return 'markets';
  if (/illinois|chicago|united states|local|northbrook|metro/.test(h)) return 'local';
  if (/national|world|international|global/.test(h)) return 'national';
  return 'other';
}

function stripBoldMarkers(s: string): string {
  return s.replace(/\*\*/g, '').trim();
}

/** Normalize smart quotes, NBSP, Windows newlines before parse. */
export function normalizeBriefText(raw: string): string {
  return (raw || '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\u00a0/g, ' ')
    .replace(/[\u2018\u2019\u201a\u201b]/g, "'")
    .replace(/[\u201c\u201d\u201e\u201f]/g, '"')
    .replace(/[\u2013\u2014]/g, '—')
    .trim();
}

function isSourceLine(line: string): string | null {
  const t = line.trim();
  const m =
    t.match(/^(?:Named\s+)?[Ss]ource:\s*(.+)$/) ||
    t.match(/^Named\s+source:\s*(.+)$/i);
  return m ? m[1].trim() : null;
}

function isFooter(line: string): boolean {
  return /^compiled\b/i.test(line.trim());
}

function isBullet(line: string): string | null {
  const m = line.match(/^\s*[-*•]\s+(.+)$/);
  return m ? m[1].trim() : null;
}

/**
 * ## headings — allow missing space, extra #s (###), trailing hashes.
 * Reject single # (too ambiguous with plain text).
 */
function isHeading(line: string): string | null {
  const t = line.trim();
  // ##Heading / ## Heading / ### Heading / ## Heading ##
  const m = t.match(/^#{2,6}\s*(.+?)(?:\s*#*)?$/);
  if (!m) return null;
  const inner = m[1].replace(/#+\s*$/, '').trim();
  if (!inner) return null;
  // Don't treat a lone bold title as a heading
  if (/^\*\*.+\*\*$/.test(inner) && /^the daily mike$/i.test(stripBoldMarkers(inner))) {
    return null;
  }
  return stripBoldMarkers(inner);
}

/**
 * **Headline** alone on a line, OR **Headline** followed by body on same line.
 * Returns [headline, optionalSameLineBody].
 */
function isHeadlineLine(line: string): { headline: string; rest: string } | null {
  const t = line.trim();
  // Full-line bold
  let m = t.match(/^\*\*(.+?)\*\*\s*$/);
  if (m) {
    const inner = m[1].trim();
    if (/^the daily mike$/i.test(inner)) return null;
    return { headline: inner, rest: '' };
  }
  // **Headline** then more text on same line
  m = t.match(/^\*\*(.+?)\*\*\s+(.+)$/);
  if (m) {
    const inner = m[1].trim();
    if (/^the daily mike$/i.test(inner)) return null;
    // Avoid treating **bold** mid-sentence as headline if too long
    if (inner.length > 140) return null;
    return { headline: inner, rest: m[2].trim() };
  }
  return null;
}

/** Known section titles when paste lost ## markers. */
const BARE_SECTION_RE =
  /^(weather(?:\s*[—–-].*)?|national(?:\s*&\s*world)?|world|united states(?:\s*\/\s*illinois(?:\s*\/\s*chicago)?)?|illinois(?:\s*\/\s*chicago)?|chicago|local|sports|markets|business(?:\s*[·•]\s*tech)?|what to watch(?:\s+today)?)$/i;

function isBareSectionHeading(line: string): string | null {
  const t = stripBoldMarkers(line.trim());
  if (!t || t.length > 80) return null;
  if (BARE_SECTION_RE.test(t)) return t;
  return null;
}

/**
 * Light heuristic when markdown was stripped: short Title-ish lines
 * followed by longer prose become headlines.
 */
function heuristicItemsFromParagraphs(paras: string[]): GrokStoryItem[] {
  const items: GrokStoryItem[] = [];
  let i = 0;
  while (i < paras.length) {
    const line = paras[i];
    const next = paras[i + 1];
    const words = line.split(/\s+/).length;
    const looksLikeHeadline =
      line.length <= 120 &&
      words >= 3 &&
      words <= 16 &&
      !/[.!?]$/.test(line) &&
      !isSourceLine(line) &&
      !isFooter(line) &&
      next &&
      next.length > line.length * 0.6;
    if (looksLikeHeadline) {
      let body = next;
      let source: string | undefined;
      i += 2;
      if (i < paras.length) {
        const src = isSourceLine(paras[i]);
        if (src) {
          source = src;
          i++;
        }
      }
      items.push({ headline: line, body, source });
      continue;
    }
    i++;
  }
  return items;
}

function emptyParsed(text: string, warning: string | null = null): ParsedGrokBrief {
  return {
    title: null,
    dateLine: null,
    lede: null,
    footer: null,
    sections: [],
    raw: text,
    structured: false,
    warning,
  };
}

/**
 * Parse raw Grok Automation paste into structured sections + story items.
 */
export function parseGrokBrief(raw: string): ParsedGrokBrief {
  const text = normalizeBriefText(raw);
  if (!text) return emptyParsed('');

  const lines = text.split('\n');
  let title: string | null = null;
  let dateLine: string | null = null;
  let footer: string | null = null;
  const sections: GrokSection[] = [];

  let i = 0;
  // Title
  if (lines[i] && /^\*\*The Daily Mike\*\*/i.test(lines[i].trim())) {
    title = 'The Daily Mike';
    i++;
  } else if (lines[i] && /^The Daily Mike$/i.test(stripBoldMarkers(lines[i]))) {
    title = 'The Daily Mike';
    i++;
  }

  // Skip blanks
  while (i < lines.length && !lines[i].trim()) i++;

  // Date line (before first ##)
  if (
    i < lines.length &&
    !isHeading(lines[i]) &&
    !isBareSectionHeading(lines[i]) &&
    /20\d{2}|january|february|march|april|may|june|july|august|september|october|november|december|america\/chicago|\bCT\b/i.test(
      lines[i],
    )
  ) {
    dateLine = lines[i].trim();
    i++;
  }

  while (i < lines.length && !lines[i].trim()) i++;

  // Lede / pre-heading paragraphs until first section heading
  const ledeParts: string[] = [];
  while (
    i < lines.length &&
    !isHeading(lines[i]) &&
    !isBareSectionHeading(lines[i])
  ) {
    const line = lines[i];
    if (isFooter(line)) {
      footer = line.trim();
      i++;
      break;
    }
    if (line.trim()) ledeParts.push(line.trim());
    i++;
  }
  // Cap lede — never dump the whole paste into the roundup box
  let lede = ledeParts.length ? ledeParts.join(' ') : null;
  if (lede && lede.length > 600) {
    lede = lede.slice(0, 597).trimEnd() + '…';
  }

  let current: GrokSection | null = null;
  let pendingItem: GrokStoryItem | null = null;
  let sawMarkdownHeading = false;

  const flushItem = () => {
    if (current && pendingItem) {
      pendingItem.body = pendingItem.body.trim();
      current.items.push(pendingItem);
      pendingItem = null;
    }
  };

  const startSection = (heading: string) => {
    flushItem();
    current = {
      heading,
      kind: classifyHeading(heading),
      paragraphs: [],
      items: [],
      bullets: [],
    };
    sections.push(current);
  };

  for (; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (isFooter(trimmed)) {
      flushItem();
      footer = trimmed;
      continue;
    }

    const heading = isHeading(trimmed);
    if (heading) {
      sawMarkdownHeading = true;
      startSection(heading);
      continue;
    }

    const bare = isBareSectionHeading(trimmed);
    if (bare) {
      startSection(bare);
      continue;
    }

    if (!current) {
      // Stray pre-section line — fold into lede if still short
      if (!lede) lede = trimmed;
      else if (lede.length < 400) lede = `${lede} ${trimmed}`;
      continue;
    }

    const bullet = isBullet(trimmed);
    if (bullet) {
      flushItem();
      current.bullets.push(bullet);
      continue;
    }

    const hl = isHeadlineLine(trimmed);
    if (hl) {
      flushItem();
      pendingItem = { headline: hl.headline, body: hl.rest || '' };
      continue;
    }

    const src = isSourceLine(trimmed);
    if (src && pendingItem) {
      pendingItem.source = src;
      flushItem();
      continue;
    }

    if (pendingItem) {
      pendingItem.body = pendingItem.body ? `${pendingItem.body} ${trimmed}` : trimmed;
      continue;
    }

    // Free prose in section (weather, etc.)
    current.paragraphs.push(trimmed);
  }
  flushItem();

  // Heuristic: sections that only have paragraphs (lost **) → try headline pairs
  for (const sec of sections) {
    if (sec.items.length === 0 && sec.paragraphs.length >= 2 && sec.kind !== 'weather' && sec.kind !== 'watch') {
      const guessed = heuristicItemsFromParagraphs(sec.paragraphs);
      if (guessed.length) {
        sec.items = guessed;
        sec.paragraphs = [];
      }
    }
  }

  const storyCount = sections.reduce((n, s) => n + s.items.length, 0);
  const hasUseful =
    storyCount > 0 ||
    sections.some((s) => s.kind === 'weather' && s.paragraphs.length) ||
    sections.some((s) => s.kind === 'watch' && s.bullets.length);

  // No sections at all — do NOT dump raw body as a fake "Brief" paragraph section
  if (!sections.length) {
    return {
      title,
      dateLine,
      lede: null,
      footer,
      sections: [],
      raw: text,
      structured: false,
      warning: 'Paste needs markdown ## sections (and **Headlines**). Raw text was not dumped onto the paper.',
    };
  }

  // Sections found but no stories / weather / watch content
  if (!hasUseful) {
    return {
      title,
      dateLine,
      lede: sawMarkdownHeading ? lede : null,
      footer,
      sections,
      raw: text,
      structured: false,
      warning: sawMarkdownHeading
        ? 'Found ## sections but no **Headline** stories. Use **Headline** on its own line, then the deck.'
        : 'Paste needs markdown ## sections (and **Headlines**). Could not structure this paste.',
    };
  }

  return {
    title,
    dateLine,
    lede,
    footer,
    sections,
    raw: text,
    structured: true,
    warning: null,
  };
}

/** Map section kind → newspaper column key for interleave. */
export function sectionColumn(
  kind: GrokSectionKind,
): 'news' | 'also' | 'sports' | 'businessTech' | 'weather' | 'watch' | 'lead' {
  switch (kind) {
    case 'weather':
      return 'weather';
    case 'watch':
      return 'watch';
    case 'sports':
      return 'sports';
    case 'markets':
      return 'businessTech';
    case 'local':
      return 'also';
    case 'national':
      return 'news';
    default:
      return 'news';
  }
}

export interface BriefStoryCard {
  id: string;
  title: string;
  description: string;
  source: string;
  kind: GrokSectionKind;
  column: ReturnType<typeof sectionColumn>;
}

/** Flatten story-like Grok items for interleaving with RSS. */
export function grokItemsAsStories(parsed: ParsedGrokBrief): BriefStoryCard[] {
  const out: BriefStoryCard[] = [];
  let n = 0;
  for (const sec of parsed.sections) {
    const col = sectionColumn(sec.kind);
    for (const item of sec.items) {
      n++;
      out.push({
        id: `grok-${n}`,
        title: item.headline,
        description: item.body,
        source: item.source ? `Brief · ${item.source}` : 'Brief',
        kind: sec.kind,
        column: col,
      });
    }
  }
  return out;
}

/** Alternate A and B arrays (A-first). */
export function interleave<T>(a: T[], b: T[]): T[] {
  const out: T[] = [];
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (i < a.length) out.push(a[i]);
    if (i < b.length) out.push(b[i]);
  }
  return out;
}
