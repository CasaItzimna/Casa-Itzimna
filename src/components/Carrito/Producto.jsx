import Image from 'next/image'
import React from 'react'
import bote from "./icons/bote.png";
import { client, urlFor } from "../../lib/client";
import { AppContext } from '@/context/StateContext';


function Producto({index, producto, carritoProductos, json, determinarMoneda}) {
  const  {moneda, eurRate, usdRate} = AppContext()
  return (
    <div
    className={
      index == carritoProductos?.length - 1
        ? "w-[90%] flex flex-col mb-2 mt-4  "
        : "w-[90%] flex flex-col mb-2 mt-4 border-b-[2px] border-b-[#d3cbc0] "
    }
  >
    <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#d3cbc0]">
      {producto?.name}
    </h2>
    <div className="w-full flex flex-col-reverse  justify-between">
      <div className="w-full flex flex-col justify-between">
        <div>
          <h3 className=" font-apollo uppercase text-justify tracking-[2px]">
            {producto?.description.substring(0, 70) + " ..."}
          </h3>
          <p className="text-[#31302c] mt-2 text-justify  font-apollo w-full tracking-[1px]">
            {json.Cart.shipping}
          </p>
        </div>
        <div className="flex flex-row mt-2 justify-between ">
          <div className="flex flex-col h-full justify-center">

          <Image
            src={bote}
            alt="basura"
            className=" cursor-pointer object-contain"
            onClick={() => deleteProduct(producto)}
          />
          </div>
          <p className="text-right mb-2 lg:mb-0 w-full font-apollo text-3xl mt-4 tracking-[2px]">
          
  {moneda === "MXN" &&
    `$ ${(parseFloat(producto?.price)).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} ${moneda}`
  }
  {moneda === "USD" &&
    `$ ${(parseFloat(producto?.price) * usdRate).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} ${moneda}`
  }
  {moneda === "EUR" &&
    `€ ${(parseFloat(producto?.price) * eurRate).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} ${moneda}`
  }
          {console.log(producto.price)}
        </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  w-full">
        <img
          src={urlFor(producto?.image[0].asset._ref)}
          alt="producto foto"
          className="w-[50%]"
        />
        
      </div>
    </div>
  </div>
  )
}

export default Producto