"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export const Map3D = () => {
  const router = useRouter();
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [transitionDuration, setTransitionDuration] = useState(1000);
  const [currentChoice, setCurrentChoice] = useState("");

  const handleNavigate = () => {
    router.push(`/countries/${currentChoice}`);
  };

  useEffect(() => {
    fetch("/data/countries.geojson")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setTimeout(() => {
          setTransitionDuration(4000);
        }, 3000);
      });
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.3;
    }
  }, []);

  return (
    <div className="relative h-screen">
      <div className="top-60 absolute left-24 z-10 flex gap-x-2">
        <p className="text-center text-2xl text-white">{currentChoice}</p>
        <button
          className="w-20 rounded-xl bg-blue-500 px-2 py-1 text-center text-xl text-white"
          onClick={handleNavigate}
        >
          Select
        </button>
      </div>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
        polygonsData={countries.features.filter(
          (d) => d.properties.ISO_A2 !== "AQ",
        )}
        polygonAltitude={0.01}
        polygonCapColor={(d) =>
          d.properties.ISO_A2 === "AU" ? "#5BA8AA" : "#346667"
        }
        onPolygonClick={(polygon) => setCurrentChoice(polygon.properties.ADMIN)}
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
        polygonLabel={({ properties: d }) => `
            <b>${d.ADMIN}</b>
          `}
        polygonsTransitionDuration={transitionDuration}
      />
    </div>
  );
};
