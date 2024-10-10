"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { people } from "@/app/utils/Icons";
import { formatNumber } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Population() {
  const { fiveDayForecast } = useGlobalContext();

  const { city } = fiveDayForecast;

  // console.log(city)

  if (!fiveDayForecast || !city) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  return (
    <div className="pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-7 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top gap-5">
        <h2 className="flex items-center gap-2 font-medium">
          {people} Population
        </h2>
        <p className="pt-4 text-2xl text-center">
          {formatNumber(city.population)}
        </p>
      </div>
      <p className="text-sm">
        Latest UN population data for {city.name} ({city.country}).
      </p>
    </div>
  );
}

export default Population;
