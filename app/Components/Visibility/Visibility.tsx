"use client";
import { useGlobalContext } from "@/app/context/globalContext";
import { eye } from "@/app/utils/Icons";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Visibility() {
  const { forecast } = useGlobalContext();

  // console.log(forecast.visibility)

  if (!forecast || !forecast?.main || !forecast?.main?.grnd_level) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { visibility } = forecast;

  const getVisibilityText = (visibility: number) => {
    const visibilityInKm = Math.round(visibility / 1000);

    if (visibilityInKm > 10) return "Excellent: Clear and vast View";
    if (visibilityInKm > 5) return "Good: Easily navigable";
    if (visibilityInKm > 1) return "Modreate: Some limitation";
    if (visibilityInKm > 10) return "Poor: Restricted and unclear";
    return "Unavailable: Visibility data not available";
  };

  return (
    <div className="pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-7 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top gap-5">
        <h2 className="flex items-center gap-2 font-medium">
          {eye} Visibility
        </h2>
        <p className="pt-4 text-2xl text-center">
          {Math.round(visibility / 1000)} KM
        </p>
      </div>
      <p className="text-sm">{getVisibilityText(visibility)}.</p>
    </div>
  );
}

export default Visibility;
