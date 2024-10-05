"use client";

import { useState } from "react";

import { DiscreteSlider } from "./discrete-slider";

export const Sidebar = () => {
  const [humidity, setHumidity] = useState(0);

  return (
    <>
      <div className="absolute left-0 top-0 z-10 h-full w-64 rounded-xl bg-white p-4 text-blue-500 dark:bg-gray-800 dark:text-white">
        <h1 className="mb-4 text-2xl font-bold">Sidebar</h1>
        <ul>
          <li className="mb-2 cursor-pointer rounded p-2">
            Humidity{" "}
            <div className="mt-2 rounded-lg bg-gray-200 p-2 dark:bg-gray-700">
              <DiscreteSlider onChange={setHumidity} />
            </div>
          </li>
          <li className="mb-2 cursor-pointer rounded p-2">
            Not humidity
            <div className="mt-2 rounded-lg bg-gray-200 p-2 dark:bg-gray-700">
              <DiscreteSlider onChange={setHumidity} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
