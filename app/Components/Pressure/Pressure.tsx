"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { gauge } from "@/app/utils/Icons";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Pressure() {
  const { forecast } = useGlobalContext();

  // console.log(forecast.main.pressure)

  if (!forecast || !forecast?.main || !forecast?.main?.pressure) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { pressure } = forecast.main;

  const getPressureText = (pressure: number) => {
    if (pressure < 1000) return "Very Low Pressure";
    if (pressure >= 1000 && pressure < 1015)
      return "Low Pressure. Expect Weather Changes.";
    if (pressure >= 1015 && pressure < 1025)
      return "Normal Pressure. Expect Weather Changes.";
    if (pressure >= 1025 && pressure < 1040)
      return "HIgh Pressure, Expect Weather Changes";
    if (pressure >= 1040) return "Very High Pressure. Expect Weather Changes";
    return "Unavailable";
  };

  return (
    <div className="pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-7 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top gap-5">
        <h2 className="flex items-center gap-2 font-medium">
          {gauge} Pressure
        </h2>
        <p className="pt-4 text-2xl text-center">{pressure} hPa</p>
      </div>
      <p className="text-sm">{getPressureText(pressure)}.</p>
    </div>
  );
}

export default Pressure;
