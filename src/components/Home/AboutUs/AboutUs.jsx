import React from "react";
import foto1 from "../../../assets/Home/AboutUs/recamara.png";
import foto2 from "../../../assets/Home/AboutUs/2.png";
import foto3 from "../../../assets/Home/AboutUs/3.png";
import flor from "../../../assets/flor.png";
import serpiente from "../../../assets/serpiente.png";
import Image from "next/image";
import Link from "next/link";

function AboutUs({ json }) {
  return (
    <div className="w-full h-full flex flex-col items-center bg-gradient-to-t from-white via-white to-transparent z-40 overflow-y-hidden relative">
        <div className="absolute w-1/2 h-full right-0 -bottom-[30%]  ">
          <Image src={serpiente} alt="serpiente" className="w-full h-full" />
        </div>
      <div className="w-full h-full max-w-[1920px]  overflow-y-hidden relative ">
        <div className="w-full h-full flex flex-row  gap-0 ">
          <div className="w-full h-full flex flex-col justify-center text-left ">
            <div className="w-full flex flex-row justify-end">

            
            <div className="w-[500px] ">

           
            <h3 className="text-[40px]  font-cinzelBold text-[#31302c]  ">
              {json.About.title}
            </h3>
            <div className="w-[220px] flex flex-row relative mb-8">
              <div className="bg-[#b4a692] w-[200px] h-[2px]"></div>
              <Image
                src={flor}
                alt="flor"
                className="w-[20px] h-[20px] absolute right-0 -top-2"
              />
            </div>
            <p className="text-justify font-ethereal text-xl w-[480px] text-[#31302c] tracking-[4px]">
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
          <div className="  w-full h-full flex flex-col justify-center items-center">
            <div className="w-full h-full flex flex-row justify-start items-center">
              <div className="w-[500px] h-[400px] relative   ">
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
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
