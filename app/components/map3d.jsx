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

  const handleNavigate = (polygon) => {
    const country = polygon.properties.ADMIN;
    router.push(`/countries/${country}`);
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
    <>
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
        onPolygonClick={(polygon) => handleNavigate(polygon)}
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
        polygonLabel={({ properties: d }) => `
            <b>${d.ADMIN}</b>
          `}
        polygonsTransitionDuration={transitionDuration}
      />
    </>
  );
};
