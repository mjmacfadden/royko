/**
 * Fixed letter-sheet pagination for THE DAILY MIKE.
 *
 * Digital reading view and print share the same `.page-sheet` DOM:
 * one sheet = one letter page, 3 dense columns, no hollow CSS multicol.
 *
 * Never scales text. Overflowing story bodies continue across columns/pages
 * by splitting multi-child units and, when needed, splitting individual
 * paragraphs at sentence (then word) boundaries.
 */

const PAGED_HOST_ID = 'paged-edition';
const SOURCE_CLASS = 'is-source-only';

export type PaginateResult = {
  pageCount: number;
};

function hasPrintableContent(node: Element) {
  if (node.hasAttribute('hidden')) return false;
  const inlineDisplay = (node as HTMLElement).style?.display;
  if (inlineDisplay === 'none') return false;
  return Boolean((node.textContent || '').trim() || node.querySelector('img, svg, table, ol, ul'));
}

function absolutizeUrls(root: ParentNode, base: string) {
  root.querySelectorAll<HTMLImageElement>('img[src]').forEach((img) => {
    try {
      img.setAttribute('src', new URL(img.getAttribute('src') || '', base).href);
      img.removeAttribute('loading');
      img.removeAttribute('decoding');
    } catch {
      /* leave as-is */
    }
  });
  root.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) {
      return;
    }
    try {
      a.setAttribute('href', new URL(href, base).href);
    } catch {
      /* leave as-is */
    }
  });
}

function wrapUnit(node: Element, extraClass = ''): HTMLElement {
  const unit = document.createElement('section');
  unit.className = `sheet-unit ${extraClass}`.trim();
  unit.appendChild(node);
  return unit;
}

function cloneClean(node: Element): Element {
  return node.cloneNode(true) as Element;
}

/**
 * Build ordered flow units from the live edition document.
 * Banner units sit full-width on page 1; column units fill the 3-col grid.
 */
export function buildFlowUnits(editionEl: HTMLElement): {
  banner: HTMLElement[];
  columns: HTMLElement[];
} {
  const liveClone = editionEl.cloneNode(true) as HTMLElement;
  liveClone.removeAttribute('id');

  const stripSelectors = [
    '.screen-only',
    '.screen-chrome',
    '.settings-dialog',
    '.weather-widget-live',
    '.weatherwidget-io',
    '.feed-status-note',
    '.empty-column',
    '.page3-grid',
    '.answers-qr-url',
    'script',
    'iframe',
    'link',
    'style',
  ];
  liveClone.querySelectorAll(stripSelectors.join(',')).forEach((el) => el.remove());
  liveClone.querySelectorAll('[id]').forEach((el) => el.removeAttribute('id'));

  liveClone.querySelectorAll<HTMLElement>('.weather-print, .weather-fallback').forEach((el) => {
    el.style.display = 'block';
    el.hidden = false;
  });

  liveClone.querySelectorAll('.flow-block').forEach((block) => {
    if (!hasPrintableContent(block)) block.remove();
  });
  liveClone.querySelectorAll('.image-placeholder').forEach((placeholder) => placeholder.remove());

  absolutizeUrls(liveClone, window.location.href);

  const banner: HTMLElement[] = [];
  const columns: HTMLElement[] = [];

  const masthead = liveClone.querySelector('.masthead');
  if (masthead && hasPrintableContent(masthead)) {
    banner.push(wrapUnit(cloneClean(masthead), 'sheet-masthead'));
  }

  const weather = liveClone.querySelector('.weather-strip');
  if (weather && hasPrintableContent(weather)) {
    banner.push(wrapUnit(cloneClean(weather), 'sheet-weather'));
  }

  const frontRail = liveClone.querySelector('.front-rail');
  const frontLead = liveClone.querySelector('.front-lead');
  const frontPack = document.createElement('div');
  frontPack.className = 'front-pack sheet-front-pack';
  if (frontRail && hasPrintableContent(frontRail)) {
    frontPack.appendChild(cloneClean(frontRail));
  }
  if (frontLead && hasPrintableContent(frontLead)) {
    frontPack.appendChild(cloneClean(frontLead));
  }
  if (frontPack.children.length) {
    banner.push(wrapUnit(frontPack, 'sheet-front'));
  }

  liveClone.querySelectorAll('.stories-flow > .flow-block').forEach((block) => {
    const storySection = block.firstElementChild;
    if (!storySection || !hasPrintableContent(storySection)) return;

    Array.from(storySection.children).forEach((child) => {
      if (!hasPrintableContent(child)) return;
      if (child.matches('.section-label')) {
        columns.push(wrapUnit(cloneClean(child), 'sheet-section-heading'));
      } else {
        columns.push(wrapUnit(cloneClean(child), 'sheet-story-unit'));
      }
    });
  });

  const featuresHead = liveClone.querySelector('.edition-features .running-head');
  if (featuresHead && hasPrintableContent(featuresHead)) {
    columns.push(wrapUnit(cloneClean(featuresHead), 'sheet-features-heading'));
  }

  liveClone.querySelectorAll('.edition-features .game-cell').forEach((game) => {
    if (!hasPrintableContent(game)) return;
    columns.push(wrapUnit(cloneClean(game), 'sheet-game-unit'));
  });

  const comics = Array.from(liveClone.querySelectorAll('.edition-features .comic-box')).filter(
    hasPrintableContent,
  );
  if (comics.length) {
    const heading = document.createElement('h2');
    heading.className = 'section-label sheet-generated-heading';
    heading.textContent = 'Comics';
    columns.push(wrapUnit(heading, 'sheet-section-heading'));
    comics.forEach((comic) => columns.push(wrapUnit(cloneClean(comic), 'sheet-comic-unit')));
  }

  return { banner, columns };
}

