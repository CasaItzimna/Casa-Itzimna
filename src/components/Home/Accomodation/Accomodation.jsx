import Image from "next/image";
import React from "react";
import flor from "../../../assets/flor.png";
import foto1 from "./foto1.png";
import foto2 from "./foto2.png";
import foto3 from "./foto3.png";
import sol from "./sol.png";
import { useState } from "react";
import Link from "next/link";

function Accomodation({json}) {

  const [opcion, setOpcion] = useState('opcion1')
  console.log(opcion)
  
  return (
    <div className="h-full w-full relative">
        <div className="absolute left-0 top-[10%]">
            <Image src={sol} alt="sol" className="w-[300px]" />
        </div>
      <div className="flex flex-row justify-center w-full h-[600px] ">
        <div className="w-[25%] h-full flex flex-col justify-center ">
            <div className="flex flex-col justify-center w-full">

          <h3 className="text-3xl font-cinzelBold ">{json.Accomodation.title}</h3>
          <div className="w-[270px] h-full flex flex-row relative mb-8">
            <div className="bg-[#b4a692] w-[260px] h-[2px]"></div>
            <Image
              src={flor}
              alt="flor"
              className="w-[20px] h-[20px] absolute right-0 -top-2"
              />
          </div>
          <div className="flex flex-row justify-between w-[90%] h-full font-ethereal uppercase text-[11px] ">
            <h4 className="cursor-pointer" onClick={()=> setOpcion('opcion1')}>{json.Accomodation.option1}</h4>
            <h4 className="cursor-pointer" onClick={()=> setOpcion('opcion2')}>{json.Accomodation.option2}</h4>
            <h4 className="cursor-pointer" onClick={()=> setOpcion('opcion3')}>{json.Accomodation.option3}</h4>
          </div>
          <div className="w-[90%] h-full flex flex-row relative mb-4">
            <div className="bg-[#b4a692] w-full h-[3px]"></div>
            <div  className={`absolute bg-[#31302c] w-[30%] h-[3px] ${
      opcion === 'opcion1'
        ? 'left-0'
        : opcion === 'opcion2'
        ? 'left-[30%]'
        : opcion === 'opcion3'
        ? 'right-0'
        : ''
    }`}></div>
          </div>
          <div>
            <p className="text-justify font-ethereal w-[90%] text-[17px] ">
            {json.Accomodation.text}
            </p>
            <Link href='/Spaces'>
            <button className="rounded-[4px] bg-[#b4a692] w-[150px] h-[37px] mt-8 font-apollo">
            {json.Accomodation.buttonText}
            </button>
            </Link>
              </div>
          </div>
        </div>
        <div className="w-[500px] h-full flex flex-col justify-center ">
            <div className="w-full flex flex-col justify-center">

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
  );
}

export default Accomodation;
