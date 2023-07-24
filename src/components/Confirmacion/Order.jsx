import React from 'react'
import Reservacion from './Reservacion'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Order({json}) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
      }, []);

  return (
    <div className='w-full flex flex-row justify-center bg-[#b4a692] '>
        <div className='w-[90%]  h-full flex flex-col items-center bg-white mb-8'>
            <div className='w-[90%] flex flex-col '>
                <div className='w-full flex flex-col items-center'>

                <h2 className='text-center font-apollo tracking-[4px] text-xl mt-8'>{json.Confirmation.titulo}</h2>
                <h3 className='text-center font-apollo tracking-[4px] text-xl text-[#b4a692]'>{json.Confirmation.thanks}</h3>
                <p className='text-center font-apollo tracking-[2px]'>{json.Confirmation.delighted}</p>
                <p className='text-center font-apollo tracking-[2px]'>{json.Confirmation.recipt}.</p>
                </div>
                <div className='w-full flex flex-col items-start'>
                    <p className='text-center font-apollo tracking-[2px] mt-8'>{json.Confirmation.review}</p>
                    <h3 className='text-center font-apollo tracking-[4px] text-xl text-[#b4a692]'>{json.Confirmation.booking}</h3>

                    <Reservacion/>


                </div>
                <div className='w-full flex flex-col items-start mt-4'>
                    <h3 className='uppercase font-apollo tracking-[4px] text-xl text-[#b4a692]'>Romantic dinner experience</h3>

                    <p className='font-apollo tracking-[2px] uppercase'>descripcion</p>


                </div>
                <div className='w-full flex flex-col items-start mt-4'>
                    <h3 className='uppercase text-center font-apollo tracking-[4px] text-xl text-[#b4a692]'>product name</h3>

                    <p className='font-apollo tracking-[2px] uppercase'>Huichol Art Piece</p>

                </div>
                <div className='w-full flex flex-col items-center mt-8'>

                <p className='uppercase text-center font-apollo tracking-[2px]'>{json.Confirmation.recommend}</p>
                <p className='uppercase text-center font-apollo tracking-[2px]'>{json.Confirmation.questions} <span className='text-[#b4a692]'>CONTACTO@CASAITZIMNA.COM</span>.</p>
                <p className='uppercase text-center font-apollo tracking-[2px]'>{json.Confirmation.forward} <span className='text-[#b4a692]'>CASA ITZIMNÁ BOUTIQUE</span>.</p>
                <p className='text-center font-apollo tracking-[2px] mt-4'>{json.Confirmation.regards} </p>
                <p className='text-center font-apollo tracking-[2px] mb-8'>CASA ITZIMNÁ </p>
                
                </div>

            </div>
        </div>
    </div>
  )
}

export default Order