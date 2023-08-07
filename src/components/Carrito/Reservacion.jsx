import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import bote from "./icons/bote.png";
import experience from "./img/experiencefoto.png";
import { differenceInDays, isValid } from "date-fns";
import { AppContext } from '@/context/StateContext';

function Reservacion({reservacion, deleteExp, deleteReservation, json}) {
    const [plan, setPlan] = useState(null);
    const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const  {moneda, eurRate, usdRate} = AppContext()

  console.log(reservacion)
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

      const getPriceByExperience = (exp) => {
        switch (exp) {
          case "spa":
            return 5000;
          case "cena":
            return 3000;
          case "recorrido":
            return 2500;
          case "comidas":
            return 6000;
          default:
            return 0; // Precio predeterminado si no se encuentra la experiencia
        }
      };

      

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
                {
                  moneda == "MXN"&&
                  `$ ${(reservacion?.total).toFixed(2)} ${moneda}`
                }
                {
                  moneda == "USD"&&
                  `$ ${(reservacion?.total*usdRate).toFixed(2)} ${moneda}`
                }
                {
                  moneda == "EUR"&&
                  `€ ${(reservacion?.total*eurRate).toFixed(2)} ${moneda}`
                }
              </p>
               </div>
              </div>
              {
              reservacion?.experience.map((exp, index) => (
                <div key={index}
                className='flex flex-row justify-center '
                >
                  {console.log(index, reservacion.experience.length)}
                <div
                  
                  className={ index == reservacion?.experience?.length-1 ? "w-full flex flex-col mt-4 mb-2 " : "w-full flex flex-col mt-4 mb-2 border-b-[2px] border-b-[#d3cbc0]"}
                >
                  <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#d3cbc0]">
                    {exp}
                  </h2>
                  <div className="w-full flex flex-row justify-between">
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="w-[90%] font-apollo uppercase tracking-[2px]">
                          Descripcion experiencia
                        </h3>
                        <p className="text-[#31302c] mt-2  font-apollo w-[90%] tracking-[2px]">
                         {json.Cart.arriving}
                        </p>
                      </div>
                      <div className="flex flex-row mt-2 justify-start">
                        <Image
                          src={bote}
                          alt="basura"
                          className=" cursor-pointer mb-4"
                          onClick={() => deleteExp(reservacion,exp)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Image
                        src={experience}
                        alt=""
                        className="rounded-[2px]"
                      />
                      <p className="text-right font-apollo text-3xl mt-4  mb-2 tracking-[2px]">
                      {
                  moneda == "MXN"&&
                  `$ ${(getPriceByExperience(exp)).toFixed(2)} ${moneda}`
                }
                {
                  moneda == "USD"&&
                  `$ ${(getPriceByExperience(exp)*usdRate).toFixed(2)} ${moneda}`
                }
                {
                  moneda == "EUR"&&
                  `€ ${(getPriceByExperience(exp)*eurRate).toFixed(2)} ${moneda}`
                }
                      </p>
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