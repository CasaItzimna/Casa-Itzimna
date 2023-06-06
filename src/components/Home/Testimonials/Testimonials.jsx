import React from "react";
import comillas from "./comillas.png";
import comillasclaras from "./comillasclaras.png";
import starsolid from "./star-solid.png";
import florizq from "./florizq.png";
import Image from "next/image";
import flor from "../../../assets/flor.png";

function Testimonials() {
  return (
    <div className="w-full h-[800px] flex flex-col  text-center mt-4 ">
      <h3 className="font-apollo text-2xl">WHAT OUR CUSTOMERS SAY</h3>
      <h2 className="font-cinzelBold text-5xl">TESTIMONIALS</h2>
      <div className="w-full flex flex-col items-center">

      <div className="w-[440px] h-[70px] flex flex-row  relative mt-3">
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
      <div className="w-full h-full flex flex-row justify-center gap-8">
        <div className="relative w-[350px] h-[400px] border-8 rounded-[7px] border-[#b4a692]">
          <div className="absolute top-6 left-4 text-[#31302c] ">
            <Image src={comillas} alt="comillas" className="w-[60px]" />
          </div>
          <div className="absolute top-4 right-4 flex flex-row gap-1 ">
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
          </div>
          <div className=" absolute top-24 flex flex-col w-full h-full">
            <h3 className="text-[#31302c] text-2xl text-center px-8 font-apollo">
              EXCELENT SERVICE & AMMENITIES
            </h3>
            <p className="font-apollo text-justify px-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
        <div className="relative w-[350px] h-[400px] border-8 rounded-[7px] border-[#31302c]">
          <div className="absolute top-6 left-4 text-[#31302c] ">
            <Image src={comillasclaras} alt="comillas" className="w-[60px]" />
          </div>
          <div className="absolute top-4 right-4 flex flex-row gap-1 ">
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
          </div>
          <div className=" absolute top-24 flex flex-col w-full h-full">
            <h3 className="text-[#b4a692]v text-2xl text-center px-8 font-apollo">
              EXCELENT SERVICE & AMMENITIES
            </h3>
            <p className="font-apollo text-justify px-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
        <div className="relative w-[350px] h-[400px] border-8 rounded-[7px] border-[#b4a692]">
          <div className="absolute top-6 left-4 text-[#31302c] ">
            <Image src={comillas} alt="comillas" className="w-[60px]" />
          </div>
          <div className="absolute top-4 right-4 flex flex-row gap-1 ">
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
            <Image src={starsolid} alt="comillas" className="w-[20px]" />
          </div>
          <div className=" absolute top-24 flex flex-col w-full h-full">
            <h3 className="text-[#31302c] text-2xl text-center px-8 font-apollo">
              EXCELENT SERVICE & AMMENITIES
            </h3>
            <p className="font-apollo text-justify px-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
