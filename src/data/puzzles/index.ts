import { pickByDate } from '../dayIndex';
import { jumbleBank } from './jumble';
import { triviaBank } from './trivia';
import { crosswordBank } from './crossword';
import type { CrosswordEntry, JumbleEntry, TriviaEntry } from '../types';

export { jumbleBank, triviaBank, crosswordBank };

export function puzzlesForDate(date: Date = new Date()): {
  jumble: JumbleEntry;
  trivia: TriviaEntry;
  crossword: CrosswordEntry;
} {
  return {
    jumble: pickByDate(jumbleBank, date),
    trivia: pickByDate(triviaBank, date),
    crossword: pickByDate(crosswordBank, date),
  };
}
