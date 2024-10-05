"use client";

import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

export const Map3D = () => {
  const globeEl = useRef();
  const [points, setPoints] = useState([]);

  // useEffect(() => {
  //   const N = 50;
  //   const gData = [...Array(N).keys()].map(() => ({
  //     lat: (Math.random() - 0.5) * 180,
  //     lng: (Math.random() - 0.5) * 360,
  //     size: Math.random() / 3,
  //     color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  //   }));
  //   setPoints(gData);
  // }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={points}
        pointAltitude="size"
        pointColor="color"
      />
    </div>
  );
};
