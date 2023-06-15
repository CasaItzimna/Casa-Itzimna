import Image from "next/image";
import React from "react";
import slider1 from "../../../assets/Home/slider1.jpg";
import hero1 from "../../../assets/Home/hero3.png";
import { FaUsers } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import AboutUs from "../AboutUs/AboutUs";
import Calendario from "@/components/Reservacion/Calendario";
import { useState } from "react";

function Hero({ json }) {
  const [show, setShow] = useState(false);
  const [inicio, setInicio] = useState(null);
  const [fin, setFin] = useState(null);

  return (
    <div className="w-full h-full flex flex-col relative">
      <Image
        src={hero1}
        alt="fondo"
        className="absolute w-full h-screen object-cover"
      />

      <div className="flex flex-row justify-center  h-screen w-full   text-white absolute z-10">
        <div className="w-full h-full flex flex-col justify-center text-center items-center">
          <h1 className="text-9xl font-cinzelRegular">
            <span className="text-[200px]">C</span>asa{" "}
            <span className="text-[200px]">I</span>tzimná
          </h1>
          <h2 className="text-6xl font-cinzelRegular">Boutique</h2>

          <div
            className="flex flex-row  w-[40%] h-[65px] bg-white/40 mt-14 justify-center items-center rounded-md "
            id="barraCheckIn"
          >
            <div className="w-[22%] h-[40px] bg-white rounded-md cursor-pointer  ">
              <span
                className="text-[#736e6a] font-apollo text-xl flex flex-row justify-center gap-2 mt- text-center items-center "
                onClick={() => setShow(true)}
              >
                {json.Home.calendarioInicio}{" "}
                <BsCalendar3 className="mt-[4px] text-[#b4a692]" />
              </span>
            </div>
            <div className="w-[22%] h-[40px] bg-white ml-4 rounded-md cursor-pointer ">
              <span className="text-[#736e6a] font-apollo text-xl flex flex-row justify-center gap-2 mt-1 text-center items-center">
                {json.Home.calendarioFin}{" "}
                <BsCalendar3 className="mt-[4px] text-[#b4a692]" />
              </span>
            </div>
            <div className="w-[18%] h-[40px] bg-white ml-4 rounded-md cursor-pointer ">
              <span className="text-[#736e6a] font-apollo text-xl flex flex-row justify-center gap-2 mt-1 text-center items-center">
                {json.Home.calendarioPersonas}{" "}
                <FaUsers className="mt-[4px] text-[#b4a692]" />
              </span>
            </div>
            <button className="w-[22%] h-[40px] bg-[#b4a692] ml-4 font-apollo  rounded-md cursor-pointer text-black text-xl">
              CHECK NOW
            </button>
          </div>
          <div className={`mt-4 ${!show ? "hidden" : "block"}`}>
          <Calendario
            inicio={inicio}
            fin={fin}
            setInicio={setInicio}
            setFin={setFin}
            setShow={setShow}
          />
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
