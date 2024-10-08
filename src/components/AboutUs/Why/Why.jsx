import Image from "next/image";
import React from "react";
import foto from "./why.jpg"; 
import flor from "./flor.png";
import cafe from './cafe.png'
import blanca from './blanca.png'
import { AiFillDownCircle, AiFillRightCircle } from "react-icons/ai";
import { useState } from "react";
import florizq from "../../Home/Testimonials/florizq.png";
import { AppContext } from "@/context/StateContext";

function Why({ json }) {

  const {idioma} = AppContext()

  const [pregunta1, setPregunta1] = useState(true)
  const [pregunta2, setPregunta2] = useState(false)
  const [pregunta3, setPregunta3] = useState(false)

  const handleClickButton1 = () => {

  }

  return (
    <div className="w-full h-full lg:h-[700px] flex flex-col lg:flex-row justify-start xl:justify-center  gap-8 ">
      <div className="w-full lg:w-[50%] xl:w-[40%] 2xl:w-[570px] flex flex-row lg:justify-center xl:justify-start">

      <div className="w-full lg:w-[80%] xl:w-full h-full flex flex-col justify-center  items-center lg:items-start  mt-8 lg:mt-0">
        <Image
          src={foto}
          alt="foto alberca"
          className="w-[90%] lg:w-full 2xl:w-[500px] h-[200px] md:h-[350px] object-cover rounded-[18px] overflow-hidden shadow-[12.0px_12.0px_8.0px_#d3cbc0] shadow-[#d3cbc0]/50 "
          />
      </div>
          </div>
      <div className=" w-full lg:w-[50%] xl:w-[40%] 2xl:w-[25%] flex flex-col justify-center ">
        <div className="flex flex-col w-full ">
          <h3 className="text-[30px] lg:text-[40px] font-cinzelBold text-center lg:text-start mt-4 lg:mt-0 ">{json.Why.title}</h3>
          <div className="w-full flex flex-col items-center">

      <div className="lg:hidden w-[80%] md:w-[440px] h-[50px] flex flex-row  relative mt-3 ">
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
          {
            idioma == "ingles"?
            <div className="hidden w-[380px] h-full lg:flex flex-row relative ">
            <div className="bg-[#d3cbc0] w-[370px] h-[2px]"></div>
            <Image
              src={flor} 
              alt="flor"
              className="w-[20px] h-[20px] absolute right-0 -top-2"
            />
          </div>
          :
          <div className="hidden w-[510px] h-full lg:flex flex-row relative ">
            <div className="bg-[#d3cbc0] w-[500px] h-[2px]"></div>
            <Image
              src={flor} 
              alt="flor"
              className="w-[20px] h-[20px] absolute right-0 -top-2"
            />
          </div>
          }
          <div className="flex flex-row justify-center lg:justify-start  w-full">
            
          <div className="flex flex-col h-full w-[90%] lg:w-[90%] 2xl:w-full items-center md:items-start md:mb-8 lg:mt-8">

          <h3 className="text-xl md:text-3xl  font-apollo tracking-[3px] flex flex-row  gap-2 md:gap-4 items-center  cursor-pointer"
          onClick={()=>{setPregunta1(!pregunta1); setPregunta2(false); setPregunta3(false)}}
          >
            {
              pregunta1?
          <Image src={cafe} alt="boton cafe"  className="w-[50px] md:w-[40px] xl:w-[40px]"/>
          :
          <Image src={blanca} alt="boton blanco"  className="w-[50px]"/>
            }
          
            
            {json.Why.question1}
          </h3>
          <div className={`${pregunta1 == true? 'hidden': null } h-[2px]  w-full bg-[#aea08c] mt-5 mb-4`}></div>
          <div className="w-full flex flex-row justify-center items-center mb-4 lg:mb-0">

          <p className={`w-[90%]  md:w-full font-ethereal text-lg tracking-[1px] text-justify mt-4 lg:mt-2  ${pregunta1 == false? 'hidden': null }`}>
            {json.Why.answer1}
          </p>
          </div>
          <div className={`${pregunta1 == false? 'hidden': null } h-[2px] w-full bg-[#aea08c] mt-5 mb-4`}></div>
          <h3 className="text-xl md:text-3xl font-apollo tracking-[3px] flex flex-row  gap-2 md:gap-4 items-center  cursor-pointer"
         onClick={()=>{setPregunta2(!pregunta2); setPregunta1(false); setPregunta3(false)}}
          >
          {
              pregunta2?
          <Image src={cafe} alt="boton cafe"  className="w-[50px] md:w-[40px] xl:w-[40px]"/>
          :
          <Image src={blanca} alt="boton blanco"  className="w-[50px]"/>
            }
            {json.Why.question2}
          </h3>
          <div className={`${pregunta2 == true? 'hidden': null } h-[2px]  w-full bg-[#aea08c] mt-5 mb-4`}></div>
          <div className="w-full flex flex-row justify-center items-center mb-4 lg:mb-0 lg:mt-2">
          <p className={`w-[90%] md:w-full font-ethereal text-lg tracking-[1px] text-justify mt-4 xl:mt-0 ${pregunta2 == false? 'hidden': null }`}>
            {json.Why.answer2}
          </p>
          </div>
          <div className={`${pregunta2 == false? 'hidden': null } h-[2px]  w-full bg-[#aea08c] mt-5 mb-4`}></div>
          <h3 className="text-xl md:text-3xl font-apollo tracking-[3px] flex flex-row  gap-2 md:gap-4 items-center  cursor-pointer"
       onClick={()=>{setPregunta3(!pregunta3); setPregunta2(false); setPregunta1(false)}}
          >
          {
              pregunta3?
          <Image src={cafe} alt="boton cafe"  className="w-[50px] md:w-[40px] xl:w-[40px]"/>
          :
          <Image src={blanca} alt="boton blanco"  className="w-[50px] xl:w-[50px]"/>
            }
            {json.Why.question3}
          </h3>
          <div className="w-full flex flex-row justify-center  items-center mb-4 lg:mb-0 lg:mt-2">
          <p className={`w-[90%] md:w-full font-ethereal text-lg tracking-[1px] text-justify mt-4 xl:mt-0  ${pregunta3 == false? 'hidden': null }`}>
            {json.Why.answer3}
          </p>
          </div>
          </div>
        </div>
          </div>
      </div>
    </div>
  );
}

export default Why;
