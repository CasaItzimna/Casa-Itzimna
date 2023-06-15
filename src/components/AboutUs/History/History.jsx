import florizq from "./florizq.png";
import florder from "./florder.png";
import Image from "next/image";
import flor from "../../../assets/flor.png";
import React from "react";

function History({ json }) {
  return (
    <div className="w-full h-[500px] flex flex-col text-center bg-[#b4a692]">
      <h3 className="font-apollo text-2xl text-white mt-9 tracking-[4px]">
        {json.History.subtitle}
      </h3>
      <h2 className="font-cinzelBold text-5xl">{json.History.title}</h2>
      <div className="w-full flex flex-col items-center">
        <div className="w-[410px] h-[70px] flex flex-row  relative mt-3">
          <Image
            src={florizq}
            alt="flor"
            className="w-[20px] h-[20px] absolute left-0 -top-2"
          />
          <div className="bg-black w-[400px] h-[2px]"></div>
          <Image
            src={florder}
            alt="flor"
            className="w-[20px] h-[20px] absolute right-0 -top-2"
          />
        </div>
      </div>
      <div className="flex flex-row w-full justify-center gap-4">
        <div className="w-[350px] h-[220px] flex flex-col justify-center text-center bg-[#ad9f8b]">
          <h4 className="font-apollo text-xl tracking-[4px]">
          {json.History.titleText1}
          </h4>
          <p className="text-white font-ethereal text-justify px-8 text-md tracking-[4px]">
          {json.History.text1}
          </p>
        </div>
        <div className="w-[350px] h-[220px] flex flex-col justify-center text-center bg-[#ad9f8b]">
          <h4 className="font-apollo text-xl tracking-[4px]">
          {json.History.titleText2}
          </h4>
          <p className="text-white font-ethereal text-justify px-8 text-md tracking-[4px]">
          {json.History.text2}
          </p>
        </div>
        <div className="w-[350px] h-[220px] flex flex-col justify-center text-center bg-[#ad9f8b]">
          <h4 className="font-apollo text-xl tracking-[4px]">
          {json.History.titleText3}
          </h4>
          <p className="text-white font-ethereal text-justify px-8 text-md tracking-[4px]">
          {json.History.text3}
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
