/**
 * Public site base URL for QR codes and absolute links.
 * Set PUBLIC_SITE_URL in .env (e.g. https://daily-mike.example.com).
 * Falls back to http://localhost:4321 for local/dev builds.
 */
export function getSiteBaseUrl(): string {
  const fromEnv =
    (typeof import.meta !== 'undefined' &&
      (import.meta as ImportMeta & { env?: Record<string, string> }).env?.PUBLIC_SITE_URL) ||
    process.env.PUBLIC_SITE_URL ||
    '';
  const raw = (fromEnv || 'http://localhost:4321').trim().replace(/\/$/, '');
  return raw;
}

export function answersUrlForDate(date: string): string {
  return `${getSiteBaseUrl()}/answers/${date}`;
}

/** Paper name — use everywhere instead of legacy Chronicle branding. */
export const PAPER_NAME = 'The Daily Mike';
export const PAPER_NAME_UPPER = 'THE DAILY MIKE';
export const PAPER_TAGLINE = 'Independent · Personal · Daily';
