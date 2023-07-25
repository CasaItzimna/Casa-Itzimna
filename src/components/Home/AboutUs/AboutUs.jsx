import React from "react";
import foto1 from "../../../assets/Home/AboutUs/recamara.png";
import foto2 from "../../../assets/Home/AboutUs/2.png";
import foto3 from "../../../assets/Home/AboutUs/3.png";
import flor from "../../../assets/flor.png";
import serpiente from "../../../assets/serpiente.png";
import Image from "next/image";
import Link from "next/link";
import florizq from "../Testimonials/florizq.png";
import { AppContext } from "@/context/StateContext";

function AboutUs({ json }) {

  const {showModalCalendar} = AppContext()
  console.log(showModalCalendar)

  return (
    /* TO-DO: arreglar el iphone SE */
    <div className="h-full  w-full  flex flex-col items-center  relative z-0 lg:mb-8 ">
    <div className={showModalCalendar === false?"h-[200px] w-full  bg-gradient-to-t from-white via-white to-transparent z-10 overflow-y-hidden absolute -top-48 ":"hidden"}></div>
<div className="absolute w-10/12 h-1/4 md:w-3/4 md:h-1/2 lg:w-1/2 xl:w-2/3 lg:h-full xl:h-[700px] right-0 bottom-[20%] md:bottom-[5%] lg:-bottom-[30%] xl:-bottom-[80%]  ">
          <Image src={serpiente} alt="serpiente" className="w-full h-full" />
        </div>
      <div className="w-full h-full max-w-[1920px]  overflow-y-hidden relative ">
        <div className="w-full h-full flex flex-col-reverse lg:flex-row  gap-0 ">
          <div className="w-full h-full flex flex-col justify-start lg:justify-center text-center lg:text-left ">
            <div className="w-full flex flex-row justify-center lg:justify-end">

            
            <div className="w-full md:w-[600px] lg:w-[500px] ">

           
            <h3 className="text-[30px] md:text-[40px]  font-cinzelBold text-[#31302c]  ">
              {json.About.title}
            </h3>
            <div className="w-[220px] hidden lg:flex flex-row relative mb-8">
              <div className="bg-[#b4a692] w-[200px] h-[2px]"></div>
              <Image
                src={flor}
                alt="flor"
                className="w-[20px] h-[20px] absolute right-0 -top-2"
              />
            </div>
            <div className="w-full flex flex-col items-center">

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
            <p className=" text-centerlg:text-justify font-ethereal text-xl px-8 lg:px-0 lg:w-[480px] text-[#31302c] tracking-[4px]">
              {json.About.text}
            </p>
            <Link href="/AboutUs">
              <button className="rounded-[4px] bg-[#b4a692] w-[200px] h-[45px] mt-8 font-apollo text-xl tracking-[4px] ">
                
                {json.About.buttonText}
               
              </button>
            </Link>
            </div>
            </div>
          </div>
          <div className="  w-full h-[400px] lg:h-full flex flex-col justify-center items-center">
            <div className="w-full h-full flex flex-row justify-center lg:justify-start items-center">
              <div className="w-[350px] md:w-[400px] lg:w-[500px] h-[400px]  relative   ">
                <div className=" absolute top-0 right-0 bg-white h-[200px] lg:h-[250px]  w-[250px] lg:w-[300px]">
                  <Image
                    src={foto1}
                    alt="recamara"
                    className="w-full h-full p-2 object-cover shadow-2xl"
                  />
                </div>
                <div className="absolute top-[15%] left-0 bg-white h-[250px] lg:h-[300px] w-[200px] lg:w-[250px]">
                  <Image
                    src={foto2}
                    alt="hamaca"
                    className="w-full h-full p-2 object-cover shadow-2xl"
                  />
                </div>
                <div className="absolute bottom-[16%] lg:bottom-0 right-4 bg-white w-[230px] lg:w-[280px] h-[150px] lg:h-[200px]">
                  <Image
                    src={foto3}
                    alt="alberca"
                    className="w-full h-full p-2 object-cover shadow-2xl"
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

export default AboutUs;
