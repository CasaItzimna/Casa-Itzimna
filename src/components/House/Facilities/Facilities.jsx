import Image from "next/image";
import React from "react";
import flor from "../../../assets/flor.png";
import foto1 from "./foto1.png";
import foto2 from "./foto2.png";
import foto3 from "./foto3.png";
import { useState } from "react";
import Link from "next/link";
import pool from './icons/pool.png'
import games from './icons/games.png'
import fridge from './icons/fridge.png'
import kitchen from './icons/kitchen.png'
import parking from './icons/parking.png'
import speakers from './icons/speakers.png'
import tv from './icons/tv.png'
import wifi from './icons/wifi.png'
import check from './icons/check.png'
 
function Facilities({json}) {

  const [opcion, setOpcion] = useState('opcion1')
  console.log(opcion)
  
  return (
    <div className="h-full  w-full  flex flex-col items-center  relative z-20 ">
                      <div className="h-[200px] w-full  bg-gradient-to-t from-white via-white to-transparent z-0 overflow-y-hidden absolute -top-48 "></div>

        <div className="w-full flex flex-row justify-center z-20 ">
      <div className=" w-[90%] lg:w-full h-full flex flex-col-reverse lg:flex-row  gap-8   ">
        <div className="w-full lg:w-1/2 flex flex-row justify-center xl:justify-end ">

        
        <div className="w-[90%] xl:w-[50%] h-full flex flex-col  ">
            <div className="font-PlayfairDisplay text-[16px] text-justify tracking-wider">
                {json.Facilities.texto1}
            </div>
            <div className="w-full flex flex-row justify-center lg:justify-start">
                <ul className="list-disc mt-4 mb-4 pl-8">
                    <li className="font-PlayfairDisplay text-lg tracking-wider">{json.Facilities.list1}</li>
                    <li className="font-PlayfairDisplay text-lg tracking-wider">{json.Facilities.list2}</li>
                    <li className="font-PlayfairDisplay text-lg tracking-wider">{json.Facilities.list3}</li>
                    <li className="font-PlayfairDisplay text-lg tracking-wider">{json.Facilities.list4}</li>
                </ul>
            </div>
            <div className="">
                <h2 className="text-2xl font-apollo mt-4 tracking-[10px] underline text-center lg:text-start">{json.Facilities.title}</h2>
            </div>
            <div className="w-full flex flex-row gap-8 mt-6 mb-8 ">
                <div className="w-full flex flex-col gap-3">
                    <div className=" w-full flex flex-row font-Geometrica h-[35px] items-center border-[1px] border-[#b4a692] ">
                      <div  className="w-[50px] h-full grid grid-cols-1 place-items-center bg-[#b4a692]">
                      <Image src={pool} alt="pool" className="w-[30px] h-[30px]" />
                      </div>
                      <span className="flex flex-row w-full justify-center text-center text-sm  font-bold">{json.Facilities.facility1}</span>
                     </div>
                    <div className=" w-full flex flex-row font-Geometrica h-[35px] items-center border-[1px] border-[#b4a692] ">
                      <div  className="w-[50px] h-full grid grid-cols-1 place-items-center bg-[#b4a692]">
                      <Image src={parking} alt="parking lot" className="w-[25px] h-[25px]" />
                      </div>
                      <span className="flex flex-row w-full justify-center text-center text-sm font-bold">{json.Facilities.facility2}</span>
                     </div>
                    <div className=" w-full flex flex-row font-Geometrica h-[35px] items-center border-[1px] border-[#b4a692] ">
                      <div  className="w-[50px] h-full grid grid-cols-1 place-items-center bg-[#b4a692]">
                      <Image src={fridge} alt="fridge" className="w-[15px] h-[25px]" />
                      </div>
                      <span className="flex flex-row w-full justify-center text-center text-sm font-bold">{json.Facilities.facility3}</span>
                     </div>
                    <div className=" w-full flex flex-row font-Geometrica h-[35px] items-center border-[1px] border-[#b4a692] ">
                      <div className="w-[50px] h-full grid grid-cols-1 place-items-center bg-[#b4a692]">
                      <Image src={games} alt="games" className="w-[28px] h-[25px]" />
                      </div>
                      <span className="flex flex-row w-full justify-center text-center text-sm font-bold">{json.Facilities.facility4}</span>
                     </div>
                </div>
                <div className="w-full flex flex-col gap-3">
                    <div className=" w-full flex flex-row font-Geometrica h-[35px] items-center border-[1px] border-[#b4a692] ">
                      <div  className="w-[50px] h-full grid grid-cols-1 place-items-center bg-[#b4a692]">
                      <Image src={wifi} alt="wifi" className="w-[30px] h-[22px]" />
                      </div>
                      <span className="flex flex-row w-full justify-center text-center text-sm font-bold">{json.Facilities.facility5}</span>
                     </div>
                    <div className=" w-full flex flex-row font-Geometrica h-[35px] items-center border-[1px] border-[#b4a692] ">
                      <div  className="w-[50px] h-full grid grid-cols-1 place-items-center bg-[#b4a692]">
                      <Image src={tv} alt="tv" className="w-[30px] h-[25px]" />
                      </div>
                      <span className="flex flex-row w-full justify-center text-center text-sm font-bold">{json.Facilities.facility6}</span>
                     </div>
                    <div className=" w-full flex flex-row font-Geometrica h-[35px] items-center border-[1px] border-[#b4a692] ">
                      <div  className="w-[50px] h-full grid grid-cols-1 place-items-center bg-[#b4a692]">
                      <Image src={kitchen} alt="kitchen" className="w-[25px] h-[25px]" />
                      </div>
                      <span className="flex flex-row w-full justify-center text-center text-sm font-bold">{json.Facilities.facility7}</span>
                     </div>
                    <div className=" w-full flex flex-row font-Geometrica h-[35px] items-center border-[1px] border-[#b4a692] ">
                      <div  className="w-[50px] h-full grid grid-cols-1 place-items-center bg-[#b4a692]">
                      <Image src={speakers} alt="speakers" className="w-[15px] h-[22px]" />
                      </div>
                      <span className="flex flex-row w-full justify-center text-center text-sm font-bold">{json.Facilities.facility8}</span>
                     </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center h-full border-[1px] border-[#b4a692] rounded-[7px]">
                <h3 className="text-lg tracking-[1px] px-4 py-1">{json.Facilities.termstitle}</h3>
            </div>
            <div>
              <div className="w-full flex flex-row justify-center lg:justify-start">
                <h3 className="text-3xl font-apollo mt-8 mb-4 tracking-[8px]">{json.Facilities.checkin}</h3>
              </div>
                <ul className="flex flex-col items-center lg:items-start">
                <li className="flex flex-row text-[16px] tracking-[2px]  font-PlayfairDisplay"><Image src={check} alt="check" className=" w-[23px] h-[15px] mr-4 "/>{json.Facilities.checkinText1}</li>
                <li className="flex flex-row text-[16px] tracking-[2px] mt-4 font-PlayfairDisplay"><Image src={check} alt="check" className=" w-[23px] h-[15px] mr-4 "/>{json.Facilities.checkinText2}</li>
                </ul>
            </div>
            <div>
            <div className="w-full flex flex-row justify-center lg:justify-start ">
                <h3 className="text-3xl font-apollo mt-8 mb-4 tracking-[8px]">{json.Facilities.checkout}</h3>
                </div>
                <ul className="flex flex-col items-center lg:items-start">
                    <li className="flex flex-row text-[16px] tracking-[2px] mt-4 font-PlayfairDisplay"><Image src={check} alt="check" className=" w-[23px] h-[15px] mr-4 "/>{json.Facilities.checkoutText1}</li>
                    <li className="flex flex-row text-[16px] tracking-[2px] mt-4 font-PlayfairDisplay"><Image src={check} alt="check" className=" w-[23px] h-[15px] mr-4 "/>{json.Facilities.checkoutText2}</li>
                </ul>
            </div>
        </div> 
        </div>
        
        <div className=" w-full lg:w-1/2">

        <div className="w-full   h-full flex flex-col justify-center lg:justify-start  ">
          <div className="w-full flex flex-row justify-center xl:justify-start items-center ">

            <div className="w-[90%] xl:w-1/2 flex flex-col justify-center md:justify-end xl:justify-start">

          <div className=" bg-white h-[350px] w-full mb-2 shadow-2xl ">
            <Image
              alt="1"
              src={foto1}
              className="p-2 w-full h-full object-cover "
              />
          </div>
          <div className="flex flex-row w-full h-full gap-4 ">
            <div className="bg-white w-full h-[170px] shadow-2xl ">
              <Image
                src={foto2}
                alt="sala"
                className="w-full h-full p-2 object-cover "
                />
            </div>
            <div className="bg-white w-full h-[170px] shadow-2xl">
              <Image
                src={foto3}
                alt="desayuno"
                className="w-full h-full p-2 object-cover "
                />
            </div>
                </div>
          </div>
                </div>
          <div className="mt-4 w-full lg:w-1/2 flex flex-row justify-center lg:justify-start">
            <p className="w-[90%] font-PlayfairDisplay font-[700] text-lg tracking-[4px] text-justify">{json.Facilities.exploreText}</p>
          </div>
          <div className="w-full flex flex-row justify-center xl:justify-start">

          <button className="font-Geometrica bg-[#b4a692] w-[150px] h-[35px] rounded-[7px] text-xl px-4 mt-4">
          {json.Facilities.galleryButton}
          </button>
          </div>
        </div>
        </div>

      </div>
      </div>
    </div>
  );
}

export default Facilities;
