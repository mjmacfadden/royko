/**
 * Static crossword bank — 100 entries, indexed by dayOfYear (1–100) and dateKey (MM-DD).
 * Lookup: pickByDate() in ../dayIndex.ts
 * Maintenance: Mike refreshes/extends this bank manually every ~3 months.
 * Mini 5×5 themed grids cycled across the bank.
 */
import type { CrosswordEntry } from '../types';

export const crosswordBank: CrosswordEntry[] = [
  {
    "dayOfYear": 1,
    "dateKey": "01-01",
    "title": "Warm Type — Day 1",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 2,
    "dateKey": "01-02",
    "title": "Front Page — Day 2",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 3,
    "dateKey": "01-03",
    "title": "Sports Page — Day 3",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 4,
    "dateKey": "01-04",
    "title": "Box Score — Day 4",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 5,
    "dateKey": "01-05",
    "title": "Cafe Scene — Day 5",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 6,
    "dateKey": "01-06",
    "title": "Night Sky — Day 6",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 7,
    "dateKey": "01-07",
    "title": "Arts Desk — Day 7",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 8,
    "dateKey": "01-08",
    "title": "Tone Down — Day 8",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 9,
    "dateKey": "01-09",
    "title": "Warm Type — Day 9",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 10,
    "dateKey": "01-10",
    "title": "Front Page — Day 10",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 11,
    "dateKey": "01-11",
    "title": "Sports Page — Day 11",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 12,
    "dateKey": "01-12",
    "title": "Box Score — Day 12",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 13,
    "dateKey": "01-13",
    "title": "Cafe Scene — Day 13",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 14,
    "dateKey": "01-14",
    "title": "Night Sky — Day 14",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 15,
    "dateKey": "01-15",
    "title": "Arts Desk — Day 15",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 16,
    "dateKey": "01-16",
    "title": "Tone Down — Day 16",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 17,
    "dateKey": "01-17",
    "title": "Warm Type — Day 17",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 18,
    "dateKey": "01-18",
    "title": "Front Page — Day 18",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 19,
    "dateKey": "01-19",
    "title": "Sports Page — Day 19",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 20,
    "dateKey": "01-20",
    "title": "Box Score — Day 20",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 21,
    "dateKey": "01-21",
    "title": "Cafe Scene — Day 21",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 22,
    "dateKey": "01-22",
    "title": "Night Sky — Day 22",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 23,
    "dateKey": "01-23",
    "title": "Arts Desk — Day 23",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 24,
    "dateKey": "01-24",
    "title": "Tone Down — Day 24",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 25,
    "dateKey": "01-25",
    "title": "Warm Type — Day 25",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 26,
    "dateKey": "01-26",
    "title": "Front Page — Day 26",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 27,
    "dateKey": "01-27",
    "title": "Sports Page — Day 27",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 28,
    "dateKey": "01-28",
    "title": "Box Score — Day 28",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 29,
    "dateKey": "01-29",
    "title": "Cafe Scene — Day 29",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 30,
    "dateKey": "01-30",
    "title": "Night Sky — Day 30",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 31,
    "dateKey": "01-31",
    "title": "Arts Desk — Day 31",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 32,
    "dateKey": "02-01",
    "title": "Tone Down — Day 32",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 33,
    "dateKey": "02-02",
    "title": "Warm Type — Day 33",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 34,
    "dateKey": "02-03",
    "title": "Front Page — Day 34",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 35,
    "dateKey": "02-04",
    "title": "Sports Page — Day 35",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 36,
    "dateKey": "02-05",
    "title": "Box Score — Day 36",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 37,
    "dateKey": "02-06",
    "title": "Cafe Scene — Day 37",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 38,
    "dateKey": "02-07",
    "title": "Night Sky — Day 38",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 39,
    "dateKey": "02-08",
    "title": "Arts Desk — Day 39",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 40,
    "dateKey": "02-09",
    "title": "Tone Down — Day 40",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 41,
    "dateKey": "02-10",
    "title": "Warm Type — Day 41",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 42,
    "dateKey": "02-11",
    "title": "Front Page — Day 42",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 43,
    "dateKey": "02-12",
    "title": "Sports Page — Day 43",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 44,
    "dateKey": "02-13",
    "title": "Box Score — Day 44",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 45,
    "dateKey": "02-14",
    "title": "Cafe Scene — Day 45",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 46,
    "dateKey": "02-15",
    "title": "Night Sky — Day 46",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 47,
    "dateKey": "02-16",
    "title": "Arts Desk — Day 47",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 48,
    "dateKey": "02-17",
    "title": "Tone Down — Day 48",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 49,
    "dateKey": "02-18",
    "title": "Warm Type — Day 49",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 50,
    "dateKey": "02-19",
    "title": "Front Page — Day 50",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 51,
    "dateKey": "02-20",
    "title": "Sports Page — Day 51",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 52,
    "dateKey": "02-21",
    "title": "Box Score — Day 52",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 53,
    "dateKey": "02-22",
    "title": "Cafe Scene — Day 53",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 54,
    "dateKey": "02-23",
    "title": "Night Sky — Day 54",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 55,
    "dateKey": "02-24",
    "title": "Arts Desk — Day 55",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 56,
    "dateKey": "02-25",
    "title": "Tone Down — Day 56",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 57,
    "dateKey": "02-26",
    "title": "Warm Type — Day 57",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 58,
    "dateKey": "02-27",
    "title": "Front Page — Day 58",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 59,
    "dateKey": "02-28",
    "title": "Sports Page — Day 59",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 60,
    "dateKey": "03-01",
    "title": "Box Score — Day 60",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 61,
    "dateKey": "03-02",
    "title": "Cafe Scene — Day 61",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 62,
    "dateKey": "03-03",
    "title": "Night Sky — Day 62",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 63,
    "dateKey": "03-04",
    "title": "Arts Desk — Day 63",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 64,
    "dateKey": "03-05",
    "title": "Tone Down — Day 64",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 65,
    "dateKey": "03-06",
    "title": "Warm Type — Day 65",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 66,
    "dateKey": "03-07",
    "title": "Front Page — Day 66",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 67,
    "dateKey": "03-08",
    "title": "Sports Page — Day 67",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 68,
    "dateKey": "03-09",
    "title": "Box Score — Day 68",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 69,
    "dateKey": "03-10",
    "title": "Cafe Scene — Day 69",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 70,
    "dateKey": "03-11",
    "title": "Night Sky — Day 70",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 71,
    "dateKey": "03-12",
    "title": "Arts Desk — Day 71",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 72,
    "dateKey": "03-13",
    "title": "Tone Down — Day 72",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 73,
    "dateKey": "03-14",
    "title": "Warm Type — Day 73",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 74,
    "dateKey": "03-15",
    "title": "Front Page — Day 74",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 75,
    "dateKey": "03-16",
    "title": "Sports Page — Day 75",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 76,
    "dateKey": "03-17",
    "title": "Box Score — Day 76",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 77,
    "dateKey": "03-18",
    "title": "Cafe Scene — Day 77",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 78,
    "dateKey": "03-19",
    "title": "Night Sky — Day 78",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 79,
    "dateKey": "03-20",
    "title": "Arts Desk — Day 79",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 80,
    "dateKey": "03-21",
    "title": "Tone Down — Day 80",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 81,
    "dateKey": "03-22",
    "title": "Warm Type — Day 81",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 82,
    "dateKey": "03-23",
    "title": "Front Page — Day 82",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 83,
    "dateKey": "03-24",
    "title": "Sports Page — Day 83",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 84,
    "dateKey": "03-25",
    "title": "Box Score — Day 84",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 85,
    "dateKey": "03-26",
    "title": "Cafe Scene — Day 85",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 86,
    "dateKey": "03-27",
    "title": "Night Sky — Day 86",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 87,
    "dateKey": "03-28",
    "title": "Arts Desk — Day 87",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 88,
    "dateKey": "03-29",
    "title": "Tone Down — Day 88",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 89,
    "dateKey": "03-30",
    "title": "Warm Type — Day 89",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 90,
    "dateKey": "03-31",
    "title": "Front Page — Day 90",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 91,
    "dateKey": "04-01",
    "title": "Sports Page — Day 91",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 92,
    "dateKey": "04-02",
    "title": "Box Score — Day 92",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 93,
    "dateKey": "04-03",
    "title": "Cafe Scene — Day 93",
    "size": 5,
    "solution": [
      "I",
      "M",
      "A",
      "G",
      "E",
      "M",
      "O",
      "C",
      "H",
      "A",
      "A",
      "C",
      "T",
      "O",
      "R",
      "G",
      "H",
      "O",
      "S",
      "T",
      "E",
      "A",
      "R",
      "T",
      "H"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Photo or icon",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Chocolatey espresso drink",
        "answer": "MOCHA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Stage player",
        "answer": "ACTOR",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Halloween costume",
        "answer": "GHOST",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Third rock from the sun",
        "answer": "EARTH",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Public perception",
        "answer": "IMAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coffee-shop order",
        "answer": "MOCHA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Movie cast member",
        "answer": "ACTOR",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Spectral visitor",
        "answer": "GHOST",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Soil underfoot",
        "answer": "EARTH",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 94,
    "dateKey": "04-04",
    "title": "Night Sky — Day 94",
    "size": 5,
    "solution": [
      "B",
      "L",
      "A",
      "S",
      "T",
      "L",
      "U",
      "N",
      "A",
      "R",
      "A",
      "N",
      "G",
      "L",
      "E",
      "S",
      "A",
      "L",
      "O",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Explosive sound",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Of the moon",
        "answer": "LUNAR",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Geometry corner",
        "answer": "ANGLE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Beauty parlor",
        "answer": "SALON",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Detonate",
        "answer": "BLAST",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Moon-related",
        "answer": "LUNAR",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Fishhook feature",
        "answer": "ANGLE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Hair studio",
        "answer": "SALON",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "What is trending",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 95,
    "dateKey": "04-05",
    "title": "Arts Desk — Day 95",
    "size": 5,
    "solution": [
      "S",
      "O",
      "L",
      "A",
      "R",
      "O",
      "P",
      "E",
      "R",
      "A",
      "L",
      "E",
      "V",
      "E",
      "L",
      "A",
      "R",
      "E",
      "A",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Of the sun",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Lyric stage work",
        "answer": "OPERA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Even; tier",
        "answer": "LEVEL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Of an area",
        "answer": "AREAL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Sun-powered",
        "answer": "SOLAR",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "La Boheme, e.g.",
        "answer": "OPERA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Spirit level reading",
        "answer": "LEVEL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Geographic, as a map",
        "answer": "AREAL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 96,
    "dateKey": "04-06",
    "title": "Tone Down — Day 96",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "A",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Center of feeling",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Glowing remnant",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Humble; lower",
        "answer": "ABASE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Tree secretion",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Market direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Organ of affection",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Coal in the grate",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Bring down a peg",
        "answer": "ABASE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Varnish base",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Social media wave",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 97,
    "dateKey": "04-07",
    "title": "Warm Type — Day 97",
    "size": 5,
    "solution": [
      "H",
      "E",
      "A",
      "R",
      "T",
      "E",
      "M",
      "B",
      "E",
      "R",
      "A",
      "B",
      "U",
      "S",
      "E",
      "R",
      "E",
      "S",
      "I",
      "N",
      "T",
      "R",
      "E",
      "N",
      "D"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Valentine symbol",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Fireplace leftover",
        "answer": "EMBER",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Bad-mouth",
        "answer": "ABUSE",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pine sap product",
        "answer": "RESIN",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Fashion direction",
        "answer": "TREND",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Core of the matter",
        "answer": "HEART",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Glowing coal",
        "answer": "EMBER",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Misuse",
        "answer": "ABUSE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Amber source",
        "answer": "RESIN",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Chart-topper path",
        "answer": "TREND",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 98,
    "dateKey": "04-08",
    "title": "Front Page — Day 98",
    "size": 5,
    "solution": [
      "P",
      "A",
      "P",
      "E",
      "R",
      "A",
      "R",
      "E",
      "N",
      "A",
      "P",
      "E",
      "A",
      "R",
      "L",
      "E",
      "N",
      "R",
      "O",
      "L",
      "R",
      "A",
      "L",
      "L",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Newsprint sheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Sports venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Oyster gem",
        "answer": "PEARL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Sign up, British-style",
        "answer": "ENROL",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Campaign gathering",
        "answer": "RALLY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Broadsheet",
        "answer": "PAPER",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center, e.g.",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "June birthstone",
        "answer": "PEARL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Register for a class",
        "answer": "ENROL",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Pep-talk meeting",
        "answer": "RALLY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 99,
    "dateKey": "04-09",
    "title": "Sports Page — Day 99",
    "size": 5,
    "solution": [
      "G",
      "A",
      "M",
      "E",
      "S",
      "A",
      "R",
      "E",
      "N",
      "A",
      "M",
      "E",
      "T",
      "A",
      "L",
      "E",
      "N",
      "A",
      "C",
      "T",
      "S",
      "A",
      "L",
      "T",
      "S"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Ballpark contests",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Hockey venue",
        "answer": "ARENA",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Medal material",
        "answer": "METAL",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Pass into law",
        "answer": "ENACT",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Seasons food",
        "answer": "SALTS",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Board or video ___",
        "answer": "GAMES",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "United Center bowl",
        "answer": "ARENA",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Tin or copper",
        "answer": "METAL",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Put on the books",
        "answer": "ENACT",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Epsom and table",
        "answer": "SALTS",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 100,
    "dateKey": "04-10",
    "title": "Box Score — Day 100",
    "size": 5,
    "solution": [
      "S",
      "C",
      "O",
      "R",
      "E",
      "C",
      "A",
      "N",
      "O",
      "E",
      "O",
      "N",
      "I",
      "O",
      "N",
      "R",
      "O",
      "O",
      "M",
      "S",
      "E",
      "E",
      "N",
      "S",
      "Y"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Final tally",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 6,
        "clue": "Quiet watercraft",
        "answer": "CANOE",
        "row": 1,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 7,
        "clue": "Burger topper",
        "answer": "ONION",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 8,
        "clue": "Hotel units",
        "answer": "ROOMS",
        "row": 3,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 9,
        "clue": "Teensy, in crosswords",
        "answer": "EENSY",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Music notation sheet",
        "answer": "SCORE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Camp paddle boat",
        "answer": "CANOE",
        "row": 0,
        "col": 1,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Layers vegetable",
        "answer": "ONION",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Makes space for",
        "answer": "ROOMS",
        "row": 0,
        "col": 3,
        "dir": "down"
      },
      {
        "num": 5,
        "clue": "Itsy-bitsy cousin",
        "answer": "EENSY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  }
];
