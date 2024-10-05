"use client";
import { useEffect, useState } from "react";

import { Map2D } from "./components/map2d";
import { Map3D } from "./components/map3d";

export default function Home() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);
  const [is3DMode, setIs3DMode] = useState(false);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setError(null);
        },
        (err) => {
          setError("Error retrieving location");
        },
      );
    } else {
      setError("Geolocation not supported by this browser.");
    }
  };

  useEffect(getLocation, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="my-4 flex items-center space-x-1 text-lg">
          <span>2D</span>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              checked={is3DMode}
              onChange={() => setIs3DMode(!is3DMode)}
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-blue-600 peer-focus:outline-none"></div>
            <div className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full border border-gray-300 bg-white transition-all peer-checked:translate-x-5"></div>
          </label>
          <span>3D</span>
        </div>

        {is3DMode ? <Map3D /> : <Map2D />}
      </div>
    </>
  );
}
