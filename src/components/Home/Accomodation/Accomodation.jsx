import Image from "next/image";
import React from "react";
import flor from "../../../assets/flor.png";
import foto1 from "./UNIQUE-SPACES.jpg";
import foto2 from "./LUXURE-COMFORT.jpg";
import foto3 from "./GRACIOUS-HOSPITALITY.jpg";
import sol from "./sol.png";
import { useState } from "react";
import Link from "next/link";
import florizq from "../Testimonials/florizq.png";

function Accomodation({json}) {

  const [opcion, setOpcion] = useState('opcion1')
  console.log(opcion)
  
  return (
    <div className="h-full w-full  relative mt-8">
        <div className="absolute -z-10 left-0 top-[10%]">
            <Image src={sol} alt="sol" className="w-[300px]" />
        </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full h-[1000px] lg:h-[600px] xl:gap-4 2xl:gap-0">
        <div className="w-full lg:w-1/2 xl:w-[40%] 2xl:w-full h-full flex flex-row justify-center xl:justify-start 2xl:justify-end items-center ">
            <div className="w-[90%] 2xl:w-[570px] flex flex-col justify-center xl:w-[500px] ">

          <h3 className="text-[30px] lg:text-[40px] font-cinzelBold text-center lg:text-left ">{json.Accomodation.title}</h3>
          <div className="w-full flex flex-col items-center">

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
          <div className="w-[350px] h-full hidden lg:flex flex-row relative mb-8">
            <div className="bg-[#d3cbc0] w-[340px] h-[2px]"></div>
            <Image
              src={flor}
              alt="flor"
              className="w-[20px] h-[20px] absolute  right-0 -top-2"
              />
          </div>
          
          

          <div className="w-full flex flex-row justify-center lg:justify-start">

          <div className="flex flex-row justify-between w-[90%] md:w-[600px] lg:w-[95%] h-full font-ethereal uppercase text-[10px] ">
            <h4 className="cursor-pointer md:text-[14px]" onClick={()=> setOpcion('opcion1')}>{json.Accomodation.option1}</h4>
            <h4 className="cursor-pointer  md:text-[14px]" onClick={()=> setOpcion('opcion2')}>{json.Accomodation.option2}</h4>
            <h4 className="cursor-pointer  md:text-[14px]" onClick={()=> setOpcion('opcion3')}>{json.Accomodation.option3}</h4>
          </div>
         
          </div>
          <div className=" lg:w-[95%] h-full flex flex-row relative px-4 lg:px-0  mb-4">
            <div className="w-full  flex flex-row justify-center">

            
            <div className="bg-[#d3cbc0] w-full md:w-[95%] h-[3px]"></div>
            <div  className={`absolute md-[95%] bg-[#31302c]  h-[3px] ${
      opcion === 'opcion1'
        ? 'left-[2.5%] md:left-[4%] lg:left-0 w-[20%]  lg:w-[20%]'
        : opcion === 'opcion2'
        ? 'left-[30%] md:left-[32%] lg:left-[30%] w-[30%]'
        : opcion === 'opcion3'
        ? 'right-[2.5%]  md:right-[4%] lg:right-0 w-[20%]  lg:w-[20%]'
        : ''
    }`}></div>
    </div>
          </div>
          <div className="w-full  flex flex-row justify-center xl:justify-start  text-justify">
            <div className="flex flex-col items-center 2xl:items-start  h-full w-full">

            <div className="w-[90%] 2xl:w-[90%]  lg:w-full h-[180px] md:h-[100px] lg:h-[170px] md:text-lg flex flex-col justify-center">
              
            <p className={`${opcion === "opcion1"? "flex" : "hidden"}  font-PlayfairDisplay tracking-[2px]`}>
              {json.Accomodation.text1}
            </p>
            <p className={`${opcion === "opcion2"? "flex" : "hidden"}  font-PlayfairDisplay tracking-[2px]`}>{json.Accomodation.text2}</p>
            <p className={`${opcion === "opcion3"? "flex" : "hidden"}  font-PlayfairDisplay tracking-[2px]`}>{json.Accomodation.text3}</p>
           
            </div>
            <div className="flex flex-row justify-center lg:justify-start w-full">

            <Link href='/Spaces'>
            <button className="rounded-[4px] bg-[#d3cbc0]  w-[200px] h-[45px] text-xl tracking-[4px] mt-8 font-apollo">
            {json.Accomodation.buttonText}
            </button>
            </Link>
            </div>
            </div>
              </div>
          </div>
        </div>

        
        <div className="xl:w-[40%] 2xl:w-full flex flex-row justify-center xl:justify-end 2xl:justify-start ">
        <div className="w-full px-4 xl:px-0 sm:w-[500px] xl:w-full 2xl:w-[560px]  h-full flex flex-col justify-center xl:justify-end   ">
           

          <div className=" bg-white h-[350px] w-full mb-2 shadow-2xl ">
          <div className="relative w-full h-full  overflow-hidden shadow-[12.0px_12.0px_8.0px_#d3cbc0] shadow-[#d3cbc0]/50">

            <Image
              alt="1"
              src={opcion == "opcion1"?
              foto1:
              opcion == "opcion2"?
              foto2:
              opcion == "opcion3"?
              foto3:
              null
              }
              className="p-2 w-full h-full object-cover "
              />
              </div>
          </div>
          <div className="flex flex-row w-full  gap-4 ">

            <div className="bg-white w-full h-[170px] shadow-2xl ">
            <div className="relative w-full h-full  overflow-hidden shadow-[12.0px_12.0px_8.0px_#d3cbc0] shadow-[#d3cbc0]/50">
              <Image
                 src={opcion == "opcion1"?
                 foto2:
                 opcion == "opcion2"?
                 foto1:
                 opcion == "opcion3"?
                 foto2:
                 null
                 }
                alt="sala"
                className="w-full h-full p-2 object-cover "
                />
            </div>
            </div>
            <div className="bg-white w-full h-[170px] shadow-2xl">
            <div className="relative w-full h-full  overflow-hidden shadow-[12.0px_12.0px_8.0px_#d3cbc0] shadow-[#d3cbc0]/50">

              <Image
                src={opcion == "opcion1"?
                foto3:
                opcion == "opcion2"?
                foto3:
                opcion == "opcion3"?
                foto1:
                null
                }
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

export default Accomodation;
