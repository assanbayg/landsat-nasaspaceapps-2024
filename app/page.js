"use client";

import { Map3D } from "./components/map3d";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="h-full">
        <Map3D />
      </div>
    </div>
  );
}
