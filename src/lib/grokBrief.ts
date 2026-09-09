/**
 * Parse Mike's Grok Automation morning brief.
 *
 * Canonical paste dialect (what Grok emits now):
 *   optional **The Daily Mike** / date / lede
 *   ***Section Name***          ← SECTION (Weather, National & World, …)
 *   **Headline**                ← story headline
 *   *Named source: Outlet, Date*  (or plain Named source: / Source:)
 *   plain body paragraphs
 *   ****https://image-url.jpg****   ← optional story image (alone on a line;
 *       optional duplicate URL in parens, e.g. ****url (url//)****)
 *   - bullets under "What to watch today"
 *   Compiled … footer
 *
 * Alternates still accepted:
 *   ## Section headers
 *   ***Headline*** (older dialect — only when ***text*** is NOT a known section)
 *   **byline/source** after a headline
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
  /** Optional image from ****https://…**** marker in the paste. */
  imageUrl?: string;
}

export interface GrokSection {
  heading: string;
  kind: GrokSectionKind;
  /** Prose blocks when section isn't headline-driven (e.g. weather) */
  paragraphs: string[];
  items: GrokStoryItem[];
  bullets: string[];
  /** Image before any story in the section (rare). */
  imageUrl?: string;
}

export interface ParsedGrokBrief {
  title: string | null;
  dateLine: string | null;
  lede: string | null;
  footer: string | null;
  sections: GrokSection[];
  raw: string;
  /** True when section / headline structure was found and stories/sections extracted. */
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

/** Unwrap a single pair of italic *…* markers (not ** or ***). */
function unwrapItalicMarkers(s: string): string {
  const t = s.trim();
  const m = t.match(/^\*([^*][\s\S]*?)\*$/);
  if (!m) return t;
  // Reject if it still looks like bold/triple (**x** starts with *)
  if (t.startsWith('**')) return t;
  return m[1].trim();
}

function isSourceLine(line: string): string | null {
  let t = line.trim();
  // *Named source: …* or *Source: …*
  if (/^\*[^*]/.test(t) && t.endsWith('*') && !t.startsWith('**')) {
    t = unwrapItalicMarkers(t);
  }
  // **Named source: …**
  if (/^\*\*[^*]/.test(t) && /\*\*$/.test(t) && !t.startsWith('***')) {
    t = stripBoldMarkers(t);
  }
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
 * Image marker alone on a line (quadruple asterisks):
 *   ****https://example.com/img.jpg****
 *   ****https://…/img.jpg (https://…/img.jpg//)****
 * Returns the primary https URL, or null.
 */
export function extractImageMarker(line: string): string | null {
  const t = line.trim();
  const m = t.match(
    /^\*{4}\s*(https?:\/\/[^\s*]+?)(?:\s*\(\s*(https?:\/\/[^)]+?)\s*\))?\s*\*{4}\s*$/,
  );
  if (!m) return null;
  // Primary URL is before the optional paren duplicate; clean trailing // artifacts.
  const raw = (m[1] || m[2] || '').trim();
  const url = raw.replace(/\/{2,}$/, '');
  if (!/^https?:\/\//i.test(url)) return null;
  return url;
}

/** Strip ****image**** markers that leaked into body prose. */
export function stripImageMarkers(text: string): string {
  return text
    .replace(/\*{4}\s*https?:\/\/[^\s*]+?(?:\s*\([^)]*\))?\s*\*{4}/g, ' ')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/ *\n */g, '\n')
    .trim();
}

/**
 * ## headings — allow missing space, extra #s (###), trailing hashes.
 * Reject single # (too ambiguous with plain text).
 */
