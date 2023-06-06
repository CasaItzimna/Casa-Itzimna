import Image from "next/image";
import spa from "./spa.png";

import flor from "./flor.png";
import serpiente from "../../../assets/serpiente.png";
import React from "react";

function Experience() {
  return (
    <div className="w-full h-[400px] relative ">
      <div className="absolute h-full w-full flex flex-row justify-center items-center z-10">
        <div className="w-[500px] flex flex-col justify-center mr-4">
          <Image src={spa} alt="spa" className="w-full h-full " />
        </div>

        <div className="w-[25%] h-full flex flex-col justify-center items-end ">
          <div className="w-full  flex flex-col  items-end">
            <h3 className="text-3xl  font-cinzelBold text-white text-right ">
              EXPERIENCE
            </h3>
            
            <div className="w-[218px] h-[20px] flex flex-row relative mb-8 ">
              <Image
                src={flor}
                alt="flor"
                className="w-[20px] h-[20px] absolute -top-2 "
              />
              <div className="bg-[#31302c] w-[200px] h-[2px] absolute right-0"></div>
            </div>
          </div>
          <p className="text-right font-ethereal w-[90%] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <button className="rounded-[4px] bg-[#31302c] text-white w-[150px] h-[37px] mt-8 font-apollo ">
            DISCOVER
          </button>
        </div>
      </div>
      <div className="w-full h-full flex flex-row">
        <div className="w-1/3 h-full bg-[#31302c]"></div>
        <div className="w-2/3 h-full bg-[#b4a692]"></div>
      </div>
    </div>
  );
}

export default Experience;
