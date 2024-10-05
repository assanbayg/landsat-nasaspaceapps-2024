"use client";

import { useParams, useSearchParams } from "next/navigation";

import { Map2D } from "@/app/components/map2d";

const CountryPage = () => {
  const { country } = useParams();
  const searchParams = useSearchParams();

  return (
    <div>
      <h1>Welcome to {country}!</h1>

      <Map2D country={country} />
    </div>
  );
};

export default CountryPage;
