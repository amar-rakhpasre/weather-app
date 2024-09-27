"use client"

import { useGlobalContext } from '@/app/context/globalContext'
import { clearSky, cloudy, drizzleIcon, Mist, navigation, rain, snow } from '@/app/utils/Icons';
import { kelvinToCelsius } from '@/app/utils/misc';
import { CloudFog, Cog, icons } from 'lucide-react';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

function Temperature() {

    const { forecast } = useGlobalContext(); 

    const {main, timezone, name, weather} = forecast;
    
    if (!forecast || !weather) {
        return <div>Loading...</div>
    }

    const temp = kelvinToCelsius(main.temp)
    const minTemp = kelvinToCelsius(main.temp_min)
    const maxTemp = kelvinToCelsius(main.temp_max)

    // state

    const [loclaTime, setLocalTime] = useState<string>("");
    const [currentDay, setCurrentDay] = useState<string>("");

    const {main: weatherMain, description} = weather[0]

    const getIcon = () => {
        switch (weatherMain) {
            case "Drizzle":
                return drizzleIcon;
            case "Rain":
                return rain;
            case "Snow":
                 return snow;
            case "Clear":
                 return clearSky;
            case "Clouds":
                 return cloudy;
            case "Mist":
                    return Mist;     
            default:
                return clearSky;                
        }

    }


      //live time update
      useEffect(() => {
        const interval = setInterval(() => {
          // Get the local time with timezone adjustment
          const localMoment = moment().utcOffset(timezone / 60);
      
          // Format time in 12-hour format with AM/PM
          const formatedTime = localMoment.format("h:mm A");
      
          // Day of the week
          const day = localMoment.format("dddd");
      
          // Get the hour to determine if it's AM or PM
          const hour = localMoment.hour();
          const dayPeriod = hour >= 12 ? "PM" : "AM";
      
          // Update state with formatted time and day with AM/PM
          setLocalTime(formatedTime);
          setCurrentDay(`${day}`);
        }, 1000);
      
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, [timezone]); // Dependency on timezone



  return (
    <div className='pt-6 pb-5 px-4 border rounded-lg flex flex-col justify-between
     dark:bg-dark-grey shadow-sm dark:shadow-none'>
        <p className='flex justify-between items-center'>
            <span className='font-medium'>{currentDay}</span>
            <span className='font-medium'>{loclaTime}</span>
        </p>
        <p className='pt-2 font-bold flex gap-1'>
            <span>{name}</span>
            <span>{navigation}</span>
        </p>
        <p className='py-10 text-9xl font-bold self-center'>{temp}°</p>
        <div className="">
            <div>
                <span>{getIcon()}</span>
                <p className='pt-2 capitalize text-lg font-medium'>{description}</p>
            </div>
            <p className='flex items-center gap-2'>
                <span>Low: <b>{minTemp}°</b></span>
                <span>Max: <b>{maxTemp}°</b></span>
            </p>
        </div>
    </div>
  );
}

export default Temperature