"use client";

import { Map3D } from "./components/map3d";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute left-10 top-10 z-10 h-2/5 w-64 rounded-xl border-2 border-white bg-white bg-opacity-30 p-4 text-white">
        <h1 className="mb-4 text-center text-2xl font-bold">TRITON</h1>
        <h1 className="mb-4 text-center">Click on any country!</h1>
      </div>
      <div className="h-full">
        <Map3D />
      </div>
    </div>
  );
}
