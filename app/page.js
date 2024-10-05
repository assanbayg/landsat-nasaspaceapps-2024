"use client";

import { AnimationContainer } from "./components/animation-container";
import { Map3D } from "./components/map3d";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Sidebar />
      <AnimationContainer />
      <div className="h-full">
        <Map3D />
      </div>
    </div>
  );
}
