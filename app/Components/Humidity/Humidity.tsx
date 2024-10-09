"use client"
import { useGlobalContext } from '@/app/context/globalContext';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'

function Humidity() {

    const { forecast } = useGlobalContext();

    console.log(forecast.main.feels_like)

    if (!forecast || !forecast?.main || !forecast?.main?.feels_like) {
        return <Skeleton className='h-[12rem] w-full'/>
    }

  return (
    <div className='pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-7 dark:bg-dark-grey shadow-sm dark:shadow-none'>
    <div className="top gap-5">
        <h2 className="flex items-center gap-2 font-medium">
            {/* {people} Population */} Humidity
        </h2>
        <p className='pt-4 text-2xl text-center'>
           {/* {formatNumber(city.population)} */} Humidity
        </p>
    </div>
    <p className='text-sm'>
            {/* Latest UN population data for {city.name} ({city.country}). */} Humidity
    </p>
</div>
  )
}

export default Humidity