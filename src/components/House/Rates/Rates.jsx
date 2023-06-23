import Image from "next/image";
import React from "react";
import foto1 from "./1.png";
import foto2 from "./2.png";
import foto3 from "./3.png";
import fototo1 from "./foto1.png";
import fototo2 from "./foto2.png";

function Rates({ json }) {
  return (
    <div className="w-full h-[1000px] flex flex-col  ">
      <div className="w-full max-w-[1920px] flex flex-row justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center">
          <h3 className="text-4xl font-cinzelBold">{json.Rates.title}</h3>
          <div className="w-full flex flex-row gap-8 justify-center items-center">
            <div className="w-[25%] h-full flex flex-col ">
              <Image
                src={foto1}
                alt="plan1"
                className="w-full h-[300px] object-cover rounded-tl-[25px] rounded-tr-[25px]"
              />
              <div className="w-full h-full flex flex-col text-center border-2">
                <h3 className="text-3xl font-apollo tracking-[8px] mt-3">{json.Rates.option1}</h3>
                <h4 className="text-xl font-apollo tracking-[2px]">{json.Rates.option1price}</h4>
                <p className="font-PlayfairDisplay text-sm">{json.Rates.additional}</p>
                <div className="flex flex-row justify-center">
                  <button className="border-2 w-[150px] font-apollo text-md mb-4 mt-2">
                    {json.Rates.detailsButton}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[25%] h-full  flex flex-col ">
              <Image
                src={foto2}
                alt="plan2"
                className="w-full h-[300px] object-cover rounded-tl-[25px] rounded-tr-[25px]"
              />
               <div className="w-full h-full flex flex-col text-center border-2">
                <h3 className="text-3xl font-apollo tracking-[8px] mt-3">{json.Rates.option2}</h3>
                <h4 className="text-xl font-apollo tracking-[2px]">{json.Rates.option2price}</h4>
                <p className="font-PlayfairDisplay text-sm">{json.Rates.additional}</p>
                <div className="flex flex-row justify-center">
                  <button className="border-2 w-[150px] font-apollo text-md mb-4 mt-2">
                    {json.Rates.detailsButton}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[25%] h-full  flex flex-col ">
              <Image
                src={foto3}
                alt="plan3"
                className="w-full h-[300px] object-cover rounded-tl-[25px] rounded-tr-[25px] "
              />
              <div className="w-full h-full flex flex-col text-center border-2">
                <h3 className="text-3xl font-apollo tracking-[8px] mt-3">{json.Rates.option3}</h3>
                <h4 className="text-xl font-apollo tracking-[2px]">{json.Rates.option3price}</h4>
                <p className="font-PlayfairDisplay text-sm">{json.Rates.additional}</p>
                <div className="flex flex-row justify-center">
                  <button className="border-2 w-[150px] font-apollo text-md mb-4 mt-2">
                    {json.Rates.detailsButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row justify-center">
            <div className="w-[20%]">
                <Image src={fototo1} alt="persona" />
            </div>
            <div className="w-[50%]">
            <Image src={fototo2} alt="persona" />
            </div>
            <div className="w-[30%]">
                <h3></h3>
                <p></p>
                <button></button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Rates;
