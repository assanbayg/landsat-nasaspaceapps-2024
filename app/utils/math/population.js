import { all, create } from "mathjs";

const math = create(all, {});

export function kangarooPopulation(temperatureChange, x) {
  const b = -4.8;
  const T = parseFloat(temperatureChange);

  const a = (-1 * 0.48) / (math.exp((2 * b) / T) - 1);
  return (a * math.exp(2 * b * Math.abs((x-T)/T)) - a)/3;
}
