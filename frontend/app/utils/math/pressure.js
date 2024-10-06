export function pressure(h, T) {
  return 101.325 * Math.exp((-0.341827880683 * h) / T);
}
