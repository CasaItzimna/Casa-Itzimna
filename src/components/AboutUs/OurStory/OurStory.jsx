import Image from "next/image";
import React from "react";
import flor from "../../../assets/flor.png";
import foto1 from "./our-story-1.jpg";
import foto2 from "./our-story-2.jpg";
import foto3 from "./our-story-3.jpg";
import cabeza from "./cabeza.png";
import florizq from "../../Home/Testimonials/florizq.png";
import { useState } from "react";
import Link from "next/link"; 

function OurStory({json}) {

  const [opcion, setOpcion] = useState('opcion1')
  console.log(opcion)
  
  return (
    <div className="h-full lg:full w-full relative lg:mb-20 2xl:mb-0 z-20">
        <div className="hidden h-[200px] w-full  bg-gradient-to-t from-white via-white to-transparent z-0 overflow-y-hidden absolute -top-48 "></div>
      <div className="absolute left-0 top-[10%] -z-30">
            <Image src={cabeza} alt="cabeza" className="w-[300px]" />
        </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center w-full h-full 2xl:h-[700px]  ">
        <div className="w-full lg:w-[90%] xl:w-[40%] 2xl:w-[570px] h-full md:h-[25%] lg:h-full flex flex-col justify-center md:justify-end lg:justify-center xl:justify-start ">
          <div className="flex flex-row justify-center xl:justify-start 2xl:justify-end">

          
            <div className="h-full flex flex-col justify-center w-full lg:w-[80%] ">

          <h3 className="text-[30px] lg:text-[40px] font-cinzelBold text-center lg:text-left mt-8 lg:mt-0  ">{json.OurStory.title}</h3>
          <div className="w-full flex flex-col items-center ">

      <div className="lg:hidden w-[80%] md:w-[440px] h-[50px] flex flex-row  relative mt-3">
        <Image
          src={florizq}
          alt="flor"
          className="w-[20px] h-[20px] absolute left-0 -top-2"
          />
        <div className="bg-[#d3cbc0] w-[430px] h-[2px]"></div>
        <Image
          src={flor}
          alt="flor" 
          className="w-[20px] h-[20px] absolute right-0 -top-2"
          />
      </div>
          </div>
          <div className="hidden w-[270px]   lg:flex flex-row relative mb-8">
            <div className="bg-[#d3cbc0] w-[260px] h-[2px]"></div>
            <Image
              src={flor}
              alt="flor"
              className="w-[20px] h-[20px] absolute right-0 -top-2"
              />
          </div>
          
          <div className="w-full flex flex-row justify-center lg:justify-start">

          <div className="flex flex-row  justify-around w-[90%] h-full font-ethereal uppercase text-[11px] ">
            <h4 className="cursor-pointer md:text-[14px]" onClick={()=> setOpcion('opcion1')}>{json.OurStory.option1}</h4>
            <h4 className="cursor-pointer md:text-[14px]" onClick={()=> setOpcion('opcion2')}>{json.OurStory.option2}</h4>
            <h4 className="cursor-pointer md:text-[14px]" onClick={()=> setOpcion('opcion3')}>{json.OurStory.option3}</h4>
          </div>
          </div>
          <div className="w-full flex flex-row justify-center lg:justify-start">
          <div className="w-[90%] h-full flex flex-row relative mb-4">
            <div className="bg-[#d3cbc0] w-full h-[3px]"></div>
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
            <div className="w-full flex flex-col items-center 2xl:items-start">
          <div className="h-[350px] md:h-[200px] flex flex-row justify-center lg:justify-start  text-justify w-[90%] lg:w-full  ">

             
          <p className={`${opcion === "opcion1"? "flex" : "hidden"}  font-PlayfairDisplay tracking-[2px]`}>
              {json.OurStory.text1}
            </p>
            <p className={`${opcion === "opcion2"? "flex" : "hidden"}  font-PlayfairDisplay tracking-[2px]`}>{json.OurStory.text2}</p>
            <p className={`${opcion === "opcion3"? "flex" : "hidden"}  font-PlayfairDisplay tracking-[2px]`}>{json.OurStory.text3}</p>
           
            </div>
              </div>
              </div>
          </div>
        </div>
        <div className="xl:w-[40%] flex flex-row justify-center ">
          
        <div className="w-[350px] md:w-[400px] lg:w-[500px] xl:w-full 2xl:w-[570px] lg:px-4 h-full flex flex-col justify-center lg:justify-center xl:justify-start  ">
            <div className="w-full flex flex-col justify-center md:justify-end  ">

          <div className=" bg-white h-[350px] w-full mb-2 shadow-2xl ">
          <div className="relative w-full h-full  overflow-hidden shadow-[12.0px_12.0px_8.0px_#d3cbc0] shadow-[#d3cbc0]/50">
            <Image
              alt="1"
              src={foto1}
              className="p-2 w-full h-full object-cover "
              />
              </div>
          </div>
          <div className="flex flex-row w-full gap-4 ">
            <div className="bg-white w-full h-[170px] shadow-2xl ">
            <div className="relative w-full h-full  overflow-hidden shadow-[12.0px_12.0px_8.0px_#d3cbc0] shadow-[#d3cbc0]/50">
              <Image
                src={foto2}
                alt="sala"
                className="w-full h-full p-2 object-cover "
                />
                </div>
            </div>
            <div className="bg-white w-full h-[170px] shadow-2xl">
            <div className="relative w-full h-full  overflow-hidden shadow-[12.0px_12.0px_8.0px_#d3cbc0] shadow-[#d3cbc0]/50">
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
    </div>
  );
}

export default OurStory;