function isHeading(line: string): string | null {
  const t = line.trim();
  const m = t.match(/^#{2,6}\s*(.+?)(?:\s*#*)?$/);
  if (!m) return null;
  const inner = m[1].replace(/#+\s*$/, '').trim();
  if (!inner) return null;
  if (/^\*\*.+\*\*$/.test(inner) && /^the daily mike$/i.test(stripBoldMarkers(inner))) {
    return null;
  }
  return stripBoldMarkers(inner);
}

/** Known section titles when paste lost ## / *** markers. */
const BARE_SECTION_RE =
  /^(weather(?:\s*[—–-].*)?|national(?:\s*&\s*world)?|world|united states(?:\s*\/\s*illinois(?:\s*\/\s*chicago)?)?|illinois(?:\s*\/\s*chicago)?|chicago|local|sports|markets|business(?:\s*[·•]\s*tech)?|what to watch(?:\s+today)?)$/i;

/** Extract inner text from a lone ***…*** line, or null. */
function tripleAsteriskInner(line: string): string | null {
  const t = line.trim();
  const m = t.match(/^\*\*\*(.+?)\*\*\*\s*$/);
  if (!m) return null;
  const inner = m[1].trim();
  if (!inner || /^the daily mike$/i.test(inner)) return null;
  return inner;
}

/**
 * True when ***inner*** should be a SECTION, not a story headline.
 * Prefer known kinds / titles; also section-like titles with — or /.
 */
function looksLikeSectionTitle(inner: string): boolean {
  if (!inner || inner.length > 100) return false;
  if (classifyHeading(inner) !== 'other') return true;
  if (BARE_SECTION_RE.test(inner)) return true;
  // e.g. "Weather — Northbrook, Illinois" / "United States / Illinois / Chicago"
  if (/[—\/]/.test(inner) && classifyHeading(inner) !== 'other') return true;
  if (
    /[—\/]/.test(inner) &&
    /\b(weather|national|world|united states|illinois|chicago|sports|markets|watch)\b/i.test(
      inner,
    )
  ) {
    return true;
  }
  return false;
}

/** ***Section Name*** alone on a line → section heading, or null if headline. */
function isTripleSection(line: string): string | null {
  const inner = tripleAsteriskInner(line);
  if (!inner) return null;
  if (looksLikeSectionTitle(inner)) return inner;
  return null;
}

/**
 * Story headline:
 *   Prefer **Headline** (current Grok dialect).
 *   ***Headline*** only when NOT classified as a section (older dialect).
 * Returns [headline, optionalSameLineBody].
 */
function isHeadlineLine(line: string): { headline: string; rest: string } | null {
  const t = line.trim();

  // ***…*** — section wins elsewhere; leftover *** is legacy headline
  const tripleInner = tripleAsteriskInner(t);
  if (tripleInner !== null) {
    if (looksLikeSectionTitle(tripleInner)) return null;
    return { headline: tripleInner, rest: '' };
  }
  // ***Headline*** then more text on same line (legacy)
  let m = t.match(/^\*\*\*(.+?)\*\*\*\s+(.+)$/);
  if (m) {
    const inner = m[1].trim();
    if (!inner || /^the daily mike$/i.test(inner)) return null;
    if (looksLikeSectionTitle(inner)) return null;
    if (inner.length > 140) return null;
    return { headline: inner, rest: m[2].trim() };
  }

  if (/^\*\*\*/.test(t)) return null;

  // Canonical: **Headline** alone
  m = t.match(/^\*\*(.+?)\*\*\s*$/);
  if (m) {
    const inner = m[1].trim();
    if (!inner || /^the daily mike$/i.test(inner)) return null;
    // Don't treat "**Named source: …**" as a headline — source/byline instead
    if (isSourceLine(`**${inner}**`) || /^(?:Named\s+)?[Ss]ource:/i.test(inner)) {
      return null;
    }
    return { headline: inner, rest: '' };
  }
  // **Headline** then more text on same line
  m = t.match(/^\*\*(.+?)\*\*\s+(.+)$/);
  if (m) {
    const inner = m[1].trim();
    if (!inner || /^the daily mike$/i.test(inner)) return null;
    if (inner.length > 140) return null;
    if (/^(?:Named\s+)?[Ss]ource:/i.test(inner)) return null;
    return { headline: inner, rest: m[2].trim() };
  }
  return null;
}

/**
 * **byline/source** alone on a line (double asterisk only — not ***).
 * Used immediately after a headline. Also unwraps "Named source:" / "Source:" inside bold.
 */
function isBylineLine(line: string): string | null {
  const t = line.trim();
  if (/^\*\*\*/.test(t)) return null;
  // Italic *Named source: …* — handled via isSourceLine in the main loop
  const srcItalic = isSourceLine(t);
  if (srcItalic && /^\*[^*]/.test(t) && !t.startsWith('**')) return srcItalic;

  const m = t.match(/^\*\*(.+?)\*\*\s*$/);
  if (!m) return null;
  const inner = m[1].trim();
  if (!inner || /^the daily mike$/i.test(inner)) return null;
  const named = isSourceLine(inner) || isSourceLine(`**${inner}**`);
  // Only treat as byline when it looks like a source/byline, OR short attribution.
  // Prefer Named source: / Source: ; otherwise accept short bold lines as bylines
  // (legacy **Wire Brief**) when caller already gated on pending empty-body item.
  if (named) return named;
  if (inner.length <= 80 && !/[.!?]$/.test(inner)) return inner;
  return null;
}

function isTimezoneLine(line: string): boolean {
  const t = line.trim();
  return /^(America\/Chicago|US\/Central|[A-Za-z]+\/[A-Za-z_]+)$/i.test(t);
}

function isBareSectionHeading(line: string): string | null {
  const t = stripBoldMarkers(line.trim());
  if (!t || t.length > 80) return null;
  // Ignore *** / ** wrappers already stripped; also strip lone *
  const bare = t.replace(/^\*+|\*+$/g, '').trim();
  if (BARE_SECTION_RE.test(bare)) return bare;
  if (BARE_SECTION_RE.test(t)) return t;
  return null;
}

function isSectionStart(line: string): string | null {
  return isHeading(line) || isTripleSection(line) || isBareSectionHeading(line);
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

  while (i < lines.length && !lines[i].trim()) i++;

  // Date line (before first section)
  if (
    i < lines.length &&
    !isSectionStart(lines[i]) &&
    /20\d{2}|january|february|march|april|may|june|july|august|september|october|november|december|america\/chicago|\bCT\b/i.test(
      lines[i],
    )
  ) {
    dateLine = lines[i].trim();
    i++;
  }

  while (i < lines.length && !lines[i].trim()) i++;

  if (i < lines.length && isTimezoneLine(lines[i])) {
    const tz = lines[i].trim();
    dateLine = dateLine ? `${dateLine} · ${tz}` : tz;
    i++;
  }

  while (i < lines.length && !lines[i].trim()) i++;

  // Lede / pre-heading paragraphs until first section heading
  const ledeParts: string[] = [];
  while (i < lines.length && !isSectionStart(lines[i])) {
    const line = lines[i];
    if (isFooter(line)) {
      footer = line.trim();
      i++;
      break;
    }
    if (line.trim()) ledeParts.push(line.trim());
    i++;
  }
  let lede = ledeParts.length ? ledeParts.join(' ') : null;
  if (lede && lede.length > 600) {
    lede = lede.slice(0, 597).trimEnd() + '…';
  }

  let current: GrokSection | null = null;
  let pendingItem: GrokStoryItem | null = null;
  let sawMarkdownHeading = false;

  let pendingSectionImage: string | undefined;

  const flushItem = () => {
    if (current && pendingItem) {
      pendingItem.body = stripImageMarkers(pendingItem.body.trim());
      if (!pendingItem.imageUrl && pendingSectionImage) {
        pendingItem.imageUrl = pendingSectionImage;
        pendingSectionImage = undefined;
      }
      current.items.push(pendingItem);
      pendingItem = null;
    }
  };

  const startSection = (heading: string) => {
    flushItem();
    if (current && pendingSectionImage) {
      current.imageUrl = pendingSectionImage;
      pendingSectionImage = undefined;
    }
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

    // ****https://…**** image markers (must run before *** section/headline)
    const imageUrl = extractImageMarker(trimmed);
    if (imageUrl) {
      if (pendingItem) {
        pendingItem.imageUrl = imageUrl;
      } else {
        pendingSectionImage = imageUrl;
      }
      continue;
    }

    const mdHeading = isHeading(trimmed);
    if (mdHeading) {
      sawMarkdownHeading = true;
      startSection(mdHeading);
      continue;
    }

    const tripleSec = isTripleSection(trimmed);
    if (tripleSec) {
      sawMarkdownHeading = true;
      startSection(tripleSec);
      continue;
    }

    const bare = isBareSectionHeading(trimmed);
    if (bare) {
      startSection(bare);
      continue;
    }

    if (!current) {
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

    // Byline / *Named source:* immediately after a headline (body still empty)
    if (pendingItem && !pendingItem.body.trim() && !pendingItem.source) {
      const byline = isBylineLine(trimmed);
      if (byline) {
        pendingItem.source = byline;
        continue;
      }
      const earlySrc = isSourceLine(trimmed);
      if (earlySrc) {
        pendingItem.source = earlySrc;
        continue;
      }
    }

    const hl = isHeadlineLine(trimmed);
    if (hl) {
      flushItem();
      pendingItem = {
        headline: hl.headline,
        body: hl.rest || '',
        imageUrl: pendingSectionImage,
      };
      pendingSectionImage = undefined;
      continue;
    }

    const src = isSourceLine(trimmed);
    if (src && pendingItem) {
      pendingItem.source = src;
      if (pendingItem.body.trim()) {
        flushItem();
      }
      continue;
    }

    if (pendingItem) {
      pendingItem.body = pendingItem.body ? `${pendingItem.body} ${trimmed}` : trimmed;
      continue;
    }

    // Free prose in section (weather, markets, etc.)
    // Skip orphan Source: lines under weather — fold into last paragraph note
    if (src && current.paragraphs.length) {
      current.paragraphs[current.paragraphs.length - 1] += ` (Source: ${src})`;
      continue;
    }
    current.paragraphs.push(trimmed);
  }
  flushItem();
  if (current && pendingSectionImage) {
    current.imageUrl = pendingSectionImage;
    pendingSectionImage = undefined;
  }

  // Heuristic: sections that only have paragraphs (lost **) → try headline pairs
  for (const sec of sections) {
    if (
      sec.items.length === 0 &&
      sec.paragraphs.length >= 2 &&
      sec.kind !== 'weather' &&
      sec.kind !== 'watch' &&
      sec.kind !== 'markets'
    ) {
      const guessed = heuristicItemsFromParagraphs(sec.paragraphs);
      if (guessed.length) {
        sec.items = guessed;
        sec.paragraphs = [];
      }
    }
  }

  // Markets prose-only → one Brief card for Business · Tech interleave
  for (const sec of sections) {
    if (sec.kind === 'markets' && sec.items.length === 0 && sec.paragraphs.length) {
      sec.items.push({
        headline: 'Markets',
        body: sec.paragraphs.join(' '),
      });
      sec.paragraphs = [];
    }
  }

  const storyCount = sections.reduce((n, s) => n + s.items.length, 0);
  const hasUseful =
    storyCount > 0 ||
    sections.some((s) => s.kind === 'weather' && s.paragraphs.length) ||
    sections.some((s) => s.kind === 'watch' && s.bullets.length);

  if (!sections.length) {
    return {
      title,
      dateLine,
      lede: null,
      footer,
      sections: [],
      raw: text,
      structured: false,
      warning:
        'Paste needs ***Section*** (or ## Section) markers and **Headline** stories. Raw text was not dumped onto the paper.',
    };
  }

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
        ? 'Found sections but no **Headline** stories. Use **Headline** on its own line, optional *Named source:…*, then plain body.'
        : 'Paste needs ***Section*** / ## sections and **Headline** stories. Could not structure this paste.',
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
  imageUrl?: string;
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
        imageUrl: item.imageUrl,
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
