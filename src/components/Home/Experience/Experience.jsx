import Image from "next/image";
import spa from "./spa.png";

import flor from "./flor.png";
import florder from "../../../assets/flor.png";
import serpiente from "../../../assets/serpiente.png";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import florizq from "../Testimonials/florizq.png";

function Experience({json}) {
/*   const [isLargerThanMd, setIsLargerThanMd] = useState(window.innerWidth > 768)
 */
  return (
    <div className="w-full h-[700px] lg:h-[400px] flex flex-row justify-center relative  ">
      <div className="absolute h-full w-full  flex flex-col lg:flex-row justify-center  items-center z-0">
        <div className="lg:w-1/2 flex flex-row justify-center">

        
        <div className="sm-w-[500px] lg:w-[500px] xl:w-[550px]  flex flex-col justify-center  ">
          

          <Image src={spa} alt="spa" className="w-full h-full object-cover " />
          
        </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-row justify-start md:justify-center lg:justify-start">

        <div className="w-full lg:w-[90%]  xl:w-[25%] h-full flex flex-col justify-start lg:justify-center items-center lg:items-end lg:mr-4 xl:mr-0 mt-4 lg:mt-0 xl:pr-10">
          <div className="w-full md:w-[600px] lg:w-full  flex flex-col items-center lg:items-end">
            <h3 className="text-[30px] md:text-[40px]   font-cinzelBold lg:text-white text-center lg:text-right ">
            {json.Experience.title}
            </h3>
            
            <div className="w-[260px] h-[20px] hidden lg:flex flex-row relative  ">
              <Image
                src={flor}
                alt="flor"
                className="w-[20px] h-[20px] absolute  -top-[9px] "
              />
              <div className="bg-[#31302c] w-[250px] h-[2px] absolute right-0"></div>
            </div>
            <div className="w-full flex flex-col items-center">

      <div className="lg:hidden w-[80%] md:w-[440px] h-[50px] flex flex-row  relative mt-3">
        <Image
          src={florizq}
          alt="flor"
          className="w-[20px] h-[20px] absolute left-0 -top-2"
          />
        <div className="bg-[#d3cbc0] w-[430px] h-[2px]"></div>
        <Image
          src={florder}
          alt="flor"
          className="w-[20px] h-[20px] absolute right-0 -top-2"
          />
      </div>
          </div>
          </div>
          <p
      className="text-xl font-ethereal text-justify lg:hidden w-[350px] md:w-[600px] lg:w-[480px] tracking-[4px] lg:text-white"
      
    >
          {json.Experience.text}
          </p> 
          <p
      className="text-xl font-ethereal hidden lg:flex w-[480px] tracking-[4px] lg:text-white"
      style={{
        textAlign: 'right', // Justificar al centro por defecto
        textAlignLast: 'right', // Justificar a la derecha por defecto
      }}
    >
          {json.Experience.text}
          </p>  
          <Link href='/Experience'>
          <button className="rounded-[4px] bg-[#31302c] text-white w-[200px] h-[45px] text-xl tracking-[4px] mt-8 font-apollo ">
            
          {json.Experience.buttonText}
         
          </button>
          </Link>
        </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row">
        <div className="hidden lg:flex w-2/5 h-full bg-[#31302c]"></div>
        <div className="hidden lg:flex w-2/3 h-full bg-[#d3cbc0]"></div>
      </div>
    </div>
  );
}

export default Experience;
