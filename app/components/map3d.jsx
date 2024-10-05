"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import { useRouter } from "next/navigation";

export const Map3D = () => {
  const router = useRouter();

  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [transitionDuration, setTransitionDuration] = useState(1000);

  const handleNavigate = (polygon) => {
    console.log(polygon);
    const country = polygon.properties.ADMIN;
    const lat = polygon.geometry.coordinates[0][5][0];
    const lng = polygon.geometry.coordinates[0][5][1];

    router.push(`/countries/${country}?lat=${lat}&lng=${lng}`);
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
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-water.png"
      // polygons and geojson data
      polygonsData={countries.features.filter(
        (d) => d.properties.ISO_A2 !== "AQ",
      )}
      polygonAltitude={0.01}
      polygonCapColor={(d) =>
        d.properties.ISO_A2 === "AU" ? "#5BA8AA" : "#346667"
      } // aussies are green, rest of the world is red
      // TODO: should navigate to 2d map
      onPolygonClick={(polygon) => handleNavigate(polygon)}
      polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
      polygonLabel={({ properties: d }) => `
        <b>${d.ADMIN}</b> <br />
      `}
      polygonsTransitionDuration={transitionDuration}
    />
  );
};
