import Image from 'next/image'
import React, { useEffect } from 'react'
import 	captivating from './captivating-1.jpg'
import 	lobby from './captivating-2.jpg'
import Link from 'next/link'
import { AppContext } from '@/context/StateContext'
import { client, urlFor } from "../../lib/client";
import { useState } from 'react'
import ExperienceModal from './ExperienceModal'

function Experiences({json}) {
    console.log(json.Experiences.Experiences1)

    const {getExperiencias, experiencias, idioma} = AppContext()
    console.log(idioma)

    useEffect(() => {
      getExperiencias()
    }, [])

    console.log(experiencias)

    const [modalOpen, setModalOpen] = useState(false);
    const [seleccionarExperiencia, setSeleccionarExperiencia] = useState(null)
    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
       };
    

  return (
    <div className='w-full h-full  relative'>
                <div className="hidden h-[200px] w-full   bg-gradient-to-t from-white via-white to-transparent z-0 overflow-y-hidden absolute -top-48 "></div>
    <div className='flex flex-row justify-center'>
        <div className='w-[90%] md:w-[62%] lg:w-[90%] 2xl:w-[1140px] h-full flex flex-col justify-start 2xl:items-center z-10'>
            <div className='grid grid-cols-2 lg:grid-cols-4 lg:justify-between gap-4 '>
                {
                   experiencias.map((experiencia, index) => (
                    console.log(experiencia),
                    <div key={index} className='w-full relative cursor-pointer' onClick={() => {setSeleccionarExperiencia(experiencia); openModal() }}> 
                <div className='bg-black/50 hover:bg-black/70 absolute top-0 w-full h-full'></div>
               <img src={urlFor(experiencia?.image[0].asset._ref)} alt='foto de experiencia' className='w-full h-[200px] lg:h-[500px] object-cover '/>
               <div>
                {
                    idioma == "ingles"?
                    <h4 className='absolute text-center uppercase lg:text-left text-white text-md md:text-2xl lg:text-4xl font-apollo tracking-[8px] lg:w-[80px] lg:h-[20px] bottom-[30%] left-[0%] lg:bottom-[50px]  lg:-left-[20px] lg:-rotate-90 '>{experiencia.nombreENG}</h4>
                    :
                    <h4 className='absolute text-center uppercase lg:text-left text-white text-[10px] md:text-2xl lg:text-4xl font-apollo tracking-[8px] lg:w-[80px] lg:h-[20px] bottom-[30%] left-[0%] lg:bottom-[50px]  lg:-left-[20px] lg:-rotate-90 '>{experiencia.nombre}</h4>

                }
                </div>
                </div>
                   ))
                }
                 {
              seleccionarExperiencia &&
              <ExperienceModal
        experiencia={seleccionarExperiencia}
        isOpen={modalOpen}
        onRequestClose={closeModal}
        setModalOpen={setModalOpen}
      />
            }

               
            </div>
           
        </div>

    </div>
    <div className='w-full h-full lg:h-[450px] flex flex-col lg:mt-8  justify-center'>
                <div className='w-full  flex flex-col-reverse lg:flex-row lg:justify-center gap-4 = h-full lg:h-[350px]'>
                    <div className=' lg:w-[90%] xl:w-[80%] 2xl:w-[1140px]  gap-4  flex flex-col items-center lg:flex-row justify-center xl:justify-between mb-8 lg:mb-0 '>
                        <div className='flex flex-col items-center lg:items-start my-8 lg:my-0 lg:w-[27%] '>
                            
                        <h4 className='font-apollo  w-[60%] lg:w-[150px] text-2xl tracking-[6px] text-center lg:text-left '>
                            {json.Experiences.Captivating}
                        </h4>
                        <p className='w-[90%] md:w-[60%] lg:w-full font-PlayfairDisplay text-justify tracking-[2px] mt-4'>
                            {json.Experiences.CaptivatingText}
                        </p>
                        <button className='font-Geometrica bg-[#b4a692] w-[150px] py-1 rounded-[7px] tracking-[4px] mt-4 mb-8 lg:mb-0'>
                            <Link href="/Spaces">
                            {json.Experiences.ButtonText}
                            </Link>
                        </button>
                   </div>
                    <div  className='hidden lg:flex w-[26%] h-[270px] '>
                        <Image src={captivating} alt='captivating img' className='w-full h-full object-cover'/>
                    </div>
                    <div className='  w-[350px] md:w-[60%] lg:w-[47%] xl:w-[45%] h-[270px]'>
                        <Image src={lobby} alt='lobby img' className='w-full h-full object-cover '/>
                    </div>
                    
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Experiences