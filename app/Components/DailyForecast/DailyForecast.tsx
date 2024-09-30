"use client";
import { useGlobalContext } from '@/app/context/globalContext';
import { clearSky, cloudy, drizzleIcon, MMist, rain, snow } from '@/app/utils/Icons';
import { kelvinToCelsius } from '@/app/utils/misc';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import moment from 'moment';
import React from 'react';

function DailyForecast() {
    const { forecast, fiveDayForecast } = useGlobalContext();

    const { city, list } = fiveDayForecast;
    const { weather } = forecast;

    if (!fiveDayForecast || !city || !list) {
        return <Skeleton className='h-[12rem] w-full' />;
    }

    if (!forecast || !weather) {
        return <Skeleton className='h-[12rem] w-full' />;
    }

    const today = new Date();
    const todayString = today.toISOString().split("T")[0];

    // Filter the list for today's forecast
    const todaysForecast = list.filter(
        (forecast: { dt_txt: string; main: { temp: number } }) => {
            return forecast.dt_txt.startsWith(todayString);
        }
    );


    const { main: weatherMain } = weather[0];

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
                return MMist;
            default:
                return clearSky;
        }
    };

    return (
        <div className='air-pollution pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none col-span-full sm:col-span-2 md:col-span-2 xl:col-span-2'>
            {/* <h2 className="flex items-center gap-2 font-medium">{getIcon()} Daily Forecast</h2> */}
            {/* Render the forecast details here */}
            <div className="h-full gap-10 overflow-hidden">
              {todaysForecast.length < 3 ? (
                <div>Loding...</div>
              ) : (
                <div className="w-full">
                  <Carousel>
                    <CarouselContent>
                      {
                           todaysForecast.map(
                            (forecast: { dt_txt: string; main: { temp: number } }) => {
                              return (
                                <CarouselItem key={forecast.dt_txt}
                                className='flex flex-col gap-4 cursor-grab'
                                >
                                  <p className='text-gray-300'>
                                    {moment(forecast.dt_txt).format("HH:mm")}
                                  </p>
                                  <p>{getIcon()}</p>
                                  <p className='mt-4'>
                                    {kelvinToCelsius(forecast.main.temp)}°
                                  </p>
                                </CarouselItem>
                              );
                            }
                          )
                      }
                    </CarouselContent>
                  </Carousel>
                </div>
              )}
            </div>
        </div>
    );
}

export default DailyForecast;
