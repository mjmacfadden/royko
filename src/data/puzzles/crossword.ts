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
    "title": "Morning Edition — Day 1",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 2,
    "dateKey": "01-02",
    "title": "Northbrook — Day 2",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 3,
    "dateKey": "01-03",
    "title": "Sports Desk — Day 3",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 4,
    "dateKey": "01-04",
    "title": "Typeset — Day 4",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 5,
    "dateKey": "01-05",
    "title": "Lake Michigan — Day 5",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 6,
    "dateKey": "01-06",
    "title": "Morning Edition — Day 6",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 7,
    "dateKey": "01-07",
    "title": "Northbrook — Day 7",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 8,
    "dateKey": "01-08",
    "title": "Sports Desk — Day 8",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 9,
    "dateKey": "01-09",
    "title": "Typeset — Day 9",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 10,
    "dateKey": "01-10",
    "title": "Lake Michigan — Day 10",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 11,
    "dateKey": "01-11",
    "title": "Morning Edition — Day 11",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 12,
    "dateKey": "01-12",
    "title": "Northbrook — Day 12",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 13,
    "dateKey": "01-13",
    "title": "Sports Desk — Day 13",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 14,
    "dateKey": "01-14",
    "title": "Typeset — Day 14",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 15,
    "dateKey": "01-15",
    "title": "Lake Michigan — Day 15",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 16,
    "dateKey": "01-16",
    "title": "Morning Edition — Day 16",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 17,
    "dateKey": "01-17",
    "title": "Northbrook — Day 17",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 18,
    "dateKey": "01-18",
    "title": "Sports Desk — Day 18",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 19,
    "dateKey": "01-19",
    "title": "Typeset — Day 19",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 20,
    "dateKey": "01-20",
    "title": "Lake Michigan — Day 20",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 21,
    "dateKey": "01-21",
    "title": "Morning Edition — Day 21",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 22,
    "dateKey": "01-22",
    "title": "Northbrook — Day 22",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 23,
    "dateKey": "01-23",
    "title": "Sports Desk — Day 23",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 24,
    "dateKey": "01-24",
    "title": "Typeset — Day 24",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 25,
    "dateKey": "01-25",
    "title": "Lake Michigan — Day 25",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 26,
    "dateKey": "01-26",
    "title": "Morning Edition — Day 26",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 27,
    "dateKey": "01-27",
    "title": "Northbrook — Day 27",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 28,
    "dateKey": "01-28",
    "title": "Sports Desk — Day 28",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 29,
    "dateKey": "01-29",
    "title": "Typeset — Day 29",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 30,
    "dateKey": "01-30",
    "title": "Lake Michigan — Day 30",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 31,
    "dateKey": "01-31",
    "title": "Morning Edition — Day 31",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 32,
    "dateKey": "02-01",
    "title": "Northbrook — Day 32",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 33,
    "dateKey": "02-02",
    "title": "Sports Desk — Day 33",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 34,
    "dateKey": "02-03",
    "title": "Typeset — Day 34",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 35,
    "dateKey": "02-04",
    "title": "Lake Michigan — Day 35",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 36,
    "dateKey": "02-05",
    "title": "Morning Edition — Day 36",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 37,
    "dateKey": "02-06",
    "title": "Northbrook — Day 37",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 38,
    "dateKey": "02-07",
    "title": "Sports Desk — Day 38",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 39,
    "dateKey": "02-08",
    "title": "Typeset — Day 39",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 40,
    "dateKey": "02-09",
    "title": "Lake Michigan — Day 40",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 41,
    "dateKey": "02-10",
    "title": "Morning Edition — Day 41",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 42,
    "dateKey": "02-11",
    "title": "Northbrook — Day 42",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 43,
    "dateKey": "02-12",
    "title": "Sports Desk — Day 43",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 44,
    "dateKey": "02-13",
    "title": "Typeset — Day 44",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 45,
    "dateKey": "02-14",
    "title": "Lake Michigan — Day 45",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 46,
    "dateKey": "02-15",
    "title": "Morning Edition — Day 46",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 47,
    "dateKey": "02-16",
    "title": "Northbrook — Day 47",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 48,
    "dateKey": "02-17",
    "title": "Sports Desk — Day 48",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 49,
    "dateKey": "02-18",
    "title": "Typeset — Day 49",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 50,
    "dateKey": "02-19",
    "title": "Lake Michigan — Day 50",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 51,
    "dateKey": "02-20",
    "title": "Morning Edition — Day 51",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 52,
    "dateKey": "02-21",
    "title": "Northbrook — Day 52",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 53,
    "dateKey": "02-22",
    "title": "Sports Desk — Day 53",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 54,
    "dateKey": "02-23",
    "title": "Typeset — Day 54",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 55,
    "dateKey": "02-24",
    "title": "Lake Michigan — Day 55",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 56,
    "dateKey": "02-25",
    "title": "Morning Edition — Day 56",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 57,
    "dateKey": "02-26",
    "title": "Northbrook — Day 57",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 58,
    "dateKey": "02-27",
    "title": "Sports Desk — Day 58",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 59,
    "dateKey": "02-28",
    "title": "Typeset — Day 59",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 60,
    "dateKey": "03-01",
    "title": "Lake Michigan — Day 60",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 61,
    "dateKey": "03-02",
    "title": "Morning Edition — Day 61",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 62,
    "dateKey": "03-03",
    "title": "Northbrook — Day 62",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 63,
    "dateKey": "03-04",
    "title": "Sports Desk — Day 63",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 64,
    "dateKey": "03-05",
    "title": "Typeset — Day 64",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 65,
    "dateKey": "03-06",
    "title": "Lake Michigan — Day 65",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 66,
    "dateKey": "03-07",
    "title": "Morning Edition — Day 66",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 67,
    "dateKey": "03-08",
    "title": "Northbrook — Day 67",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 68,
    "dateKey": "03-09",
    "title": "Sports Desk — Day 68",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 69,
    "dateKey": "03-10",
    "title": "Typeset — Day 69",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 70,
    "dateKey": "03-11",
    "title": "Lake Michigan — Day 70",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 71,
    "dateKey": "03-12",
    "title": "Morning Edition — Day 71",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 72,
    "dateKey": "03-13",
    "title": "Northbrook — Day 72",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 73,
    "dateKey": "03-14",
    "title": "Sports Desk — Day 73",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 74,
    "dateKey": "03-15",
    "title": "Typeset — Day 74",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 75,
    "dateKey": "03-16",
    "title": "Lake Michigan — Day 75",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 76,
    "dateKey": "03-17",
    "title": "Morning Edition — Day 76",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 77,
    "dateKey": "03-18",
    "title": "Northbrook — Day 77",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 78,
    "dateKey": "03-19",
    "title": "Sports Desk — Day 78",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 79,
    "dateKey": "03-20",
    "title": "Typeset — Day 79",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 80,
    "dateKey": "03-21",
    "title": "Lake Michigan — Day 80",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 81,
    "dateKey": "03-22",
    "title": "Morning Edition — Day 81",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 82,
    "dateKey": "03-23",
    "title": "Northbrook — Day 82",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 83,
    "dateKey": "03-24",
    "title": "Sports Desk — Day 83",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 84,
    "dateKey": "03-25",
    "title": "Typeset — Day 84",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 85,
    "dateKey": "03-26",
    "title": "Lake Michigan — Day 85",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 86,
    "dateKey": "03-27",
    "title": "Morning Edition — Day 86",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 87,
    "dateKey": "03-28",
    "title": "Northbrook — Day 87",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 88,
    "dateKey": "03-29",
    "title": "Sports Desk — Day 88",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 89,
    "dateKey": "03-30",
    "title": "Typeset — Day 89",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 90,
    "dateKey": "03-31",
    "title": "Lake Michigan — Day 90",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 91,
    "dateKey": "04-01",
    "title": "Morning Edition — Day 91",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 92,
    "dateKey": "04-02",
    "title": "Northbrook — Day 92",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 93,
    "dateKey": "04-03",
    "title": "Sports Desk — Day 93",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 94,
    "dateKey": "04-04",
    "title": "Typeset — Day 94",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 95,
    "dateKey": "04-05",
    "title": "Lake Michigan — Day 95",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 96,
    "dateKey": "04-06",
    "title": "Morning Edition — Day 96",
    "size": 5,
    "solution": [
      "B",
      "R",
      "E",
      "A",
      "D",
      "E",
      ".",
      "A",
      ".",
      "A",
      "A",
      "R",
      "T",
      ".",
      "Y",
      "R",
      ".",
      ".",
      ".",
      ".",
      "D",
      "A",
      "T",
      "E",
      "."
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Toast base",
        "answer": "BREAD",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 4,
        "clue": "Museum subject",
        "answer": "ART",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Masthead line",
        "answer": "DATE",
        "row": 4,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Growl",
        "answer": "BEARD",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Consume",
        "answer": "EAT",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 3,
        "clue": "Sunrise time",
        "answer": "DAY",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 97,
    "dateKey": "04-07",
    "title": "Northbrook — Day 97",
    "size": 5,
    "solution": [
      "P",
      "A",
      "R",
      "K",
      ".",
      "A",
      ".",
      "O",
      ".",
      "M",
      "G",
      "R",
      "E",
      "E",
      "N",
      "E",
      ".",
      "D",
      ".",
      "A",
      ".",
      ".",
      ".",
      "L",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Village ___ District",
        "answer": "PARK",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Golf course color",
        "answer": "GREEN",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Book leaf",
        "answer": "PAGE",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Went by bike",
        "answer": "RODE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Atlas sheet",
        "answer": "MAP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 98,
    "dateKey": "04-08",
    "title": "Sports Desk — Day 98",
    "size": 5,
    "solution": [
      "G",
      "O",
      "A",
      "L",
      ".",
      "A",
      ".",
      "C",
      ".",
      "W",
      "M",
      "E",
      "E",
      "T",
      ".",
      "E",
      ".",
      ".",
      ".",
      "N",
      ".",
      ".",
      "W",
      "I",
      "N"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Soccer score",
        "answer": "GOAL",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Track event",
        "answer": "MEET",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Victory",
        "answer": "WIN",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Match",
        "answer": "GAME",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Card suit",
        "answer": "ACE",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Not lose",
        "answer": "WIN",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 99,
    "dateKey": "04-09",
    "title": "Typeset — Day 99",
    "size": 5,
    "solution": [
      "T",
      "Y",
      "P",
      "E",
      ".",
      "I",
      ".",
      "A",
      ".",
      "I",
      "N",
      "E",
      "W",
      "S",
      ".",
      "T",
      ".",
      ".",
      ".",
      "L",
      ".",
      ".",
      "I",
      "N",
      "K"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Font matter",
        "answer": "TYPE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Front page stuff",
        "answer": "NEWS",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 5,
        "clue": "Press fluid",
        "answer": "INK",
        "row": 4,
        "col": 2,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Shade of color",
        "answer": "TINT",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Animal foot",
        "answer": "PAW",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Ill",
        "answer": "ILK",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  },
  {
    "dayOfYear": 100,
    "dateKey": "04-10",
    "title": "Lake Michigan — Day 100",
    "size": 5,
    "solution": [
      "W",
      "A",
      "V",
      "E",
      ".",
      "I",
      ".",
      "E",
      ".",
      "S",
      "N",
      "O",
      "R",
      "T",
      "H",
      "D",
      ".",
      "Y",
      ".",
      "I",
      ".",
      ".",
      ".",
      "S",
      "P"
    ],
    "clues": [
      {
        "num": 1,
        "clue": "Surf unit",
        "answer": "WAVE",
        "row": 0,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 3,
        "clue": "Direction of the brook town",
        "answer": "NORTH",
        "row": 2,
        "col": 0,
        "dir": "across"
      },
      {
        "num": 1,
        "clue": "Gusty",
        "answer": "WIND",
        "row": 0,
        "col": 0,
        "dir": "down"
      },
      {
        "num": 2,
        "clue": "Quite",
        "answer": "VERY",
        "row": 0,
        "col": 2,
        "dir": "down"
      },
      {
        "num": 4,
        "clue": "Vessel",
        "answer": "SHIP",
        "row": 0,
        "col": 4,
        "dir": "down"
      }
    ]
  }
];
