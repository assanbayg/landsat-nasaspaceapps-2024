"use client";

import { useEffect, useState } from "react";

import { H, kangarooPopulation, pressure } from "../utils/math";

import { DiscreteSlider } from "./discrete-slider";

export const Sidebar = () => {
  // initial temperature, co2, humidity
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
    <>
      <div className="absolute left-0 top-0 z-10 h-full w-80 rounded-xl bg-white p-4 text-blue-500 dark:bg-gray-800 dark:text-white">
        <h1 className="mb-4 text-2xl font-bold">TRITON - 2024</h1>
        <ul>
          <li className="mb-2 cursor-pointer rounded p-2">
            Temperature
            <div className="mt-2 rounded-lg bg-gray-200 p-2 dark:bg-gray-700">
              <DiscreteSlider
                min={10}
                max={49}
                step={3}
                onChange={setTemperature} // update temperature
              />
            </div>
          </li>

          <li className="mb-2 cursor-pointer rounded p-2">
            CO2
            <div className="mt-2 rounded-lg bg-gray-200 p-2 dark:bg-gray-700">
              <DiscreteSlider
                min={1}
                max={10}
                step={1}
                onChange={setCO2} // update CO2
              />
            </div>
          </li>

          <li className="mb-2 cursor-pointer rounded p-2">
            Humidity
            <div className="mt-2 rounded-lg bg-gray-200 p-2 dark:bg-gray-700">
              <DiscreteSlider
                min={0}
                max={100}
                step={10}
                onChange={setHumidity} // update humidity
              />
            </div>
            <div className="h-6"></div>
            <div>H(T): {humidityValue.toFixed(2)}</div>
            <div>Pressure: {pressureValue.toFixed(2)} kPa</div>
            <div>Kangaroo Population: {kangarooPop.toFixed(2)}</div>
          </li>
        </ul>
      </div>
    </>
  );
};
