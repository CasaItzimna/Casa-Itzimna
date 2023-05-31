import React from "react";
import foto1 from "../../../assets/Home/AboutUs/recamara.png";
import foto2 from "../../../assets/Home/AboutUs/2.png";
import foto3 from "../../../assets/Home/AboutUs/3.png";
import flor from "../../../assets/flor.png";
import serpiente from "../../../assets/serpiente.png";
import Image from "next/image";

function AboutUs() {
  return (
    <div className="w-full h-full grid grid-cols-1 place-content-center bg-gradient-to-t from-white via-white to-transparent z-30 overflow-y-hidden relative ">
      <div className="absolute w-4/6 h-full right-0 -bottom-[30%]  ">
        <Image src={serpiente} alt="serpiente" className="w-full h-full" />
      </div>
      <div className="w-full h-full flex flex-row justify-center  ">
        <div className="w-[25%] h-full flex flex-col text-left">
          <div className="w-full flex flex-col">
            <h3 className="text-3xl  font-cinzelBold text-[#31302c]  ">
              ABOUT US
            </h3>
            <div className="w-[190px] h-full flex flex-row relative mb-8">
              <div className="bg-[#b4a692] w-[170px] h-[2px]"></div>
              <Image
                src={flor}
                alt="flor"
                className="w-[20px] h-[20px] absolute right-0 -top-2"
              />
            </div>
          </div>
          <p className="text-justify font-ethereal w-[90%] text-[#31302c]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <button className="rounded-[4px] bg-[#b4a692] w-[150px] h-[37px] mt-8 font-apollo">
            READ MORE
          </button>
        </div>
        <div className="w-[500px] h-[410px] relative pr-10">
          <div className="absolute top-0 right-0 bg-white h-[250px] w-[300px]">
            <Image
              src={foto1}
              alt="recamara"
              className="w-full h-full p-2 object-cover shadow-2xl"
            />
          </div>
          <div className="absolute top-[15%] left-0 bg-white h-[300px] w-[250px]">
            <Image
              src={foto2}
              alt="hamaca"
              className="w-full h-full p-2 object-cover shadow-2xl"
            />
          </div>
          <div className="absolute bottom-0 right-4 bg-white w-[280px] h-[200px]">
            <Image
              src={foto3}
              alt="alberca"
              className="w-full h-full p-2 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