function overflows(el: HTMLElement): boolean {
  return el.scrollHeight - el.clientHeight > 1.5;
}

function isAtomicUnit(unit: HTMLElement): boolean {
  return (
    unit.classList.contains('sheet-game-unit') ||
    unit.classList.contains('sheet-comic-unit') ||
    unit.classList.contains('sheet-section-heading') ||
    unit.classList.contains('sheet-features-heading')
  );
}

function isSplittable(unit: HTMLElement): boolean {
  const host = unit.firstElementChild as HTMLElement | null;
  if (!host || isAtomicUnit(unit)) return false;
  return Array.from(host.children).length >= 2;
}

function isTextSplittableElement(el: Element): boolean {
  if (!(el instanceof HTMLElement)) return false;
  if (el.matches('img, table, svg, figure, .story-image, .comic-frame, .comic-image')) return false;
  if (el.querySelector('img, table, svg')) return false;
  if (el.matches('h1, h2, h3, h4, .section-label, .kicker, .meta, .lead-meta, .sheet-continued')) {
    return false;
  }
  const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
  if (text.length < 24) return false;
  return (
    el.matches('p, .deck, .lead-deck, li, blockquote') ||
    el.tagName === 'P' ||
    (el.tagName === 'DIV' && !el.children.length)
  );
}

function canTextSplit(unit: HTMLElement): boolean {
  if (isAtomicUnit(unit)) return false;
  const host = unit.firstElementChild as HTMLElement | null;
  if (!host) return false;
  return Array.from(host.children).some(isTextSplittableElement);
}

