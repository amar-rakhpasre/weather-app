"use client"

import { useGlobalContext } from '@/app/context/globalContext'
import { sun, sunrise, sunset } from '@/app/utils/Icons';
import { unixToTime } from '@/app/utils/misc';
import { Skeleton } from '@/components/ui/skeleton';
import { Sunrise } from 'lucide-react';

import React from 'react'

function Sunset() {

  const { forecast } = useGlobalContext();

  if (!forecast || !forecast?.sys || !forecast?.sys?.sunset) {
    return <Skeleton className='h-[12rem] w-full' />;
  }

  const time = forecast?.sys?.sunset;
  const timezone = forecast?.timezone;

  const sunsetTime = unixToTime(time, timezone);
  const sunriseTime = unixToTime(forecast?.sys?.sunrise, timezone)

  return (
    <div className='pt-6 px-4 h-[10.1rem] border rounded-lg flex flex-col gap-5 dark:bg-dark-grey shadow-sm dark:shadow-none'>
            <div className="top">
              <h2 className='flex items-center gap-1 font-medium'>{sunset}Sunset</h2>
              <p className='pt-2 text-2xl'>{sunsetTime}</p>
            </div>
    
            <p className='flex items-center gap-1 font-medium'>{sunrise}Sunrise: {sunriseTime}</p>
            
    </div>
  )
}

export default Sunset