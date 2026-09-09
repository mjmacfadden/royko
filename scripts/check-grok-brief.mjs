/**
 * Quick self-check: parseGrokBrief on the canonical sample.
 * Run: node --experimental-strip-types scripts/check-grok-brief.mjs
 * (also invoked via: node scripts/check-grok-brief.mjs)
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const sample = readFileSync(join(root, 'src/data/samples/grok-brief-example.md'), 'utf8');

async function loadParser() {
  const ts = join(root, 'src/lib/grokBrief.ts');
  try {
    return await import(pathToFileURL(ts).href);
  } catch {
    // Re-exec under strip-types
    const r = spawnSync(
      process.execPath,
      ['--experimental-strip-types', fileURLToPath(import.meta.url)],
      { cwd: root, encoding: 'utf8', env: { ...process.env, GROK_CHECK_STRIP: '1' } },
    );
    process.stdout.write(r.stdout || '');
    process.stderr.write(r.stderr || '');
    process.exit(r.status ?? 1);
  }
}

const { parseGrokBrief, grokItemsAsStories, extractImageMarker } = await loadParser();
const parsed = parseGrokBrief(sample);
const byKind = Object.fromEntries(parsed.sections.map((s) => [s.kind, s]));
const cards = grokItemsAsStories(parsed);

let failed = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL:', msg);
    failed++;
  } else {
    console.log('ok:', msg);
  }
}

assert(parsed.structured === true, 'structured === true');
for (const k of ['weather', 'national', 'local', 'sports', 'markets', 'watch']) {
  assert(!!byKind[k], `has ${k} section`);
}
assert(byKind.weather.paragraphs.length >= 1, `weather prose (${byKind.weather.paragraphs.length})`);
assert(byKind.national.items.length >= 2, `national items >= 2 (got ${byKind.national.items.length})`);
assert(
  byKind.national.items.every((i) => !!i.source),
  'national items have sources',
);
assert(byKind.local.items.length >= 2, `local items >= 2 (got ${byKind.local.items.length})`);
assert(byKind.sports.items.length >= 2, `sports items >= 2 (got ${byKind.sports.items.length})`);
assert(byKind.markets.items.length >= 1, 'markets prose → item');
assert(byKind.watch.bullets.length >= 3, `watch bullets >= 3 (got ${byKind.watch.bullets.length})`);
assert(
  !parsed.sections.some((s) =>
    s.items.some((i) => /^(Weather|National & World|What to watch)/i.test(i.headline)),
  ),
  'section titles not misclassified as headlines',
);

const imgItem = byKind.national.items.find((i) => i.imageUrl);
assert(!!imgItem, 'national sample has imageUrl from **** marker');
assert(
  imgItem &&
    imgItem.imageUrl.startsWith('https://pbs.twimg.com/') &&
    !/\*{4}/.test(imgItem.body),
  'image URL extracted and **** stripped from body',
);
assert(
  cards.some((c) => c.imageUrl && c.imageUrl.includes('pbs.twimg.com')),
  'BriefStoryCard carries imageUrl',
);

assert(
  extractImageMarker('****https://example.com/a.jpg****') === 'https://example.com/a.jpg',
  'simple ****url**** marker',
);
assert(
  extractImageMarker(
    '****https://example.com/a.jpg (https://example.com/a.jpg//)****',
  ) === 'https://example.com/a.jpg',
  '****url (url//)**** marker',
);
assert(extractImageMarker('***Not an image***') === null, '*** not treated as image');

// Legacy ## + ***hed*** dialect still parses
const legacy = parseGrokBrief(`## National & World

***Fed holds rates***
**Named source: Market Desk**
Body here.

## What to watch today
- one
- two
`);
assert(legacy.structured, 'legacy ## dialect structured');
assert(legacy.sections.some((s) => s.kind === 'national' && s.items.length === 1), 'legacy national item');
assert(legacy.sections.some((s) => s.kind === 'watch' && s.bullets.length === 2), 'legacy watch bullets');

console.log('\n--- summary ---');
for (const s of parsed.sections) {
  console.log(
    `  ${s.kind.padEnd(10)} "${s.heading}" items=${s.items.length} paras=${s.paragraphs.length} bullets=${s.bullets.length}`,
  );
}
console.log(`cards: ${cards.length}`);
console.log(`footer: ${parsed.footer}`);

if (failed) {
  console.error(`\nSELF-CHECK FAILED (${failed})`);
  process.exit(1);
}
console.log('\nSELF-CHECK PASSED');
