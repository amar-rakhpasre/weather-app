"use Client";
import axios from 'axios';
import React, { children, createContext, useContext, useEffect, useState } from 'react'

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

const GlobalContextProvider = ({ children }) => {

  const [forecast, setForecast] = useState({});

  const fetchForecast = async () => {
   try {
    const res = await axios.get("api/weather");

    setForecast(res.data);

   } catch (error) {
    console.log("Error fetching forecast data: ", error.message);
   } 
  }


  useEffect(() => {
    fetchForecast();
  }, []);

  return (
    <GlobalContext.Provider value={{
      forecast,
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
