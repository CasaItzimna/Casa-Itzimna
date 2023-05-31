import Image from "next/image";
import React from "react";
import slider1 from "../../../assets/Home/slider1.jpg";
import hero1 from "../../../assets/Home/hero3.png";
import { FaUsers } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import AboutUs from "../AboutUs/AboutUs";

function Hero() {
  return (
    <div className="w-full h-full flex flex-col relative">
      <Image
        src={hero1}
        alt="fondo"
        className="absolute w-full h-screen object-cover"
      />

      <div className="flex flex-col justify-center h-screen w-full text-center items-center text-white absolute z-20">
        <div className="">
          <h1 className="text-9xl font-cinzelRegular">Casa Itzimná</h1>
          <h2 className="text-6xl font-cinzelRegular">Hotel Boutique</h2>
        </div>

        <div className="flex flex-row  w-[58%] h-[65px] bg-white/40 mt-14 justify-center items-center rounded-md ">
          <div className="w-[22%] h-[40px] bg-white rounded-md cursor-pointer  ">
            <span className="text-[#736e6a] text-xl flex flex-row justify-center gap-2 mt-1 text-center items-center ">
              CHECK IN <BsCalendar3 className="mt-[4px] text-[#b4a692]" />
            </span>
          </div>
          <div className="w-[22%] h-[40px] bg-white ml-4 rounded-md cursor-pointer ">
            <span className="text-[#736e6a] text-xl flex flex-row justify-center gap-2 mt-1 text-center items-center">
              CHECK OUT <BsCalendar3 className="mt-[4px] text-[#b4a692]" />
            </span>
          </div>
          <div className="w-[18%] h-[40px] bg-white ml-4 rounded-md cursor-pointer ">
            <span className="text-[#736e6a] text-xl flex flex-row justify-center gap-2 mt-1 text-center items-center">
              GUESTS <FaUsers className="mt-[4px] text-[#b4a692]" />
            </span>
          </div>
          <button className="w-[22%] h-[40px] bg-[#b4a692] ml-4  rounded-md cursor-pointer text-black text-xl">
            CHECK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
