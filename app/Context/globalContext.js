"use Client";
import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";
import defaultStates from "../utils/defaultStates";

import { debounce } from "lodash";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});
  // const [geoCodedList, setGeoCodedList] = useState(defaultStates);
  // const [inputValue, setInputValue] = useState("");

  const fetchForecast = async () => {
    try {
      const res = await axios.get("api/weather");
  
      console.log("res: ", res.data);
      // setForecast(res.data); // Update the state with the fetched data
    } catch (error) {
      console.log("Error fetching forecast data: ", error.message);
    }
  };
  

  
  // // Air Quality
  // const fetchAirQuality = async (lat, lon) => {
  //   try {
  //     const res = await axios.get(`api/pollution?lat=${lat}&lon=a${lon}`);
  //     setAirQuality(res.data);
  //   } catch (error) {
  //     console.log("Error fetching air quality data: ", error.message);
  //   }
  // };

  // // five day forecast
  // const fetchFiveDayForecast = async (lat, lon) => {
  //   try {
  //     const res = await axios.get(`api/fiveday?lat=${lat}&lon=${lon}`);

  //     setFiveDayForecast(res.data);
  //   } catch (error) {
  //     console.log("Error fetching five day forecast data: ", error.message);
  //   }
  // };

  // //geocoded list
  // const fetchGeoCodedList = async (search) => {
  //   try {
  //     const res = await axios.get(`/api/geocoded?search=${search}`);

  //     setGeoCodedList(res.data);
  //   } catch (error) {
  //     console.log("Error fetching geocoded list: ", error.message);
  //   }
  // };

  // //fetch uv data
  // const fetchUvIndex = async (lat, lon) => {
  //   try {
  //     const res = await axios.get(`/api/uv?lat=${lat}&lon=${lon}`);

  //     seUvIndex(res.data);
  //   } catch (error) {
  //     console.error("Error fetching the forecast:", error);
  //   }
  // };

  // // handle input
  // const handleInput = (e) => {
  //   setInputValue(e.target.value);

  //   if (e.target.value === "") {
  //     setGeoCodedList(defaultStates);
  //   }
  // };

  // // debounce function
  // useEffect(() => {
  //   const debouncedFetch = debounce((search) => {
  //     fetchGeoCodedList(search);
  //   }, 500);

  //   if (inputValue) {
  //     debouncedFetch(inputValue);
  //   }

  //   // cleanup
  //   return () => debouncedFetch.cancel();
  // }, [inputValue]);

  useEffect(() => {
    fetchForecast();
    // fetchAirQuality(activeCityCoords[0], activeCityCoords[1]);
    // fetchFiveDayForecast(activeCityCoords[0], activeCityCoords[1]);
    // fetchUvIndex(activeCityCoords[0], activeCityCoords[1]);
  }, []);

  return (
    <GlobalContext.Provider value="hello">
      <GlobalContextUpdate.Provider>{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);