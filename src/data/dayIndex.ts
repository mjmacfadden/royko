/** Day-of-year / date-key helpers for static puzzle banks. */

export function dayOfYear(date: Date = new Date()): number {
  const start = new Date(Date.UTC(date.getFullYear(), 0, 0));
  const utc = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  return Math.floor((utc.getTime() - start.getTime()) / 86_400_000);
}

export function dateKey(date: Date = new Date()): string {
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${m}-${d}`;
}

/** Map day-of-year 1–365 into bank index 0..length-1 (wraps). */
export function bankIndex(day: number, length: number): number {
  if (length <= 0) return 0;
  const n = ((day - 1) % length + length) % length;
  return n;
}

export function pickByDate<T extends { dayOfYear: number; dateKey: string }>(
  bank: T[],
  date: Date = new Date(),
): T {
  const key = dateKey(date);
  const byKey = bank.find((e) => e.dateKey === key);
  if (byKey) return byKey;
  const doy = dayOfYear(date);
  const byDoy = bank.find((e) => e.dayOfYear === doy);
  if (byDoy) return byDoy;
  return bank[bankIndex(doy, bank.length)]!;
}
