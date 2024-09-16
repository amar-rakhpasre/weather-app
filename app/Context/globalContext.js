"use Client";
import React, { children, createContext, useContext, useState } from 'react'

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

const GlobalContextProvider = ({ children }) => {


  return (
    <GlobalContext.Provider value="Heooooool">
      <GlobalContextUpdate.Provider>
        {children}
      </GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  )
};

export default GlobalContextProvider;
export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
