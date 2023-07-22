import { AppContext } from "@/context/StateContext";
import { useEffect, useState } from "react";
import Factura from "./Facturas/Factura";
import { useRef } from "react";
import Head from 'next/head';
import Image from "next/image";
import triangulo from '../../assets/Icons/triangulo.png'

const Facturas = () => {
  const { getFacturas, setIsLoading, isLoading, facturas } = AppContext();

  useEffect(() => {
    getFacturas();
  }, []);

  return (
    <div className="h-full w-full flex flex-row justify-center ">
      <div className="h-full w-[90%] flex flex-col justify-center">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-apollo tracking-[2px] mb-8">Facturación</h2>
          <div className="flex flex-row gap-4">
            <div className="border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer flex flex-row items-center gap-2">
              STATUS <Image src={triangulo} alt="triangulo icon" className="w-[9px] h-[7px] " />
            </div>
            <div className="border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer">+ AGREGAR FACTURA</div>
          </div>
        </div>
        <div className="w-full border-[2px] rounded-[7px] px-8 py-8">
          {isLoading ? (
            <p>Cargando facturas...</p>
          ) : facturas && facturas.length > 0 ? (
            <table className="w-full text-center ">
              <thead>
                <tr>
                  <th className="text-left">NOMBRE</th>
                  <th>TELEFONO</th>
                  <th>CORREO</th>
                  <th>RFC</th>
                  <th>FECHA</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {facturas.map((factura, index) => (
                  <Factura index={index} key={factura._id} factura={factura} />
                ))}
              </tbody>
            </table>
          ) : (
            <span>No hay facturas</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Facturas;
