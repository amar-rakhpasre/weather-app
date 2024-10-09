"use Client";
import axios from 'axios';
import React, { children, createContext, useContext, useEffect, useState } from 'react'

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

const GlobalContextProvider = ({ children }) => {

  const [forecast, setForecast] = useState({});

  const [airQuality, setAirQuality] = useState({});

  const [fiveDayForecast, setFiveDayForecast] = useState({});

  const [uvIndex, setUvIndex] = useState({});

    //Courent Forecast
  const fetchForecast = async () => {
   try {
    const res = await axios.get("api/weather");

    setForecast(res.data);

   } catch (error) {
    console.log("Error fetching forecast data: ", error.message);
   } 
  }

  //Air Quality

  const fetchAirQuality = async () => {
    try {
      const res = await axios.get("api/pollution");
      // console.log(res.data);
      setAirQuality(res.data);

    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  }

    //Five Days Forecast

  const fetchFiveDayForecast = async () => {
    try {
      const res = await axios.get("api/fiveday");  
      // console.log(res.data)
      setFiveDayForecast(res.data);
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  }

      //UV Forecast

      const fetchUvIndex = async () => {
        try {
          const res = await axios.get("api/uv");  
          // console.log(res.data)
          setUvIndex(res.data);
        } catch (error) {
          console.log("Error fetching forecast data: ", error.message);
        }
      }


  useEffect(() => {
    fetchForecast();
    fetchAirQuality();
    fetchFiveDayForecast();
    fetchUvIndex();
  }, []);

  return (
    <GlobalContext.Provider value={{
      forecast,
      airQuality,
      fiveDayForecast,
      uvIndex,
    }}>
      <GlobalContextUpdate.Provider>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  )
};

export default GlobalContextProvider;
export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
