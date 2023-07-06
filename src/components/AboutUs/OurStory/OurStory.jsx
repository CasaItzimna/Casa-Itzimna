import Image from "next/image";
import React from "react";
import flor from "../../../assets/flor.png";
import foto1 from "./foto1.png";
import foto2 from "./foto2.png";
import foto3 from "./foto3.png";
import cabeza from "./cabeza.png";
import florizq from "../../Home/Testimonials/florizq.png";
import { useState } from "react";
import Link from "next/link"; 

function OurStory({json}) {

  const [opcion, setOpcion] = useState('opcion1')
  console.log(opcion)
  
  return (
    <div className="h-[1000px]  lg:full w-full relative z-20">
        <div className="absolute left-0 top-[10%] -z-30">
            <Image src={cabeza} alt="cabeza" className="w-[300px]" />
        </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center w-full h-[1000px] lg:h-[700px] ">
        <div className="w-full lg:w-full xl:w-[25%] h-full md:h-[25%] lg:h-[500px] flex flex-col justify-center md:justify-end lg:justify-center ">
            <div className="flex flex-col justify-center w-full ">

          <h3 className="text-[30px] lg:text-[40px] font-cinzelBold text-center lg:text-left   ">{json.OurStory.title}</h3>
          <div className="w-full flex flex-col items-center ">

      <div className="lg:hidden w-[80%] md:w-[440px] h-[50px] flex flex-row  relative mt-3">
        <Image
          src={florizq}
          alt="flor"
          className="w-[20px] h-[20px] absolute left-0 -top-2"
          />
        <div className="bg-[#b4a692] w-[430px] h-[2px]"></div>
        <Image
          src={flor}
          alt="flor"
          className="w-[20px] h-[20px] absolute right-0 -top-2"
          />
      </div>
          </div>
          <div className="hidden w-[270px]  h-full lg:flex flex-row relative mb-8">
            <div className="bg-[#b4a692] w-[260px] h-[2px]"></div>
            <Image
              src={flor}
              alt="flor"
              className="w-[20px] h-[20px] absolute right-0 -top-2"
              />
          </div>
          
          <div className="w-full flex flex-row justify-center lg:justify-start">

          <div className="flex flex-row  justify-around w-[90%] h-full font-ethereal uppercase text-[11px] ">
            <h4 className="cursor-pointer" onClick={()=> setOpcion('opcion1')}>{json.OurStory.option1}</h4>
            <h4 className="cursor-pointer" onClick={()=> setOpcion('opcion2')}>{json.OurStory.option2}</h4>
            <h4 className="cursor-pointer" onClick={()=> setOpcion('opcion3')}>{json.OurStory.option3}</h4>
          </div>
          </div>
          <div className="w-full flex flex-row justify-center lg:justify-start">
          <div className="w-[90%] h-full flex flex-row relative mb-4">
            <div className="bg-[#b4a692] w-full h-[3px]"></div>
            <div  className={`absolute bg-[#31302c] w-[30%] h-[3px] ${
              opcion === 'opcion1'
              ? 'left-0'
              : opcion === 'opcion2'
              ? 'left-[33%]'
              : opcion === 'opcion3'
              ? 'right-0'
              : ''
            }`}></div>
          
            </div>
            </div>
          <div className="flex flex-row justify-center lg:justify-start ">
            <p className="text-center lg:text-justify font-ethereal w-[90%] text-xl ">
            {json.OurStory.text}
            </p>
            
              </div>
          </div>
        </div>
        <div className=" flex flex-row justify-center ">
          
        <div className="w-[350px] md:w-[400px] lg:w-[500px] h-full flex flex-col justify-center lg:justify-center  ">
            <div className="w-full flex flex-col justify-center md:justify-end ">

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
        </div>
      </div>
    </div>
  );
}

export default OurStory;