import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import bote from "./icons/bote.png";
import experience from "./img/experiencefoto.png";
import { differenceInDays, isValid } from "date-fns";
import { AppContext } from '@/context/StateContext';
import { client, urlFor } from "../../lib/client";


function Reservacion({reservacion, deleteExp, deleteReservation, json}) {
    const [plan, setPlan] = useState(null);
    const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const  {moneda, eurRate, usdRate} = AppContext()

    useEffect(() => {
        if (reservacion) {
            // Convertir las fechas de cadena de texto a objetos Date
            const checkinDate = new Date(reservacion.checkin);
            const checkoutDate = new Date(reservacion.checkout);
        
            // Actualizar los estados con las fechas formateadas
            setPlan(reservacion.plan);
            setCheckin(checkinDate.toISOString().substring(0, 10));
            setCheckout(checkoutDate.toISOString().substring(0, 10));
          }
      }, [reservacion]);

  return (
    <div className='w-full flex flex-col'>

    
    <div className="w-full flex flex-col ">
                <p className="font-apollo mb-1 uppercase tracking-[2px]">
                {reservacion?.name}
              </p>
              <p className="font-apollo mb-1 uppercase tracking-[2px]">
                {reservacion?.tel}
              </p>
              <p className="font-apollo mb-1 uppercase tracking-[2px]">
                {reservacion?.email}
              </p>
              <div className='border-[1px] w-[50%] py-1 border-[#d3cbc0] font-apollo text-gray-500 uppercase tracking-[2px]'>
                {reservacion?.plan}
              </div>
              <div className="w-[50%] h-full flex flex-row gap-1 mt-4 font-apollo ">
                <div className="w-1/2 border-[1px] h-[30px] border-[#d3cbc0] text-center text-[10px] md:text-[13px]  tracking-[2px] flex flex-col items-center justify-center">
                  {checkin}
                </div>
                <div className="w-1/2 border-[1px] h-[30px] border-[#d3cbc0] text-center text-[10px] md:text-[13px] tracking-[2px] flex flex-col items-center justify-center">
                  {checkout}
                </div>
              </div>
               <p className='text-right font-apollo mt-4'>{json.Cart.price} { differenceInDays(new Date(reservacion.checkout), new Date(reservacion.checkin))} {json.Cart.nights} - <span className='uppercase'>{reservacion.plan}</span></p> 
               <div className='flex flex-row w-full justify-between'>
               <div className="flex flex-col justify-end mb-4 ">
                    <Image
                      src={bote}
                      alt="basura"
                      className=" cursor-pointer w-[18px] h-[21px]"
                      onClick={() => deleteReservation(reservacion)}
                    />
                  </div>
              <p className="text-right font-apollo text-3xl mt-8 mb-4 tracking-[2px] ">
  {moneda === "MXN" &&
    `$ ${(reservacion?.total).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} ${moneda}`
  }
  {moneda === "USD" &&
    `$ ${(reservacion?.total * usdRate).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} ${moneda}`
  }
  {moneda === "EUR" &&
    `€ ${(reservacion?.total * eurRate).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} ${moneda}`
  }
</p>
               </div>
              </div>
              {
              reservacion?.experience.map((exp, index) => (
                <div key={index}
                className='flex flex-row justify-center '
                >
                <div
                  
                  className={ index == reservacion?.experience?.length-1 ? "w-full flex flex-col mt-4 mb-2 " : "w-full flex flex-col mt-4 mb-2 border-b-[2px] border-b-[#d3cbc0]"}
                >
                  <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#d3cbc0]">
                    {exp.nombre}
                  </h2>
                  <div className="w-full flex flex-col-reverse  justify-between">
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="w-[90%] font-apollo uppercase tracking-[2px]">
                          Descripcion experiencia
                        </h3>
                        <p className="text-[#31302c] mt-2 text-justify font-apollo w-full  tracking-[1px]">
                         {exp.descripcion}
                        </p>
                      </div>
                      <div className="flex flex-row mt-2 justify-between">
                        <div className='flex flex-col h-full justify-center'>

                        <Image
                          src={bote}
                          alt="basura"
                          className=" cursor-pointer  object-contain"
                          onClick={() => deleteExp(reservacion,exp)}
                        />
                        </div>
                        <p className="text-right w-full font-apollo text-3xl mt-4 mb-2 tracking-[2px]">
  {moneda === "MXN" &&
    `$ ${(exp?.precio).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} ${moneda}`
  }
  {moneda === "USD" &&
    `$ ${(exp?.precio * usdRate).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} ${moneda}`
  }
  {moneda === "EUR" &&
    `€ ${(exp?.precio * eurRate).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} ${moneda}`
  }
</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <img src={urlFor(exp?.image[0].asset._ref)}
                        alt=""
                        className="rounded-[2px] mb-4 w-[250px] md:w-full h-[150px] object-cover"
                      />
                     
                    </div>
                  </div>
                </div>
                </div>
              ))
}
                  </div>
  )
  
}

export default Reservacion