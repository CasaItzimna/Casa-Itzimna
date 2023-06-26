import Image from "next/image";
import spa from "./spa.png";

import flor from "./flor.png";
import serpiente from "../../../assets/serpiente.png";
import React from "react";
import Link from "next/link";

function Experience({json}) {
  return (
    <div className="w-full h-[800px] lg:h-[400px] relative  ">
      <div className="absolute h-full w-full flex flex-col lg:flex-row justify-center  items-center z-10">
        <div className="sm-w-[500px] lg:w-[550px] flex flex-col justify-center ">
          

          <Image src={spa} alt="spa" className="w-full h-full " />
          
        </div>

        <div className="w-[25%] h-full flex flex-col justify-start lg:justify-center items-center lg:items-end mt-4 lg:mt-0 ">
          <div className="w-full  flex flex-col items-center lg:items-end">
            <h3 className="text-[40px]  font-cinzelBold lg:text-white text-center lg:text-right ">
            {json.Experience.title}
            </h3>
            
            <div className="w-[218px] h-[20px] flex flex-row relative  ">
              <Image
                src={flor}
                alt="flor"
                className="w-[20px] h-[20px] absolute  -top-2 "
              />
              <div className="bg-[#31302c] w-[200px] h-[2px] absolute right-0"></div>
            </div>
          </div>
          <p className="text-center lg:text-right text-xl font-ethereal w-[350px] lg:w-[480px] tracking-[4px] lg:text-white">
          {json.Experience.text}
          </p>
          <Link href='/Experience'>
          <button className="rounded-[4px] bg-[#31302c] text-white w-[200px] h-[45px] text-xl tracking-[4px] mt-8 font-apollo ">
          {json.Experience.buttonText}
          </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full flex flex-row">
        <div className="hidden lg:flex w-2/5 h-full bg-[#31302c]"></div>
        <div className="hidden lg:flex w-2/3 h-full bg-[#b4a692]"></div>
      </div>
    </div>
  );
}

export default Experience;
