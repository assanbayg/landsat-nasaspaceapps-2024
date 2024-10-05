"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export const Map3D = () => {
  const globeEl = useRef();

  const altitude = 0.01;
  const [countries, setCountries] = useState({ features: [] });
  const [transitionDuration, setTransitionDuration] = useState(1000);

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
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
      // polygons and geojson data
      polygonsData={countries.features.filter(
        (d) => d.properties.ISO_A2 !== "AQ",
      )}
      polygonAltitude={altitude}
      polygonCapColor={(d) =>
        d.properties.ISO_A2 === "AU"
          ? "rgba(0, 100, 0, 0.6)"
          : "rgba(200, 0, 0, 0.6)"
      } // aussies are green, rest of the world is red
      // TODO: should navigate to 2d map
      onPolygonClick={(polygon) => alert(polygon.properties.ADMIN)}
      polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
      polygonLabel={({ properties: d }) => `
        <b>${d.ADMIN}</b> <br />
      `}
      polygonsTransitionDuration={transitionDuration}
    />
  );
};
