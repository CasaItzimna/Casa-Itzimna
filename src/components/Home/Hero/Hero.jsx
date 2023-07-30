import Image from "next/image";
import React from "react";

import hero9 from "./hero9.jpg";
import { FaUsers } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import AboutUs from "../AboutUs/AboutUs";
import Calendario from "@/components/Reservacion/Calendario";
import { useState } from "react";
import { useEffect } from "react";
import { AppContext } from "@/context/StateContext";
import CalendarioModal from '../Modal/CalendarioModal';
import Link from "next/link";
 
function Hero({ setShow, json }) {

  const {setShowModalCalendar} = AppContext()

  const [modalOpen, setModalOpen] = useState(false);
    const [slug, setSlug] = useState('');
  
    const openModal = () => {
        console.log('entre')
      setModalOpen(true);
      
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

  const { inicio, fin } = AppContext();
  console.log(inicio);

  const monthNames = [ 
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  return (
    <div className="w-full  h-[70vh]  lg:h-[90vh] flex flex-col relative">
    <Image
      src={hero9}
      alt="fondo"
      className="absolute w-full h-full md:h-full object-cover"
    />

      <div className="flex flex-row justify-center  h-full  w-full   text-white absolute z-10">
        <div className="w-full h-[85%] md:h-[85%] lg:h-[90%] 2xl:h-full  flex flex-col justify-end xl:pb-10 2xl:justify-center text-center items-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-cinzelRegular xl:mt-20">
            <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[150px] xl:text-[120px] 2xl:text-[150px]">C</span>asa{" "}
            <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[150px] xl:text-[120px] 2xl:text-[150px]">I</span>tzimná
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-6xl  font-cinzelRegular">Boutique</h2>
          <button className="w-[50%] lg:w-[30%] bg-black/40 hover:bg-black text-white mt-8 py-4 text-xl 2xl:text-3xl font-Geometrica tracking-[2px] "
          /* onClick={() => { openModal(); setShowModalCalendar(true); }} */
          >
            <Link href="/House#booking">
            {json.Home.buttonBook}
            </Link></button>
            
         
{/* 
          <CalendarioModal
        
        isOpen={modalOpen}
        onRequestClose={closeModal}
        />

          <div
            className="hidden lg:flex flex-row w-[80%] md:w-[60%] lg:w-[40%] h-[65px] bg-white/40 mt-14 justify-center items-center rounded-md "
            id="barraCheckIn"
          >
            <div className="w-[22%] h-[40px] bg-white rounded-md cursor-pointer  ">
              <span
                className="text-[#736e6a] font-apollo md:text-sm xl:text-xl flex flex-row justify-center gap-2 py-2 "
                onClick={() => setShow(true)}
              >
                {inicio
                  ? `${inicio.getDate()} ${
                      monthNames[inicio.getMonth()]
                    }, ${inicio.getFullYear()}`
                  : `${json.Home.calendarioInicio}`}

                <BsCalendar3 className="mt-[4px] text-[#d3cbc0]" />
              </span>
            </div>
            <div className="w-[22%] h-[40px] bg-white ml-4 rounded-md cursor-pointer ">
              <span className="text-[#736e6a] font-apollo md:text-sm xl:text-xl flex flex-row justify-center gap-2 py-2">
                {fin
                  ? `${fin.getDate()} ${
                      monthNames[fin.getMonth()]
                    }, ${fin.getFullYear()}`
                  : `${json.Home.calendarioFin}`}
                <BsCalendar3 className="mt-[4px] text-[#d3cbc0]" />
              </span>
            </div>
            <div className="w-[18%] h-[40px] bg-white ml-4 rounded-md cursor-pointer ">
              <span className="text-[#736e6a] font-apollo md:text-sm xl:text-xl flex flex-row justify-center gap-2 py-2">
                {json.Home.calendarioPersonas}{" "}
                <FaUsers className="mt-[4px] text-[#d3cbc0]" />
              </span>
            </div>
            <button className="w-[22%] h-[40px] bg-[#d3cbc0] ml-4 font-apollo  rounded-md cursor-pointer text-black md:text-sm xl:text-xl">
              CHECK NOW
            </button>
          </div> */}
          {/* To-Do boton de book now */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
