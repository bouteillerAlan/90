/**
 * return the raw value of Date.now()
 * this is mostly useful for a "non pure function" problem
 * @returns number the number of millisecond returned by Date.now()
 */
export function elapsedMillis(): number {
  return Date.now();
}
