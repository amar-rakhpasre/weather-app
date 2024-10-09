"use client"
import { useGlobalContext } from '@/app/context/globalContext'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { UvProgress } from '../UvProgress/UvProgress'
import { sun } from '@/app/utils/Icons'


function UvIndex() {

    
    const { uvIndex } = useGlobalContext()

    if (!uvIndex || !uvIndex.current) {
        return <Skeleton className='h-[12rem] w-full' />
    }

    const { current } = uvIndex;
    const { uv_index_clear_sky, uv_index } = current; 

    const uvIndexMax = uv_index;

    const uvIndexCategory = (uvIndex) => {
      if (uvIndex <= 2) {
        return {
          text: "Low",
          protection: "No Protection required.",
        }
      } else if (uvIndex <= 5) {
        return {
          text: "Moderate",
          protection: "stay in shade near midday.",
        }
      } else if (uvIndex <= 7) {
        return {
          text: "HIgh",
          protection: "Wear a hat and sunglasses.",
        }
      } else if (uvIndex <= 10) {
        return {
          text: "Very High",
          protection: "Apply sunscreen SPF 30+ every 2 hours.",
        }
      } else {
        return {
          text: "Extreme",
          protection: "Avoid being outside",
        }
      };
    }

    
    const marginLeftPercentage = (uvIndexMax + 1 / 14) * 100;


  return (
    <div className='pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-5 dark:bg-dark-grey shadow-sm dark:shadow-none'>
            <div className="top">
              <h2 className='flex items-center gap-2 font-medium'>{sun} Uv Index</h2>
              <p className='pt-4 text-2xl'>
                {uvIndexMax}
                <span className='text-sm'>({uvIndexCategory(uvIndexMax).text})</span>
              </p>

              <UvProgress 
                value={marginLeftPercentage}
                max={14}
                className='progress'
              />
            </div>

            <p className='text-sm font-bold'>{uvIndexCategory(uvIndexMax).protection}</p>
    </div>
  )
}

export default UvIndex