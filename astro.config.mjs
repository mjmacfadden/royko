// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

/**
 * Server output + per-page prerender:
 * - index / answers prerender at build (with live RSS snapshot)
 * - /api/* stay dynamic for settings-driven feed fetches (no browser CORS)
 *
 * Vivliostyle (@vivliostyle/print) is client-only via dynamic import in
 * src/lib/vivlioPrint.ts — keep it out of the SSR bundle.
 */
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  // Dev-only floating toolbar (audits / x-ray) — off for a clean newspaper preview
  devToolbar: { enabled: false },
  vite: {
    optimizeDeps: {
      include: ['@vivliostyle/print'],
    },
    ssr: {
      external: ['@vivliostyle/print'],
    },
  },
});
