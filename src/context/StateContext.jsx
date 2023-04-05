import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/client";

const StateContext = createContext();

export function StateContextProvider({ children }) {

    function postFactura (formData) {
        console.log(formData)
        client
        .create({
        _type: 'facturas',
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
        rfc: formData.rfc,
        total: parseInt(formData.total),
        registerDate: new Date(),
        })
    }

    return (
        <StateContext.Provider
        value={{
            postFactura
        }}
        >
          {children}
        </StateContext.Provider>
      );
    }
    
    export function AppContext() {
      return useContext(StateContext);
    }
    