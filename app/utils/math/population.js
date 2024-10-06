export function kangarooPopulation(T, temperatureChange) {
  const b = Math.log(2) / (2 / T - 6 / T);

  const a = -0.48 / (Math.exp((2 * b) / T) - 1);

  function f(x, a, b) {
    return a * Math.exp(2 * b * Math.abs(x)) - a;
  }

  const kangarooPopulationChange = f(temperatureChange, a, b);

  return kangarooPopulationChange;
}
