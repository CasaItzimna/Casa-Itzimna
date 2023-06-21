import Image from "next/image";
import React from "react";
import flor from "../../../assets/flor.png";
import foto1 from "./foto1.png";
import foto2 from "./foto2.png";
import foto3 from "./foto3.png";
import { useState } from "react";
import Link from "next/link";

function Facilities({json}) {

  const [opcion, setOpcion] = useState('opcion1')
  console.log(opcion)
  
  return (
    <div className="h-full w-full relative z-20">
        
      <div className="flex flex-row justify-center w-full h-[700px] ">
        <div className="w-[25%] h-full flex flex-col  ">
            <div>
                {json.Facilities.texto1}
            </div>
            <div>
                <ul>
                    <li>{json.Facilities.list1}</li>
                    <li>{json.Facilities.list2}</li>
                    <li>{json.Facilities.list3}</li>
                    <li>{json.Facilities.list4}</li>
                </ul>
            </div>
            <div>
                <h2>{json.Facilities.title}</h2>
            </div>
            <div className="w-full flex flex-row ">
                <div className="w-full flex flex-col">
                    <div className=" w-full flex flex-row">
                        <span></span><span>{json.Facilities.facility1}</span>
                     </div>
                    <div className=" w-full flex flex-row">
                        <span></span><span>{json.Facilities.facility2}</span>
                     </div>
                    <div className=" w-full flex flex-row">
                        <span></span><span>{json.Facilities.facility3}</span>
                     </div>
                    <div className=" w-full flex flex-row">
                        <span></span><span>{json.Facilities.facility4}</span>
                     </div>
                </div>
                <div className="w-full flex flex-col">
                    <div className=" w-full flex flex-row">
                        <span></span><span>{json.Facilities.facility5}</span>
                     </div>
                    <div className=" w-full flex flex-row">
                        <span></span><span>{json.Facilities.facility6}</span>
                     </div>
                    <div className=" w-full flex flex-row">
                        <span></span><span>{json.Facilities.facility7}</span>
                     </div>
                    <div className=" w-full flex flex-row">
                        <span></span><span>{json.Facilities.facility8}</span>
                     </div>
                </div>
            </div>
            <div>
                <h3>{json.Facilities.termstitle}</h3>
            </div>
            <div>
                <h3>{json.Facilities.checkin}</h3>
                <ul>
                    <li>{json.Facilities.checkinText1}</li>
                    <li>{json.Facilities.checkinText2}</li>
                </ul>
            </div>
            <div>
                <h3>{json.Facilities.checkout}</h3>
                <ul>
                    <li>{json.Facilities.checkoutText1}</li>
                    <li>{json.Facilities.checkoutText2}</li>
                </ul>
            </div>
        </div>
        <div className="w-[500px] h-full flex flex-col justify-start ">
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
          <div>
            <p>{json.Facilities.exploreText}</p>
          </div>
          <button>
          {json.Facilities.galleryButton}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Facilities;
