function countOdds(low: number, high: number): number {
  const both_even = (low % 2 === 0) && (high % 2 === 0)
  return Math.floor(high - low)
};