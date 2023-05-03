import { AppContext } from "@/context/StateContext";
import { useEffect, useState } from "react";
import Factura from "./Facturas/Factura";
import { useRef } from "react";
import Head from 'next/head';

const Facturas = () => {

  const { getFacturas, setIsLoading, isLoading, facturas } = AppContext();

  useEffect(() => {
      getFacturas();
  }, []);

 return (
  
 
  <div>
    <h2>Facturas</h2>
    <p>Aquí se muestra el contenido de Facturas.</p>
    {isLoading ? (
  <p>Cargando facturas...</p>
) : (
  facturas && facturas.length > 0 ? (
    facturas.map((factura) => (
      <Factura key={factura._id} factura={factura} />
    ))
  ) : (
    <span>No hay facturas</span>
  )
)}
  </div>
 
);
      }

export default Facturas;
