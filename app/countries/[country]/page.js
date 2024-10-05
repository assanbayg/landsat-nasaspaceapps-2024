"use client";

import { useParams } from "next/navigation";

import { Map2D } from "@/app/components/map2d";

const CountryPage = () => {
  const { country } = useParams();

  return (
    <div>
      <h1>Welcome to {country}!</h1>

      <Map2D country={country} />
    </div>
  );
};

export default CountryPage;
