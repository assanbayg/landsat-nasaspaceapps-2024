"use client";

import { useState } from "react";

import { DiscreteSlider } from "./components/discrete-slider";
import { Map3D } from "./components/map3d";

export default function Home() {
  const [humidity, setHumidity] = useState(0);

  return (
    <div className="relative h-screen">
      <div className="absolute left-0 top-0 z-10 h-full w-64 bg-white p-4 text-blue-500 dark:bg-gray-800 dark:text-white">
        <h1 className="mb-4 text-2xl font-bold">Sidebar</h1>
        <ul>
          <li className="mb-2 cursor-pointer rounded p-2">
            Humidity{" "}
            <div className="mt-2 bg-gray-200 p-2 dark:bg-gray-700">
              <DiscreteSlider onChange={setHumidity} />
            </div>
          </li>
          <li className="mb-2 cursor-pointer rounded p-2">
            Not humidity
            <div className="mt-2 bg-gray-200 p-2 dark:bg-gray-700">
              <DiscreteSlider onChange={setHumidity} />
            </div>
          </li>
        </ul>
      </div>
      <div className="absolute right-0 top-0 z-10 flex h-1/2 w-96 flex-wrap gap-x-8 bg-white p-4 text-blue-500 dark:bg-gray-800 dark:text-white">
        <div className="h-36 w-36 border-red-50 bg-gray-500">
          тут будет анимашка
        </div>
        <div className="h-36 w-36 border-red-50 bg-gray-500">
          тут будет анимашка
        </div>
        <div className="h-36 w-36 border-red-50 bg-gray-500">
          тут будет анимашка
        </div>
        <div className="h-36 w-36 border-red-50 bg-gray-500">
          тут будет анимашка
        </div>
      </div>
      <div className="h-full">
        <Map3D />
      </div>
    </div>
  );
}
