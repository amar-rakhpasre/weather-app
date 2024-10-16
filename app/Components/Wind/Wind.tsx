"use client";
import { useGlobalContext } from '@/app/context/globalContext';
import { wind } from '@/app/utils/Icons';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import React from 'react';

function Wind() {
    const { forecast } = useGlobalContext();
    // console.log(forecast)
    const windSpeed = Math.round(forecast?.wind?.speed);
    const windDir = forecast?.wind?.deg; // Keep the wind direction in degrees without modification
    // console.log(windSpeed)
    // console.log(windDir)
    // If wind data is not available, show a skeleton loader
    if (!windSpeed || windDir === undefined) {
        return <Skeleton className='h-[12rem] w-full' />;
    }
    

    return (
        <div className='pt-6 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none'>
            <h2 className="flex items-center gap-2 font-medium">{wind}Wind: {windSpeed} m/s</h2>

            <div className="compass relative flex items-center justify-center">
                <div className="image relative bottom-5">
                    <Image src="/compass_body.svg" className='relative bottom-[-0.85rem]' alt="compass" width={110} height={110} />
                    <Image 
                        src="/compass_arrow.svg" 
                        alt="compass arrow" 
                        className='relative bottom-[6rem] left-[45%] transition-transform duration-1000 ease-in-out dark:invert' 
                        width={10} 
                        height={10}
                        style={{
                            transform: `rotate(${windDir}deg) translate(10%, 1%)`,
                            height: "50%",
                        }} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Wind;
