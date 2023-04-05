import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/client";

const StateContext = createContext();

export function StateContextProvider({ children }) {

    const [facturas, setFacturas] = useState([])
    const [reservaciones, setReservaciones] = useState([])
    const [productos, setProductos] = useState([])

    //Facturas

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
        state: true,
        registerDate: new Date(),
        })
    }
    //TODO: getFacturas
    async function getFacturas (){
        const query = '*[_type == "facturas"]'
        const resultado = await client.fetch(query)
        setFacturas(resultado)
    }
    //TODO: updateFactura
    function updateFactura (formData){

    }
    //TODO: deleteFactura
    function deleteFactura(id){

    }

    //Reservaciones

    //TODO: postReservacion
    function postReservacion(data){

    }

    //TODO: getReservaciones
   async function getReservaciones(){
        const query = '*[_type == "reservaciones"]'
        const resultado = await client.fetch(query)
        setReservaciones(resultado)
    }

    //TODO: updateReservacion
    function updateReservacion(){

    }

    //TODO: deleteReservacion
    function deleteReservacion(){

    }

    //Productos
    //TODO: getProductos
    async function getProductos(){
        const query = '*[_type == "productos"]'
        const resultado = await client.fetch(query)
        setProductos(resultado)
    }


    return (
        <StateContext.Provider
        value={{
            postFactura,
            getFacturas,
            updateFactura,
            deleteFactura,
            postReservacion,
            getReservaciones,
            updateReservacion,
            deleteReservacion,
            getProductos,
            facturas,
            reservaciones,
            productos
        }}
        >
          {children}
        </StateContext.Provider>
      );
    }
    
    export function AppContext() {
      return useContext(StateContext);
    }
    