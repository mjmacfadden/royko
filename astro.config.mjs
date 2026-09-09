// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

/**
 * Server output + per-page prerender:
 * - index / answers prerender at build (with live RSS snapshot)
 * - /api/* stay dynamic for settings-driven feed fetches (no browser CORS)
 */
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
});
