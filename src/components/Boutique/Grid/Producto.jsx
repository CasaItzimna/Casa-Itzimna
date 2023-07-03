import React from 'react'
import { client, urlFor } from "../../../lib/client";

function Producto({producto}) {
  return (
    <div className='bg-[#b4a692] w-[478px] h-[533px] flex flex-col justify-center'>
            <div className='flex flex-row w-full justify-center'>
                <div className='flex flex-col'>
                    <div className='w-full flex flex-row justify-center'>
                        <div className='flex flex-col mb-4'>

                <img src={urlFor(producto?.image[0].asset._ref)} alt='imagen producto' className='w-[200px]'   /> 
                <img src={urlFor(producto?.image[0].asset._ref)} alt='imagen producto' className='w-[200px] h-[90px] rotate-180 blur-xl '   /> 
                        </div>
                    </div>
            <p className='font-apollo uppercase text-4xl tracking-[4px] mb-4'>{producto?.name}</p>
            <button className='border-[1px] border-[#31302c] tracking-[4px] font-apollo text-2xl py-1 mt-4'>
                VIEW DETAILS
            </button>
                </div>
            </div>
            </div>
  )
}

export default Producto