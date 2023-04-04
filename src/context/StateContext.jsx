import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/client";

const StateContext = createContext();

export function StateContextProvider({ children }) {

    return (
        <StateContext.Provider
        value={{
            
        }}
        >
          {children}
        </StateContext.Provider>
      );
    }
    
    export function AppContext() {
      return useContext(StateContext);
    }
    