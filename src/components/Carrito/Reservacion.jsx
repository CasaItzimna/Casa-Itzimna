import Image from 'next/image'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import bote from "./icons/bote.png";
import experience from "./img/experiencefoto.png";

function Reservacion({reservacion, deleteExp, deleteReservation}) {
    const [plan, setPlan] = useState(null);
    const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
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
              <select
                name="guest"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="border-[1px] w-[50%] py-1 border-[#b4a692] font-apollo text-gray-500 uppercase tracking-[2px]"
              >
                <option value="" className="font-apollo ">
                  CHOOSE A PLAN
                </option>
                <option value="select" className="font-apollo">
                  SELECT
                </option>
                <option value="luxury" className="font-apollo">
                  LUXURY
                </option>
                <option value="premier" className="font-apollo">
                  PREMIER
                </option>
              </select>
              <div className="w-[50%] h-full flex flex-row gap-1 mt-4 font-apollo ">
                <div className="w-1/2 border-[1px] h-[30px] border-[#b4a692] text-center text-sm tracking-[2px] flex flex-col items-center justify-center">
                  {checkin}
                </div>
                <div className="w-1/2 border-[1px] h-[30px] border-[#b4a692] text-center text-sm tracking-[2px] flex flex-col items-center justify-center">
                  {checkout}
                </div>
              </div>
               <p className='text-right font-apollo mt-4'>PRICE FOR TOTAL NOCHES - NOMBRE PAQUETE</p> 
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
                ${reservacion?.total} MXN
              </p>
               </div>
              </div>
              {
              reservacion?.experience.map((exp, index) => (
                <div
                  key={index}
                  className="w-[90%] flex flex-col mt-4 mb-2 border-b-[2px] border-b-[#b4a692]"
                >
                  <h2 className="font-apollo text-xl tracking-[4px] mb-2 uppercase text-[#b4a692]">
                    {exp}
                  </h2>
                  <div className="w-full flex flex-row justify-between">
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="w-[90%] font-apollo uppercase tracking-[2px]">
                          Descripcion experiencia
                        </h3>
                        <p className="text-[#31302c] mt-2  font-apollo w-[90%] tracking-[2px]">
                          *AT YOUR ARRIVING, PLEASE CONFIRM THE DATE OF THE
                          SERVICE
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
                      <p className="text-right font-apollo text-3xl mt-4 tracking-[2px]">
                        $300 MXN
                      </p>
                    </div>
                  </div>
                </div>
              ))
}
                  
              
                  </div>
  )
  
}

export default Reservacion