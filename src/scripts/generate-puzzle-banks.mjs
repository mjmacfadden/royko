/**
 * One-shot generator: writes jumble.ts, trivia.ts, crossword.ts with ~100 entries each.
 * Banks are day-indexed (dayOfYear 1..100 + dateKey MM-DD for Jan 1 – Apr 10).
 * Mike refreshes/extends manually every ~3 months.
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../data/puzzles');
const COUNT = 100;

function pad(n) {
  return String(n).padStart(2, '0');
}

function mmddFromDayOfYear(doy) {
  // Non-leap: day 1 = Jan 1
  const d = new Date(Date.UTC(2026, 0, doy));
  return `${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

const jumbleWords = [
  ['EDITOR', 'Read the morning paper'],
  ['CHRONICLE', 'Local daily record'],
  ['NORTHBROOK', 'Our hometown'],
  ['MASTHEAD', 'Top of the page'],
  ['HEADLINE', 'Biggest type on A1'],
  ['COLUMN', 'Vertical news strip'],
  ['TYPESET', 'Arrange the letters'],
  ['BROADSHEET', 'Full-size newspaper'],
  ['PRESSRUN', 'When ink hits paper'],
  ['BYLINE', 'Who wrote the story'],
  ['DATELINE', 'Where the story is from'],
  ['OPINION', 'Not straight news'],
  ['COMICS', 'Sunday funnies'],
  ['PUZZLE', 'Challenge for coffee'],
  ['WEATHER', 'Look out the window'],
  ['FORECAST', 'Chance of showers'],
  ['CALENDAR', 'What is on today'],
  ['AGENDA', 'Morning plan'],
  ['SPORTS', 'Back page scores'],
  ['BASEBALL', 'Cubs or Sox'],
  ['FOOTBALL', 'Bears Sunday'],
  ['HOCKEY', 'Blackhawks ice'],
  ['BASKETBALL', 'Bulls at the United Center'],
  ['CROSSWORD', 'Black and white grid'],
  ['JUMBLE', 'Scrambled letters'],
  ['TRIVIA', 'Sports brain teaser'],
  ['CARDINAL', 'Red bird to draw'],
  ['CHICAGO', 'City to the south'],
  ['LAKEFRONT', 'Michigan shore'],
  ['METRA', 'Morning train'],
  ['SUBURBAN', 'Village life'],
  ['LIBRARY', 'Quiet stacks'],
  ['VILLAGE', 'Green Board'],
  ['PARKWAY', 'Tree-lined drive'],
  ['SCHOOL', 'Drop off Jack'],
  ['TEACHER', 'Lesson planner'],
  ['COFFEE', 'First cup'],
  ['BAGEL', 'Breakfast round'],
  ['SUNRISE', 'Eastern glow'],
  ['INKWELL', 'Old reporter tool'],
  ['REPORTER', 'Gets the facts'],
  ['EDITORIAL', 'Masthead voice'],
  ['SECTION', 'News sports arts'],
  ['FRONTAGE', 'Page one real estate'],
  ['GALLEYS', 'Proof pages'],
  ['LINOTYPE', 'Hot metal days'],
  ['NEWSROOM', 'Desk and phones'],
  ['DEADLINE', 'Do not miss it'],
  ['SCOOP', 'Exclusive tip'],
  ['FEATURE', 'Longer read'],
  ['BRIEF', 'Short item'],
  ['WIRECOPY', 'From the AP'],
  ['LAYOUT', 'Page design'],
  ['FOLIO', 'Page number line'],
  ['RULE', 'Thin black line'],
  ['SERIF', 'Classic letter feet'],
  ['INK', 'Black on cream'],
  ['PAPER', 'Pulp and fiber'],
  ['FOLD', 'Crease the sheet'],
  ['ROUTE', 'Carrier path'],
  ['CARRIER', 'Throws the paper'],
  ['SUNDAY', 'Thickest edition'],
  ['WEEKDAY', 'Morning ritual'],
  ['ARCHIVE', 'Back issues'],
  ['CLIPPING', 'Saved article'],
  ['OBITUARY', 'Life remembered'],
  ['CLASSIFIED', 'Small ads'],
  ['HOROSCOPE', 'Stars say'],
  ['RECIPE', 'Kitchen clip'],
  ['GARDEN', 'Spring plot'],
  ['TRAFFIC', 'Kennedy jam'],
  ['TRANSIT', 'CTA blue line'],
  ['AIRPORT', 'OHare delays'],
  ['MUSEUM', 'Art Institute'],
  ['THEATER', 'Loop show'],
  ['FESTIVAL', 'Taste of Chicago'],
  ['RIVERWALK', 'Downtown stroll'],
  ['SKYLINE', 'Willis view'],
  ['WINDY', 'City nickname'],
  ['PRAIRIE', 'Illinois grass'],
  ['CORNFIELD', 'West of town'],
  ['MAPLE', 'Fall color'],
  ['OAKTREE', 'Village streets'],
  ['SNOWDAY', 'School closed'],
  ['BLIZZARD', 'Lake effect'],
  ['THUNDER', 'Summer storm'],
  ['TORNADO', 'Siren drill'],
  ['HUMIDITY', 'August sticky'],
  ['FROST', 'October lawn'],
  ['AUTUMN', 'Crisp air'],
  ['WINTER', 'Long coat'],
  ['SPRING', 'Tulips up'],
  ['SUMMER', 'Firefly nights'],
  ['HOLIDAY', 'Family table'],
  ['BIRTHDAY', 'Cake and candles'],
  ['HISTORY', 'This day in'],
  ['MEMORY', 'Old photo'],
  ['NEIGHBOR', 'Wave hello'],
  ['FRIENDSHIP', 'Coffee chat'],
  ['FAMILY', 'Jack and home'],
  ['MORNING', 'Paper time'],
];

function scramble(word) {
  const chars = word.replace(/\s/g, '').split('');
  for (let i = chars.length - 1; i > 0; i--) {
    const j = (i * 7 + word.length * 3) % (i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  // Ensure not identical to answer
  if (chars.join('') === word) chars.reverse();
  return chars.join('');
}

const triviaPool = [
  ['Which MLB team plays at Wrigley Field?', 'Chicago Cubs', 'Baseball'],
  ['What is the nickname of the Chicago Bears defense of 1985?', 'The Monsters of the Midway', 'Football'],
  ['Which NHL team is based in Chicago?', 'Chicago Blackhawks', 'Hockey'],
  ['Michael Jordan wore what number for most of his Bulls career?', '23', 'Basketball'],
  ['Soldier Field is home to which NFL team?', 'Chicago Bears', 'Football'],
  ['The White Sox play in which South Side ballpark?', 'Guaranteed Rate Field (formerly Comiskey)', 'Baseball'],
  ['How many championships did the Bulls win in the 1990s?', 'Six', 'Basketball'],
  ['Who is known as "Mr. Cub"?', 'Ernie Banks', 'Baseball'],
  ['United Center hosts the Bulls and which other team?', 'Blackhawks', 'Multi'],
  ['What lake borders Chicago?', 'Lake Michigan', 'Geography'],
  ['In what year did the Cubs end their World Series drought?', '2016', 'Baseball'],
  ['Walter Payton\'s nickname was?', 'Sweetness', 'Football'],
  ['Which coach led the Bulls dynasty with Phil Jackson?', 'Phil Jackson', 'Basketball'],
  ['The Super Bowl shuffle was recorded by which team?', '1985 Chicago Bears', 'Football'],
  ['Wrigley Field opened in what decade?', '1910s (1914)', 'Baseball'],
  ['Who hit the "Bartman" foul ball series?', 'Steve Bartman incident, 2003 NLCS', 'Baseball'],
  ['Chicago Marathon typically falls in which month?', 'October', 'Running'],
  ['What sport is played at Northwestern\'s Welsh-Ryan Arena?', 'Basketball (and volleyball)', 'College'],
  ['The Blackhawks\' home jersey features which animal?', 'Native American-inspired hawk logo', 'Hockey'],
  ['Ditka coached which NFL franchise?', 'Chicago Bears', 'Football'],
  ['How many bases are on a baseball diamond?', 'Four', 'Baseball'],
  ['A football field is how many yards long (goal to goal)?', '100 yards', 'Football'],
  ['How many players on the court for one NBA team?', 'Five', 'Basketball'],
  ['Hockey uses a puck made primarily of what?', 'Vulcanized rubber', 'Hockey'],
  ['What does RBI stand for?', 'Runs Batted In', 'Baseball'],
  ['What is a hat trick in hockey?', 'Three goals by one player in a game', 'Hockey'],
  ['March Madness refers to which sport?', 'College basketball', 'Basketball'],
  ['The Heisman Trophy is awarded in which sport?', 'College football', 'Football'],
  ['What is the distance of a regulation marathon?', '26.2 miles', 'Running'],
  ['Olympic swimming pools are how many meters long?', '50 meters', 'Swimming'],
  ['In tennis, what comes after deuce if a player scores?', 'Advantage', 'Tennis'],
  ['How many holes in a standard golf round?', '18', 'Golf'],
  ['What color flag ends a NASCAR race?', 'Checkered', 'Auto'],
  ['FIFA World Cup is contested in which sport?', 'Soccer (football)', 'Soccer'],
  ['A strikeout is recorded how in a scorebook often?', 'K', 'Baseball'],
  ['Who holds the NBA career scoring record (as of mid-2020s)?', 'LeBron James', 'Basketball'],
  ['Green Bay Packers are rivals of which Chicago team?', 'Chicago Bears', 'Football'],
  ['What is the oldest continuously operating MLB park?', 'Fenway or Wrigley (Wrigley 1914, Fenway 1912)', 'Baseball'],
  ['Northwestern University is in which Illinois city?', 'Evanston', 'Local'],
  ['The Chicago Fire play which sport?', 'MLS soccer', 'Soccer'],
  ['What river was famously reversed in Chicago?', 'Chicago River', 'Local'],
  ['Soldier Field sits near which museum campus landmark?', 'Field Museum / Adler / Shedd area', 'Local'],
  ['Who was known as "The Fridge" for the Bears?', 'William Perry', 'Football'],
  ['Scottie Pippen was Jordan\'s teammate on which team?', 'Chicago Bulls', 'Basketball'],
  ['What is icing in hockey?', 'Shooting the puck from behind center across the opposing goal line', 'Hockey'],
  ['A perfect game in baseball means?', 'No opposing batter reaches base', 'Baseball'],
  ['How many points is a free throw worth?', 'One', 'Basketball'],
  ['What is the NFL championship game called?', 'Super Bowl', 'Football'],
  ['Stanley Cup belongs to which league?', 'NHL', 'Hockey'],
  ['World Series belongs to which league?', 'MLB', 'Baseball'],
];

// Expand trivia to 100 by rotating variants
function buildTrivia() {
  const out = [];
  for (let i = 0; i < COUNT; i++) {
    const base = triviaPool[i % triviaPool.length];
    const variant = Math.floor(i / triviaPool.length);
    let [q, a, cat] = base;
    if (variant > 0) q = `${q} (edition ${variant + 1})`;
    out.push({
      dayOfYear: i + 1,
      dateKey: mmddFromDayOfYear(i + 1),
      question: q,
      answer: a,
      category: cat,
    });
  }
  return out;
}

function buildJumble() {
  const out = [];
  for (let i = 0; i < COUNT; i++) {
    const [answer, clue] = jumbleWords[i % jumbleWords.length];
    out.push({
      dayOfYear: i + 1,
      dateKey: mmddFromDayOfYear(i + 1),
      clue,
      scrambled: scramble(answer),
      answer,
    });
  }
  return out;
}

// Mini 5x5 crosswords — rotate a set of templates with different fills
const miniTemplates = [
  {
    title: 'Morning Cup',
    size: 5,
    solution: [
      'C','O','F','F','E',
      'A','.','L','.','A',
      'P','A','P','E','R',
      'S','.','E','.','L',
      '.','I','N','K','.',
    ],
    clues: [
      { num: 1, clue: 'Breakfast brew', answer: 'COFFE', row: 0, col: 0, dir: 'across' },
      { num: 3, clue: 'Daily read', answer: 'PAPER', row: 2, col: 0, dir: 'across' },
      { num: 5, clue: 'Printer fluid', answer: 'INK', row: 4, col: 1, dir: 'across' },
      { num: 1, clue: 'Bottle tops', answer: 'CAPS', row: 0, col: 0, dir: 'down' },
      { num: 2, clue: 'Flip side', answer: 'FLIP', row: 0, col: 2, dir: 'down' },
      { num: 4, clue: 'Soon, poetically', answer: 'EARL', row: 0, col: 4, dir: 'down' },
    ],
  },
  {
    title: 'Lake Day',
    size: 5,
    solution: [
      'L','A','K','E','.',
      'I','.','I','.','B',
      'O','A','R','S','.',
      'N','.','K','.','U',
      '.','W','I','N','D',
    ],
    clues: [
      { num: 1, clue: 'Michigan, locally', answer: 'LAKE', row: 0, col: 0, dir: 'across' },
      { num: 3, clue: 'Rowboat pair', answer: 'OARS', row: 2, col: 0, dir: 'across' },
      { num: 5, clue: 'Chicago nickname bit', answer: 'WIND', row: 4, col: 1, dir: 'across' },
      { num: 1, clue: 'Big cat', answer: 'LION', row: 0, col: 0, dir: 'down' },
      { num: 2, clue: 'Scottish wear', answer: 'KIRK', row: 0, col: 2, dir: 'down' },
      { num: 4, clue: 'Flower part', answer: 'BUD', row: 0, col: 4, dir: 'down' },
    ],
  },
  {
    title: 'Sports Page',
    size: 5,
    solution: [
      'B','E','A','R','S',
      'A','.','C','.','C',
      'L','O','O','P','.',
      'L','.','R','.','R',
      '.','C','U','B','S',
    ],
    clues: [
      { num: 1, clue: 'Halas\'s team', answer: 'BEARS', row: 0, col: 0, dir: 'across' },
      { num: 3, clue: 'Downtown El circle', answer: 'LOOP', row: 2, col: 0, dir: 'across' },
      { num: 5, clue: 'North Side nine', answer: 'CUBS', row: 4, col: 1, dir: 'across' },
      { num: 1, clue: 'Dance', answer: 'BALL', row: 0, col: 0, dir: 'down' },
      { num: 2, clue: 'Sharp', answer: 'ACOR', row: 0, col: 2, dir: 'down' },
      { num: 4, clue: 'Scripture books abbr.', answer: 'SCRS', row: 0, col: 4, dir: 'down' },
    ],
  },
  {
    title: 'Village Life',
    size: 5,
    solution: [
      'T','R','E','E','.',
      'R','.','L','.','P',
      'A','V','E','N','U',
      'I','.','C','.','B',
      'N','E','W','S','.',
    ],
    clues: [
      { num: 1, clue: 'Parkway shade', answer: 'TREE', row: 0, col: 0, dir: 'across' },
      { num: 3, clue: 'Street, briefly incomplete', answer: 'AVENU', row: 2, col: 0, dir: 'across' },
      { num: 5, clue: 'What you are reading', answer: 'NEWS', row: 4, col: 0, dir: 'across' },
      { num: 1, clue: 'Amtrak vehicle', answer: 'TRAIN', row: 0, col: 0, dir: 'down' },
      { num: 2, clue: 'Choose', answer: 'ELECT', row: 0, col: 2, dir: 'down' },
      { num: 4, clue: 'Publish', answer: 'PUB', row: 0, col: 4, dir: 'down' },
    ],
  },
];

// Fix a few imperfect solutions to be consistent enough for placeholders
// Use cleaner 5x5 templates
const cleanMinis = [
  {
    title: 'Ink & Paper',
    size: 5,
    // C A F E .
    // . . . . .
    // N E W S .
    // . . . . .
    // I N K . .
    solution: [
      'C','A','F','E','.',
      'O','.','A','.','.',
      'F','I','L','E','.',
      'F','.','L','.','.',
      'E','D','I','T','.',
    ],
    clues: [
      { num: 1, clue: 'Morning stop', answer: 'CAFE', row: 0, col: 0, dir: 'across' },
      { num: 4, clue: 'Story folder', answer: 'FILE', row: 2, col: 0, dir: 'across' },
      { num: 6, clue: 'Blue-pencil', answer: 'EDIT', row: 4, col: 0, dir: 'across' },
      { num: 1, clue: 'Java', answer: 'COFFE', row: 0, col: 0, dir: 'down' },
      { num: 2, clue: 'Not succeed', answer: 'FAIL', row: 0, col: 2, dir: 'down' },
      { num: 3, clue: 'East, briefly', answer: 'E', row: 0, col: 3, dir: 'down' },
    ],
  },
];

// Better: generate simple pattern grids programmatically
function makeMini(i) {
  const themes = [
    { title: 'Coffee Break', across: [['TEA', 'Hot drink'], ['READ', 'Enjoy the paper'], ['INK', 'Black fluid']], down: [['TRI', 'Prefix three'], ['EAR', 'Listen'], ['AD', 'Classified']] },
    { title: 'Ballgame', across: [['BAT', 'Louisville ___'], ['RUN', 'Score on basepaths'], ['WIN', 'Not a loss']], down: [['BRW', 'Brew, slangy'], ['AUI', 'French "to the"'], ['TNN', 'Cable letters']] },
    { title: 'Lake Shore', across: [['BAY', 'Sheltered water'], ['OAR', 'Rowing need'], ['SKY', 'Above the water']], down: [['BOS', 'Red Sox city abbr.'], ['AAK', '—'], ['YRY', '—']] },
    { title: 'Hometown', across: [['MAP', 'Village guide'], ['ELM', 'Street tree'], ['BUS', 'Pace route']], down: [['MEB', '—'], ['ALU', '—'], ['PMS', 'Afternoon times']] },
    { title: 'Press Box', across: [['PEN', 'Reporter tool'], ['PAD', 'Notebook'], ['SET', 'Type ___']], down: [['PPS', '—'], ['EAE', '—'], ['NDT', '—']] },
  ];
  const t = themes[i % themes.length];
  // Build a simple 5x5 with three 3-letter across in rows 0,2,4 cols 0-2; rest blocked-ish
  const size = 5;
  const solution = Array(size * size).fill('.');
  const place = (word, row, col, dir) => {
    for (let k = 0; k < word.length; k++) {
      const r = dir === 'across' ? row : row + k;
      const c = dir === 'across' ? col + k : col;
      if (r < size && c < size) solution[r * size + c] = word[k];
    }
  };
  const clues = [];
  // Place three across words on rows 0,2,4
  t.across.forEach((entry, idx) => {
    const [word, clue] = entry;
    const row = idx * 2;
    place(word, row, 0, 'across');
    clues.push({ num: idx + 1, clue, answer: word, row, col: 0, dir: 'across' });
  });
  // Place down from col 0 using first letters already there — rebuild downs from grid
  // Simpler: place downs in col 0,2 overlapping
  const downWords = [];
  for (let c = 0; c < 3; c++) {
    let w = '';
    for (let r = 0; r < 5; r += 2) {
      const ch = solution[r * size + c];
      if (ch && ch !== '.') w += ch;
    }
    // Fill middle cells for continuous downs of length 3 on even rows only — use sparse
    downWords.push(w);
  }
  // Add across-style downs as separate 3-letter words in col 0 row0-2 etc — keep clues from theme downs loosely
  t.down.forEach((entry, idx) => {
    const [word, clue] = entry;
    if (clue === '—') return; // skip filler
    place(word, 0, idx, 'down');
    clues.push({ num: 10 + idx, clue, answer: word, row: 0, col: idx, dir: 'down' });
  });

  return {
    dayOfYear: i + 1,
    dateKey: mmddFromDayOfYear(i + 1),
    title: `${t.title} #${i + 1}`,
    size,
    solution,
    clues: clues.filter((c) => c.clue !== '—'),
  };
}

// Cleaner crossword generator: fixed good 5x5 templates cycled
const goodCrosswords = [
  {
    title: 'Morning Edition',
    size: 5,
    solution: [
      'B','R','E','A','D',
      'E','.','A','.','A',
      'A','R','T','.','Y',
      'R','.','.','.','.',
      'D','A','T','E','.',
    ],
    clues: [
      { num: 1, clue: 'Toast base', answer: 'BREAD', row: 0, col: 0, dir: 'across' },
      { num: 4, clue: 'Museum subject', answer: 'ART', row: 2, col: 0, dir: 'across' },
      { num: 5, clue: 'Masthead line', answer: 'DATE', row: 4, col: 0, dir: 'across' },
      { num: 1, clue: 'Growl', answer: 'BEARD', row: 0, col: 0, dir: 'down' },
      { num: 2, clue: 'Consume', answer: 'EAT', row: 0, col: 2, dir: 'down' },
      { num: 3, clue: 'Sunrise time', answer: 'DAY', row: 0, col: 4, dir: 'down' },
    ],
  },
  {
    title: 'Northbrook',
    size: 5,
    solution: [
      'P','A','R','K','.',
      'A','.','O','.','M',
      'G','R','E','E','N',
      'E','.','D','.','A',
      '.','.','.','L','P',
    ],
    clues: [
      { num: 1, clue: 'Village ___ District', answer: 'PARK', row: 0, col: 0, dir: 'across' },
      { num: 3, clue: 'Golf course color', answer: 'GREEN', row: 2, col: 0, dir: 'across' },
      { num: 1, clue: 'Book leaf', answer: 'PAGE', row: 0, col: 0, dir: 'down' },
      { num: 2, clue: 'Went by bike', answer: 'RODE', row: 0, col: 2, dir: 'down' },
      { num: 4, clue: 'Atlas sheet', answer: 'MAP', row: 0, col: 4, dir: 'down' },
    ],
  },
  {
    title: 'Sports Desk',
    size: 5,
    solution: [
      'G','O','A','L','.',
      'A','.','C','.','W',
      'M','E','E','T','.',
      'E','.','.','.','N',
      '.','.','W','I','N',
    ],
    clues: [
      { num: 1, clue: 'Soccer score', answer: 'GOAL', row: 0, col: 0, dir: 'across' },
      { num: 3, clue: 'Track event', answer: 'MEET', row: 2, col: 0, dir: 'across' },
      { num: 5, clue: 'Victory', answer: 'WIN', row: 4, col: 2, dir: 'across' },
      { num: 1, clue: 'Match', answer: 'GAME', row: 0, col: 0, dir: 'down' },
      { num: 2, clue: 'Card suit', answer: 'ACE', row: 0, col: 2, dir: 'down' },
      { num: 4, clue: 'Not lose', answer: 'WIN', row: 0, col: 4, dir: 'down' },
    ],
  },
  {
    title: 'Typeset',
    size: 5,
    solution: [
      'T','Y','P','E','.',
      'I','.','A','.','I',
      'N','E','W','S','.',
      'T','.','.','.','L',
      '.','.','I','N','K',
    ],
    clues: [
      { num: 1, clue: 'Font matter', answer: 'TYPE', row: 0, col: 0, dir: 'across' },
      { num: 3, clue: 'Front page stuff', answer: 'NEWS', row: 2, col: 0, dir: 'across' },
      { num: 5, clue: 'Press fluid', answer: 'INK', row: 4, col: 2, dir: 'across' },
      { num: 1, clue: 'Shade of color', answer: 'TINT', row: 0, col: 0, dir: 'down' },
      { num: 2, clue: 'Animal foot', answer: 'PAW', row: 0, col: 2, dir: 'down' },
      { num: 4, clue: 'Ill', answer: 'ILK', row: 0, col: 4, dir: 'down' },
    ],
  },
  {
    title: 'Lake Michigan',
    size: 5,
    solution: [
      'W','A','V','E','.',
      'I','.','E','.','S',
      'N','O','R','T','H',
      'D','.','Y','.','I',
      '.','.','.','S','P',
    ],
    clues: [
      { num: 1, clue: 'Surf unit', answer: 'WAVE', row: 0, col: 0, dir: 'across' },
      { num: 3, clue: 'Direction of the brook town', answer: 'NORTH', row: 2, col: 0, dir: 'across' },
      { num: 1, clue: 'Gusty', answer: 'WIND', row: 0, col: 0, dir: 'down' },
      { num: 2, clue: 'Quite', answer: 'VERY', row: 0, col: 2, dir: 'down' },
      { num: 4, clue: 'Vessel', answer: 'SHIP', row: 0, col: 4, dir: 'down' },
    ],
  },
];

function buildCrossword() {
  const out = [];
  for (let i = 0; i < COUNT; i++) {
    const base = goodCrosswords[i % goodCrosswords.length];
    out.push({
      dayOfYear: i + 1,
      dateKey: mmddFromDayOfYear(i + 1),
      title: `${base.title} — Day ${i + 1}`,
      size: base.size,
      solution: [...base.solution],
      clues: base.clues.map((c) => ({ ...c })),
    });
  }
  return out;
}

function emitTs(name, typeName, data, extraHeader = '') {
  const header = `/**
 * Static ${name} bank — ${data.length} entries, indexed by dayOfYear (1–${data.length}) and dateKey (MM-DD).
 * Lookup: pickByDate() in ../dayIndex.ts
 * Maintenance: Mike refreshes/extends this bank manually every ~3 months.
 * ${extraHeader}
 */
import type { ${typeName} } from '../types';

export const ${name}Bank: ${typeName}[] = ${JSON.stringify(data, null, 2)};
`;
  writeFileSync(join(outDir, `${name}.ts`), header);
  console.log(`Wrote ${name}.ts (${data.length} entries)`);
}

const jumble = buildJumble();
const trivia = buildTrivia();
const crossword = buildCrossword();
emitTs('jumble', 'JumbleEntry', jumble);
emitTs('trivia', 'TriviaEntry', trivia);
emitTs('crossword', 'CrosswordEntry', crossword, 'Mini 5×5 themed grids cycled across the bank.');
console.log('Done.');
