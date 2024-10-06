"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { Map2D } from "@/app/components/map2d";

import { AnimationContainer } from "../../components/animation-container";
import { DiscreteSlider } from "../../components/discrete-slider";
import { H, kangarooPopulation, pressure } from "../../utils/math";

const temperatureImpact = [
  "Mild Impact: 10°C to 24°C. At these temperatures, most people will feel relatively comfortable. While cooler areas may still require light layers, the climate is generally safe for outdoor activities. Hydration is key, but there is minimal risk of heat-related issues.",
  "Moderate Impact: 25°C to 34°C. As temperatures rise to this range, the heat starts to become noticeable, and prolonged exposure can lead to discomfort. While it’s still bearable, people need to be cautious about overexertion and dehydration. Air conditioning becomes necessary for comfort.",
  "Severe Impact: 35°C to 49°C. These extreme temperatures can pose significant risks to human health. Even short exposure to the sun without protection can lead to severe heat exhaustion or heat stroke. Staying hydrated, avoiding direct sunlight, and minimizing physical exertion are critical for survival.",
];

const co2Impact = [
  "Low Impact: 10% to 20% CO2 - At this concentration, the air has significantly more CO2 than the normal level (0.04%). While immediate danger is not imminent, people exposed to this environment for prolonged periods may begin to experience mild symptoms.",
  "Moderate Impact: 21% to 50% CO2 - As CO2 levels rise within this range, the situation becomes increasingly dangerous. The air has less oxygen, which can lead to significant symptoms, even with short exposure.",
  "Severe Impact: 51% to 100% CO2 - These concentrations of CO2 are extremely dangerous and can lead to immediate life-threatening consequences. Even brief exposure can be fatal without rapid intervention.",
];

const CountryPage = () => {
  const { country } = useParams();

  const [temperature, setTemperature] = useState(10);
  const [co2, setCO2] = useState(1);
  const [humidity, setHumidity] = useState(0);

  const humidityValue = H(temperature);
  const kangarooPop = kangarooPopulation(temperature, 1);
  // calculate values based on sliders
  const pressureValue = pressure(humidity, temperature);

  useEffect(() => {
    console.log("temperature" + temperature);
    console.log("co2" + co2);
    console.log("humidity" + humidity);
  }, [temperature, co2, humidity]);

  return (
    <div className="relative h-screen">
      <div className="absolute left-0 top-0 z-10 h-full w-80 rounded-xl bg-white p-4 text-blue-500 dark:bg-gray-800 dark:text-white">
        <h1 className="mb-4 text-2xl font-bold">TRITON - 2024</h1>
        <ul>
          <li className="mb-1 cursor-pointer rounded p-2">
            Temperature
            <div className="mt-1 rounded-lg bg-gray-200 p-2 dark:bg-gray-700">
              <DiscreteSlider
                min={10}
                max={49}
                step={3}
                onChange={setTemperature} // update temperature
              />
            </div>
          </li>

          <li className="mb-1 cursor-pointer rounded p-2">
            CO2
            <div className="mt-1 rounded-lg bg-gray-200 p-2 dark:bg-gray-700">
              <DiscreteSlider
                min={1}
                max={10}
                step={1}
                onChange={setCO2} // update CO2
              />
            </div>
          </li>

          <li className="mb-1 cursor-pointer rounded p-2">
            Humidity
            <div className="mt-1 rounded-lg bg-gray-200 p-2 dark:bg-gray-700">
              <DiscreteSlider
                min={0}
                max={100}
                step={10}
                onChange={setHumidity} // update humidity
              />
            </div>
            <div className="h-4"></div>
            <div className="font-bold">
              <div>H(T): {humidityValue.toFixed(2)}</div>
              <div>Pressure: {pressureValue.toFixed(2)} kPa</div>
              <div>Kangaroo Population: {kangarooPop.toFixed(2)}</div>
            </div>
          </li>
        </ul>
        <div className="h-56 overflow-y-auto">
          <p>
            {temperature >= 10 && temperature < 24
              ? temperatureImpact[0]
              : temperature > 24 && temperature <= 34
                ? temperatureImpact[1]
                : temperatureImpact[2]}
          </p>
          <br />
          <p>
            {co2 >= 1 && co2 < 2
              ? co2Impact[0]
              : co2 > 2 && co2 <= 5
                ? co2Impact[1]
                : co2Impact[2]}
          </p>
        </div>
      </div>
      <AnimationContainer kangarooPopulationChange={kangarooPop} />

      {/* Infographics */}
      <div className="absolute bottom-10 right-0 z-10 flex h-80 w-56 flex-wrap items-center justify-center gap-x-8 rounded-xl border-4 border-gray-200 bg-white p-4 dark:bg-gray-800 dark:text-white">
        <Image
          src={"/australia.jpg"}
          width={150}
          height={150}
          alt="australia"
        />
        <Image
          src={"/australia-change.jpg"}
          width={150}
          height={150}
          alt="australia-change"
        />
      </div>
      <div className="h-full">
        <h1>Welcome to {country}!</h1>
        <Map2D country={country} />
      </div>
    </div>
  );
};

export default CountryPage;
