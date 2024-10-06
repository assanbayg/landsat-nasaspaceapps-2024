export function H(T) {
  const numerator = 611.3 * Math.exp(5423 * (1 / 273.15 - 1 / (273.15 + T)));
  const denominator = 133.322368 * 23.8 * 4;
  return numerator / denominator;
}
