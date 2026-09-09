/**
 * Vivliostyle print path for THE DAILY MIKE.
 * Builds a dedicated print HTML document (root multicol) and hands it to
 * @vivliostyle/print → printHTML (paginates in a hidden iframe, then prints).
 *
 * AGPL-3.0: @vivliostyle/print — see README.
 */

import printCss from '../styles/vivliostyle-print.css?raw';

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600;700&family=Manufacturing+Consent&family=Merriweather:ital,opsz,wght@0,18..144,300;0,18..144,400;0,18..144,700;1,18..144,300;1,18..144,400&family=Playfair+Display:wght@700;900&display=swap';

const PREVIEW_BAR_ID = 'vivlio-preview-bar';
const PREVIEW_STYLE_ID = 'vivlio-preview-iframe-style';

export type VivlioPrintOptions = {
  title?: string;
  /** When true, show the Vivliostyle iframe as an on-screen paged preview instead of opening the print dialog. */
  preview?: boolean;
};

function absolutizeUrls(root: ParentNode, base: string) {
  root.querySelectorAll<HTMLImageElement>('img[src]').forEach((img) => {
    try {
      img.setAttribute('src', new URL(img.getAttribute('src') || '', base).href);
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

/**
 * Clone the live `.edition-document`, strip screen chrome, and wrap in a
 * minimal HTML document that Vivliostyle paginates with root multicol.
 */
export function buildPrintHtml(editionEl: HTMLElement, title = 'The Daily Mike'): string {
  const clone = editionEl.cloneNode(true) as HTMLElement;
  clone.removeAttribute('id');

  const stripSelectors = [
    '.screen-only',
    '.screen-chrome',
    '.settings-dialog',
    '.weather-widget-live',
    '.weatherwidget-io',
    '.feed-status-note',
    '.empty-column',
    'script',
    'iframe',
    'link',
    'style',
  ];
  clone.querySelectorAll(stripSelectors.join(',')).forEach((el) => el.remove());

  // Ensure B&W print weather is visible in the print doc (CSS also forces this)
  clone.querySelectorAll<HTMLElement>('.weather-print, .weather-fallback').forEach((el) => {
    el.style.display = 'block';
    el.hidden = false;
  });

  // Drop empty flow blocks so they don't leave holes
  clone.querySelectorAll('.flow-block').forEach((block) => {
    if (!(block.textContent || '').trim() && !block.querySelector('img, svg, table')) {
      block.remove();
    }
  });

  absolutizeUrls(clone, window.location.href);

  const bodyHtml = clone.outerHTML;
  const safeTitle = title.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${safeTitle}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="${FONTS_HREF}" rel="stylesheet" />
  <style>
${printCss}
  </style>
</head>
<body>
${bodyHtml}
</body>
</html>`;
}

function clearPreviewChrome() {
  document.getElementById(PREVIEW_BAR_ID)?.remove();
  document.getElementById(PREVIEW_STYLE_ID)?.remove();
  document.querySelectorAll('iframe').forEach((frame) => {
    if (frame.dataset.vivlioPreview === '1') {
      frame.remove();
    }
  });
}

function showPreviewOverlay(iframeWin: Window) {
  const iframe = iframeWin.frameElement as HTMLIFrameElement | null;
  if (!iframe) {
    iframeWin.print();
    return;
  }

  clearPreviewChrome();
  iframe.dataset.vivlioPreview = '1';

  const style = document.createElement('style');
  style.id = PREVIEW_STYLE_ID;
  style.textContent = `
    iframe[data-vivlio-preview="1"] {
      position: fixed !important;
      left: 0 !important;
      right: 0 !important;
      top: 48px !important;
      bottom: 0 !important;
      width: 100% !important;
      height: calc(100% - 48px) !important;
      border: 0 !important;
      z-index: 100000 !important;
      background: #e8e2d4 !important;
      visibility: visible !important;
      opacity: 1 !important;
    }
    body.vivlio-preview-open { overflow: hidden; }
  `;
  document.head.appendChild(style);

  const bar = document.createElement('div');
  bar.id = PREVIEW_BAR_ID;
  bar.setAttribute('role', 'toolbar');
  bar.style.cssText = [
    'position:fixed',
    'top:0',
    'left:0',
    'right:0',
    'height:48px',
    'z-index:100001',
    'display:flex',
    'align-items:center',
    'justify-content:space-between',
    'gap:0.75rem',
    'padding:0 1rem',
    'background:#1a1a1a',
    'color:#f7f3e8',
    'font-family:Libre Franklin,Helvetica,Arial,sans-serif',
    'font-size:0.8rem',
  ].join(';');
  bar.innerHTML = `
    <span>Print edition preview · Vivliostyle pages (same as Print)</span>
    <span style="display:flex;gap:0.5rem;">
      <button type="button" data-vivlio-print style="appearance:none;border:1px solid #f7f3e8;background:transparent;color:#f7f3e8;font:inherit;padding:0.35rem 0.75rem;cursor:pointer;text-transform:uppercase;letter-spacing:0.04em;">Print</button>
      <button type="button" data-vivlio-close style="appearance:none;border:1px solid #f7f3e8;background:transparent;color:#f7f3e8;font:inherit;padding:0.35rem 0.75rem;cursor:pointer;text-transform:uppercase;letter-spacing:0.04em;">Close</button>
    </span>
  `;
  document.body.appendChild(bar);
  document.body.classList.add('vivlio-preview-open');

  bar.querySelector('[data-vivlio-print]')?.addEventListener('click', () => {
    iframeWin.print();
  });
  bar.querySelector('[data-vivlio-close]')?.addEventListener('click', () => {
    document.body.classList.remove('vivlio-preview-open');
    clearPreviewChrome();
  });
}

async function loadPrintHTML() {
  const mod = await import('@vivliostyle/print');
  return mod.printHTML;
}

/**
 * Paginate with Vivliostyle and either print or show an on-screen paged preview.
 */
export async function printWithVivliostyle(
  editionEl: HTMLElement,
  options: VivlioPrintOptions = {},
): Promise<void> {
  const title = options.title || 'The Daily Mike';
  const htmlDoc = buildPrintHtml(editionEl, title);
  const printHTML = await loadPrintHTML();

  if (options.preview) {
    printHTML(htmlDoc, {
      title,
      hideIframe: false,
      removeIframe: false,
      printCallback: (iframeWin) => showPreviewOverlay(iframeWin),
      errorCallback: (message) => {
        console.error('[vivlioPrint]', message);
        window.alert(`Print preview failed: ${message}`);
      },
    });
    return;
  }

  printHTML(htmlDoc, {
    title,
    printCallback: (iframeWin) => iframeWin.print(),
    errorCallback: (message) => {
      console.error('[vivlioPrint]', message);
      window.alert(`Print failed: ${message}`);
    },
  });
}

export async function printEdition(editionEl: HTMLElement, title?: string) {
  return printWithVivliostyle(editionEl, { title, preview: false });
}

export async function previewEdition(editionEl: HTMLElement, title?: string) {
  return printWithVivliostyle(editionEl, { title, preview: true });
}
