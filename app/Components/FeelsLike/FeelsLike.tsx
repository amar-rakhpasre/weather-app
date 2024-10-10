"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { thermometer } from "@/app/utils/Icons";
import { kelvinToCelsius } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function FeelsLike() {
  const { forecast } = useGlobalContext();

  // console.log(forecast.main.feels_like)

  if (!forecast || !forecast?.main || !forecast?.main?.feels_like) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { feels_like, temp_min, temp_max } = forecast?.main;

  const feelsLikeText = (
    FeelsLike: number,
    minTemo: number,
    maxTemp: number
  ) => {
    const avgTemp = (minTemo + maxTemp) / 2;

    if (FeelsLike < avgTemp - 5) {
      return "Feels significantly colder than actual temperature.";
    }
    if (FeelsLike > avgTemp - 5 && FeelsLike <= avgTemp + 5) {
      return "Feels  close to than actual temperature.";
    }
    if (FeelsLike > avgTemp + 5) {
      return "Feels significantly warmer than actual temperature.";
    }
    return "Temperatuer feeling is typical for this range.";
  };

  const feelsLikeDescription = feelsLikeText(feels_like, temp_min, temp_max);

  return (
    <div className="pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-7 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top gap-5">
        <h2 className="flex items-center gap-2 font-medium">
          {thermometer} FeelsLike
        </h2>
        <p className="pt-4 text-2xl text-center">
          {kelvinToCelsius(feels_like)}°
        </p>
      </div>
      <p className="text-sm">{feelsLikeDescription}</p>
    </div>
  );
}

export default FeelsLike;
