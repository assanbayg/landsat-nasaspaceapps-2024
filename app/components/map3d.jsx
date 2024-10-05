"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export const Map3D = () => {
  const globeEl = useRef();

  // const [points, setPoints] = useState([]);

  const [countries, setCountries] = useState({ features: [] });
  const [altitude, setAltitude] = useState(0.1);
  const [transitionDuration, setTransitionDuration] = useState(1000);

  useEffect(() => {
    // Load data
    fetch("/data/australia.geojson")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);

        setTimeout(() => {
          setTransitionDuration(4000);
        }, 3000);
      });
  }, []);

  useEffect(() => {
    // Auto-rotate
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.3;
      // globeEl.current.pointOfView({ altitude: 4 }, 5000);
    }
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      // all options for globe image"
      // earth-blue-marble.jpg
      // earth-dark.jpg
      // earth-day.jpg
      // earth-night.jpg
      // earth-topology.png
      // earth-water.png
      // night-sky.png

      // if you need some specific points instead of polygons
      // pointsData={points}
      // pointAltitude="size"
      // pointColor="color"

      // polygons and my favourite geojsoonnnnnn

      polygonsData={countries.features.filter(
        (d) => d.properties.ISO_A2 !== "AQ",
      )}
      polygonAltitude={altitude}
      polygonCapColor={() => "rgba(200, 0, 0, 0.6)"}
      polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
      polygonLabel={({ properties: d }) => `
        <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
        Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
      `}
      polygonsTransitionDuration={transitionDuration}
    />
  );
};
