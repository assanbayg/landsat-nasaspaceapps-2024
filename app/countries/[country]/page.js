"use client";

import { useParams } from "next/navigation";

import { Map2D } from "@/app/components/map2d";

import { AnimationContainer } from "../../components/animation-container";
import { Sidebar } from "../../components/sidebar";

const CountryPage = () => {
  const { country } = useParams();

  return (
    <div className="relative h-screen">
      <Sidebar />
      <AnimationContainer />
      <div className="h-full">
        <h1>Welcome to {country}!</h1>
        <Map2D country={country} />
      </div>
    </div>
  );
};

export default CountryPage;