function normalizeText(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

/** Sentence chunks; keeps trailing punctuation with each sentence. */
function splitIntoSentences(text: string): string[] {
  const matches = text.match(/[^.!?]+(?:[.!?]+(?:['”"]*)?)(?:\s+|$)|[^.!?]+$/g);
  if (!matches || matches.length <= 1) return [text];
  return matches.map((s) => s.trim()).filter(Boolean);
}

function splitIntoWords(text: string): string[] {
  return text.split(/\s+/).filter(Boolean);
}

function cloneShell(el: HTMLElement): HTMLElement {
  return el.cloneNode(false) as HTMLElement;
}

function addContinuedMarker(restHost: HTMLElement, fittedHost: HTMLElement | null) {
  const hadHeading = Boolean(
    fittedHost?.querySelector('h1, h2, h3, .section-label, .kicker, .sheet-continued'),
  );
  const cont = document.createElement('p');
  cont.className = 'sheet-continued';
  cont.textContent = hadHeading ? '(continued)' : 'Continued from previous column';
  restHost.appendChild(cont);
}

/**
 * Shrink `el.textContent` to the largest sentence/word prefix that fits in `column`.
 * Returns the leftover suffix (empty if everything fits or nothing could be kept).
 */
function fitTextPrefix(column: HTMLElement, el: HTMLElement, fullText: string): {
  kept: number;
  suffix: string;
} {
  const sentences = splitIntoSentences(fullText);
  const useWords = sentences.length <= 1;
  const parts = useWords ? splitIntoWords(fullText) : sentences;
  if (parts.length <= 1) {
    el.textContent = fullText;
    return { kept: overflows(column) ? 0 : 1, suffix: overflows(column) ? fullText : '' };
  }

  let lo = 0;
  let hi = parts.length;
  let best = 0;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    el.textContent = parts.slice(0, mid).join(' ');
    if (mid === 0) {
      lo = 1;
      continue;
    }
    if (!overflows(column)) {
      best = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  if (best === 0) {
    el.textContent = fullText;
    return { kept: 0, suffix: fullText };
  }

  el.textContent = parts.slice(0, best).join(' ');
  if (best >= parts.length) {
    return { kept: best, suffix: '' };
  }
  return { kept: best, suffix: parts.slice(best).join(' ') };
}

function makeSuffixElement(source: HTMLElement, suffix: string): HTMLElement {
  const el = cloneShell(source);
  el.textContent = suffix;
  return el;
}

/** Move leftover child nodes into a continued unit; keep what fits in `fitted`. */
function splitOverflowingUnit(
  column: HTMLElement,
  unit: HTMLElement,
): { fitted: HTMLElement | null; rest: HTMLElement | null } {
  const host = unit.firstElementChild as HTMLElement | null;
  if (!host) return { fitted: null, rest: unit };

  const children = Array.from(host.children) as HTMLElement[];
  if (children.length < 2) return { fitted: null, rest: unit };

  unit.remove();

  const fitted = document.createElement('section');
  fitted.className = unit.className;
  const fittedHost = cloneShell(host);
  fitted.appendChild(fittedHost);
  column.appendChild(fitted);

  let fitCount = 0;
  for (let i = 0; i < children.length; i++) {
    const clone = children[i].cloneNode(true) as HTMLElement;
    fittedHost.appendChild(clone);
    if (!overflows(column)) {
      fitCount += 1;
      continue;
    }

    // Whole child does not fit — try splitting its text so headline + first chunk stay together.
    if (isTextSplittableElement(clone)) {
      const fullText = normalizeText(clone.textContent || '');
      const { kept, suffix } = fitTextPrefix(column, clone, fullText);
      if (kept > 0 && suffix) {
        const rest = document.createElement('section');
        rest.className = unit.className;
        const restHost = cloneShell(host);
        rest.appendChild(restHost);
        addContinuedMarker(restHost, fittedHost);
        restHost.appendChild(makeSuffixElement(clone, suffix));
        for (let j = i + 1; j < children.length; j++) {
          restHost.appendChild(children[j].cloneNode(true));
        }
        return { fitted, rest };
      }
      if (kept > 0 && !suffix) {
        fitCount += 1;
        continue;
      }
    }

    clone.remove();
    break;
  }

  if (fitCount === 0) {
    fitted.remove();
    return { fitted: null, rest: unit };
  }

  if (fitCount >= children.length) {
    return { fitted, rest: null };
  }

  const rest = document.createElement('section');
  rest.className = unit.className;
  const restHost = cloneShell(host);
  rest.appendChild(restHost);
  addContinuedMarker(restHost, fittedHost);

  for (let i = fitCount; i < children.length; i++) {
    restHost.appendChild(children[i].cloneNode(true));
  }

  return { fitted, rest };
}

/**
 * Split a unit whose overflow is a single tall text block (e.g. one `.deck`
 * alone in a column after a headline-only split).
 */
function splitTextOverflowingUnit(
  column: HTMLElement,
  unit: HTMLElement,
): { fitted: HTMLElement | null; rest: HTMLElement | null } {
  const host = unit.firstElementChild as HTMLElement | null;
  if (!host) return { fitted: null, rest: unit };

  const children = Array.from(host.children) as HTMLElement[];
  let targetIndex = -1;
  for (let i = children.length - 1; i >= 0; i--) {
    if (isTextSplittableElement(children[i])) {
      targetIndex = i;
      break;
    }
  }
  if (targetIndex < 0) return { fitted: null, rest: unit };

  const target = children[targetIndex];
  const fullText = normalizeText(target.textContent || '');
  if (!fullText) return { fitted: null, rest: unit };

  unit.remove();

  const fitted = document.createElement('section');
  fitted.className = unit.className;
  const fittedHost = cloneShell(host);
  fitted.appendChild(fittedHost);
  column.appendChild(fitted);

  for (let i = 0; i < targetIndex; i++) {
    fittedHost.appendChild(children[i].cloneNode(true));
  }

  if (fittedHost.children.length && overflows(column)) {
    fitted.remove();
    column.appendChild(unit);
    return { fitted: null, rest: unit };
  }

  const probe = cloneShell(target);
  fittedHost.appendChild(probe);
  const { kept, suffix } = fitTextPrefix(column, probe, fullText);

  if (kept === 0) {
    probe.remove();
    if (!fittedHost.children.length) {
      fitted.remove();
      return { fitted: null, rest: unit };
    }
    // Keep preceding siblings (e.g. continued marker); defer full text block.
    const rest = document.createElement('section');
    rest.className = unit.className;
    const restHost = cloneShell(host);
    rest.appendChild(restHost);
    addContinuedMarker(restHost, fittedHost);
    for (let i = targetIndex; i < children.length; i++) {
      restHost.appendChild(children[i].cloneNode(true));
    }
    return { fitted, rest };
  }

  if (!suffix) {
    for (let i = targetIndex + 1; i < children.length; i++) {
      const next = children[i].cloneNode(true) as HTMLElement;
      fittedHost.appendChild(next);
      if (overflows(column)) {
        fittedHost.lastElementChild?.remove();
        const rest = document.createElement('section');
        rest.className = unit.className;
        const restHost = cloneShell(host);
        rest.appendChild(restHost);
        addContinuedMarker(restHost, fittedHost);
        for (let j = i; j < children.length; j++) {
          restHost.appendChild(children[j].cloneNode(true));
        }
        return { fitted, rest };
      }
    }
    return { fitted, rest: null };
  }

  const rest = document.createElement('section');
  rest.className = unit.className;
  const restHost = cloneShell(host);
  rest.appendChild(restHost);
  addContinuedMarker(restHost, fittedHost);
  restHost.appendChild(makeSuffixElement(target, suffix));
  for (let i = targetIndex + 1; i < children.length; i++) {
    restHost.appendChild(children[i].cloneNode(true));
  }
  return { fitted, rest };
}

/**
 * Attempt to keep a partial unit in the current column.
 * Returns true if the overflow was resolved (caller should `continue`).
 */
function resolveOverflow(
  column: HTMLElement,
  unitRef: { unit: HTMLElement },
  queue: HTMLElement[],
): boolean {
  let { unit } = unitRef;

  if (isSplittable(unit)) {
    const { fitted, rest } = splitOverflowingUnit(column, unit);
    if (fitted && !rest) return true;
    if (fitted && rest) {
      queue.unshift(rest);
      return true;
    }
    unit = rest || unit;
    unitRef.unit = unit;
    if (!unit.parentElement) column.appendChild(unit);
  }

  if (canTextSplit(unit) && overflows(column)) {
    const { fitted, rest } = splitTextOverflowingUnit(column, unit);
    if (fitted && !rest) return true;
    if (fitted && rest) {
      queue.unshift(rest);
      return true;
    }
    unit = rest || unit;
    unitRef.unit = unit;
    if (!unit.parentElement) column.appendChild(unit);
  }

  return false;
}

async function waitForAssets(root: ParentNode) {
  try {
    await document.fonts?.ready;
  } catch {
    /* system fonts ok */
  }
  const imgs = Array.from(
    (root as Document | Element).querySelectorAll?.('img') || [],
  ) as HTMLImageElement[];
  const pending = imgs.filter((img) => !img.complete);
  if (!pending.length) return;
  await Promise.race([
    Promise.all(
      pending.map(
        (img) =>
          new Promise<void>((resolve) => {
            img.addEventListener('load', () => resolve(), { once: true });
            img.addEventListener('error', () => resolve(), { once: true });
          }),
      ),
    ),
    new Promise<void>((resolve) => window.setTimeout(resolve, 1600)),
  ]);
}

function ensureHost(shell: HTMLElement): HTMLElement {
  let host = document.getElementById(PAGED_HOST_ID);
  if (!host) {
    host = document.createElement('div');
    host.id = PAGED_HOST_ID;
    host.className = 'paged-edition';
    host.setAttribute('aria-label', 'Paginated edition');
    shell.appendChild(host);
  }
  return host;
}

type SheetState = {
  sheet: HTMLElement;
  columns: HTMLElement[];
  colIndex: number;
  pageNumber: number;
};

function createSheet(host: HTMLElement, pageNumber: number, withBanner: boolean): SheetState {
  const sheet = document.createElement('section');
  sheet.className = 'page-sheet';
  sheet.setAttribute('aria-label', `Page ${pageNumber}`);
  sheet.dataset.page = String(pageNumber);
  sheet.innerHTML = `
    <div class="page-sheet-inner">
      ${withBanner ? '<div class="page-sheet-banner"></div>' : ''}
      <div class="page-sheet-columns">
        <div class="page-col" data-col="0"></div>
        <div class="page-col" data-col="1"></div>
        <div class="page-col" data-col="2"></div>
      </div>
      <footer class="page-sheet-folio"><span>THE DAILY MIKE</span><span>Page ${pageNumber}</span></footer>
    </div>`;
  host.appendChild(sheet);
  const cols = Array.from(sheet.querySelectorAll<HTMLElement>('.page-col'));
  return { sheet, columns: cols, colIndex: 0, pageNumber };
}

function currentColumn(state: SheetState): HTMLElement {
  return state.columns[Math.min(state.colIndex, state.columns.length - 1)];
}

function advanceColumn(host: HTMLElement, state: SheetState): SheetState {
  if (state.colIndex < state.columns.length - 1) {
    state.colIndex += 1;
    return state;
  }
  return createSheet(host, state.pageNumber + 1, false);
}

/**
 * Paginate the live `#edition-document` into visible letter `.page-sheet` pages.
 * Hides the continuous source edition (kept for cloning).
 */
export async function paginateEdition(): Promise<PaginateResult> {
  const editionEl = document.getElementById('edition-document') as HTMLElement | null;
  const shell = document.getElementById('newspaper') as HTMLElement | null;
  if (!editionEl || !shell) return { pageCount: 0 };

  editionEl.classList.add(SOURCE_CLASS);
  editionEl.setAttribute('aria-hidden', 'true');

  await waitForAssets(editionEl);

  const { banner, columns: columnUnits } = buildFlowUnits(editionEl);
  const host = ensureHost(shell);
  host.innerHTML = '';

  let state = createSheet(host, 1, true);
  const bannerHost = state.sheet.querySelector('.page-sheet-banner');
  if (bannerHost) {
    banner.forEach((unit) => bannerHost.appendChild(unit));
  }

  // Force layout so column heights account for banner.
  void state.sheet.offsetHeight;

  const queue = [...columnUnits];
  let guard = 0;
  const maxSteps = Math.max(120, queue.length * 16);

  while (queue.length && guard < maxSteps) {
    guard += 1;
    const unitRef = { unit: queue.shift()! };
    let col = currentColumn(state);
    col.appendChild(unitRef.unit);

    if (!overflows(col)) continue;

    // Overflow with other content already in the column: try to keep a partial unit.
    if (col.children.length > 1) {
      if ((isSplittable(unitRef.unit) || canTextSplit(unitRef.unit)) && resolveOverflow(col, unitRef, queue)) {
        continue;
      }
      // Nothing fit — place whole unit on the next column/page.
      unitRef.unit.remove();
    } else if (isSplittable(unitRef.unit) || canTextSplit(unitRef.unit)) {
      // Alone in column and overflows: split in place (no shrink-to-fit).
      if (resolveOverflow(col, unitRef, queue)) continue;
    }

    // Move to a fresh column/page (games/comics move whole; never scale).
    if (unitRef.unit.parentElement === col) unitRef.unit.remove();

    state = advanceColumn(host, state);
    col = currentColumn(state);
    col.appendChild(unitRef.unit);

    if (!overflows(col)) continue;

    if ((isSplittable(unitRef.unit) || canTextSplit(unitRef.unit)) && resolveOverflow(col, unitRef, queue)) {
      continue;
    }

    // Atomic content taller than a column (e.g. comic before CSS max-height applies):
    // leave it and advance — never scale fonts.
    state = advanceColumn(host, state);
  }

  // Drop trailing empty sheets (should not happen, but keep verify clean).
  Array.from(host.querySelectorAll('.page-sheet')).forEach((sheet) => {
    const cols = sheet.querySelectorAll('.page-col');
    const bannerEl = sheet.querySelector('.page-sheet-banner');
    const hasColContent = Array.from(cols).some((c) => c.children.length > 0);
    const hasBanner = Boolean(bannerEl && bannerEl.children.length > 0);
    if (!hasColContent && !hasBanner && host.querySelectorAll('.page-sheet').length > 1) {
      sheet.remove();
    }
  });

  // Renumber folios after any drops.
  const sheets = Array.from(host.querySelectorAll<HTMLElement>('.page-sheet'));
  sheets.forEach((sheet, i) => {
    const n = i + 1;
    sheet.dataset.page = String(n);
    sheet.setAttribute('aria-label', `Page ${n}`);
    const folio = sheet.querySelector('.page-sheet-folio');
    if (folio) {
      folio.innerHTML = `<span>THE DAILY MIKE</span><span>Page ${n}</span>`;
    }
  });

  await waitForAssets(host);

  return { pageCount: sheets.length };
}

export function getPageSheetCount(): number {
  return document.querySelectorAll(`#${PAGED_HOST_ID} .page-sheet`).length;
}

export function scrollToPageSheet(page: number) {
  const sheets = Array.from(document.querySelectorAll<HTMLElement>(`#${PAGED_HOST_ID} .page-sheet`));
  if (!sheets.length) return;
  const idx = Math.min(Math.max(page, 1), sheets.length) - 1;
  const chrome = document.querySelector('.screen-chrome') as HTMLElement | null;
  const top = sheets[idx].getBoundingClientRect().top + window.scrollY - (chrome?.offsetHeight || 0) - 8;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
}
