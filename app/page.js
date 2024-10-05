"use client";

import { useState } from "react";

import { Map3D } from "./components/map3d";

export default function Home() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenuItem((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative h-screen">
      <div className="absolute left-0 top-0 z-10 h-full w-64 bg-white p-4 text-blue-500 dark:bg-gray-800 dark:text-white">
        <h1 className="mb-4 text-2xl font-bold">Sidebar</h1>
        <ul>
          <li
            className="mb-2 cursor-pointer rounded p-2"
            onClick={() => handleMenuClick(1)}
          >
            Parameter 1
            {activeMenuItem === 1 && (
              <div className="mt-2 bg-gray-200 p-2 dark:bg-gray-700">
                This is the content for Menu Item 1.
              </div>
            )}
          </li>
          <li
            className="mb-2 cursor-pointer rounded p-2"
            onClick={() => handleMenuClick(2)}
          >
            Parameter 2
            {activeMenuItem === 2 && (
              <div className="mt-2 bg-gray-200 p-2 dark:bg-gray-700">
                This is the content for Menu Item 2.
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="h-full">
        <Map3D />
      </div>
    </div>
  );
}
