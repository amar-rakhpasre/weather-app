"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { droplets } from "@/app/utils/Icons";
import { kelvinToCelsius } from "@/app/utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Humidity() {
  const { forecast } = useGlobalContext();

  // console.log(forecast.main)

  if (!forecast || !forecast?.main || !forecast?.main?.humidity) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { humidity } = forecast?.main;

  const getHumidityText = (humidity: number) => {
    if (humidity < 30) return "Dry: May casue skin irritation";
    if (humidity >= 30 && humidity < 50)
      return "comfortable: Ideal for health and comfort";
    if (humidity >= 50 && humidity < 70)
      return "Moderate: Sticky, may increase allergens";
    if (humidity >= 70) return "HIgh: Uncomfortable, mold growth risk";
    return "Unavailable: Hu,idity data not available";
  };

  return (
    <div className="pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-7 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top gap-5">
        <h2 className="flex items-center gap-2 font-medium">
          {droplets} Humidity
        </h2>
        <p className="pt-4 text-2xl text-center">{humidity}%</p>
      </div>
      <p className="text-sm">{getHumidityText(humidity)}.</p>
    </div>
  );
}

export default Humidity;
