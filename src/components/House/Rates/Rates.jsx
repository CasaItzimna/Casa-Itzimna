import Image from "next/image";
import React, { useState } from "react";
import foto1 from "./Select.jpg";
import foto2 from "./Luxury.jpg";
import foto3 from "./Premium.jpg";
import fototo1 from "./unforgettable-1.jpg";
import fototo2 from "./Unforgettable-2.jpg";
import Link from "next/link";
import { AppContext } from "@/context/StateContext";


function Rates({ json }) {
  const [option, setOption] = useState("")
  const {moneda, usdRate, eurRate} = AppContext()


  const determinarMoneda = () => {
    switch(moneda){
    
      case "USD":
        return usdRate
        break;
      case "EUR":
        return eurRate
        break;
        default:
          return 1
    }
  }

  const ratesElements = [
    <div key={1} className="w-[300px] xl:w-[280px] 2xl:w-[380px]  h-full flex flex-col ">
              <Image
                src={foto1}
                alt="plan1"
                className="w-full h-[300px] object-cover rounded-tl-[25px] rounded-tr-[25px]"
              />
              <div className="w-full h-full flex flex-col text-center border-2">
                <h3 className="text-3xl font-apollo tracking-[8px] mt-3">
                  {json.Rates.option1}
                </h3>
                <h4 className="text-xl font-apollo tracking-[2px]">
                  ${((parseInt(json.Rates.option1price))*determinarMoneda()).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} {moneda}
                </h4> 
                {
                  option == "opcion1" &&
                
                <ul >
                  <li className="uppercase">{json.Rates.optiondetail1}</li>
                  <li className="uppercase">{json.Rates.optiondetail2}</li>
                  <li className="uppercase">{json.Rates.optiondetail3}</li>
                  <li className="uppercase">{json.Rates.optiondetail4}</li>
                  <li className="uppercase">{json.Rates.optiondetail5}</li>
                  <li className="uppercase">{json.Rates.optiondetail6}</li>
                  <li className="uppercase">{json.Rates.optiondetail7}</li>
                </ul>
}
                <p className="font-PlayfairDisplay text-sm">
                  {json.Rates.additional}
                </p>
                <div className="flex flex-row justify-center">
                {option == "opcion1"?
                  <button className="border-2 uppercase cursos-pointer hover:bg-[#a59f98] w-[150px] font-apollo text-md mb-4 mt-2"
                  onClick={()=> setOption("")}
                  >
                    
                    {json.Rates.optionclose}
                  </button>
                    :
                    <button className="border-2 cursos-pointer hover:bg-[#a59f98] w-[150px] font-apollo text-md mb-4 mt-2"
                  onClick={()=> setOption("opcion1")}
                  >
                    
                    {json.Rates.detailsButton}
                  </button>
                   
                    }
                </div>
              </div>
            </div>,
            <div key={2} className="w-[300px] xl:w-[280px] 2xl:w-[380px] 3xl:w-[330px] h-full  flex flex-col ">
              <Image
                src={foto2}
                alt="plan2"
                className="w-full h-[300px] object-cover rounded-tl-[25px] rounded-tr-[25px]"
              />
              <div className="w-full h-full flex flex-col text-center border-2">
                <h3 className="text-3xl font-apollo tracking-[8px] mt-3">
                  {json.Rates.option2}
                </h3>
                <h4 className="text-xl font-apollo tracking-[2px]">
                ${((parseInt(json.Rates.option2price))*determinarMoneda()).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} {moneda}
                </h4>
                <p className="font-PlayfairDisplay text-sm">
                  {json.Rates.additional}
                </p>
                {
                  option == "opcion2" &&
                <ul >
                  <li className="uppercase">{json.Rates.optiondetail1}</li>
                  <li className="uppercase">{json.Rates.optiondetail2}</li>
                  <li className="uppercase">{json.Rates.optiondetail3}</li>
                  <li className="uppercase">{json.Rates.optiondetail4}</li>
                  <li className="uppercase">{json.Rates.optiondetail5}</li>
                  <li className="uppercase">{json.Rates.optiondetail6}</li>
                  <li className="uppercase">{json.Rates.optiondetail7}</li>
                  <li className="uppercase">{json.Rates.optiondetailluxury}</li>
                </ul>
}
                <div className="flex flex-row justify-center">
                {option == "opcion2"?
                  <button className="border-2 uppercase cursos-pointer hover:bg-[#a59f98] w-[150px] font-apollo text-md mb-4 mt-2"
                  onClick={()=> setOption("")}
                  >
                    
                    {json.Rates.optionclose}
                  </button>
                    :
                    <button className="border-2 cursos-pointer hover:bg-[#a59f98] w-[150px] font-apollo text-md mb-4 mt-2"
                  onClick={()=> setOption("opcion2")}
                  >
                    
                    {json.Rates.detailsButton}
                  </button>
                   
                    }
                </div>
              </div>
            </div>,
            <div key={3} className="w-[300px] xl:w-[280px] 2xl:w-[380px] 3xl:w-[330px] h-full  flex flex-col ">
              <Image
                src={foto3}
                alt="plan3"
                className="w-full h-[300px] object-cover rounded-tl-[25px] rounded-tr-[25px] "
              />
              <div className="w-full h-full flex flex-col text-center border-2">
                <h3 className="text-3xl font-apollo tracking-[8px] mt-3">
                  {json.Rates.option3}
                </h3>
                <h4 className="text-xl font-apollo tracking-[2px]">
                ${((parseInt(json.Rates.option3price))*determinarMoneda()).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} {moneda}
                </h4>
                <p className="font-PlayfairDisplay text-sm">
                  {json.Rates.additional}
                </p>
                {
                  option == "opcion3" &&
                <ul >
                  <li className="uppercase">{json.Rates.optiondetail1}</li>
                  <li className="uppercase">{json.Rates.optiondetail2}</li>
                  <li className="uppercase">{json.Rates.optiondetail3}</li>
                  <li className="uppercase">{json.Rates.optiondetail4}</li>
                  <li className="uppercase">{json.Rates.optiondetail5}</li>
                  <li className="uppercase">{json.Rates.optiondetail6}</li>
                  <li className="uppercase">{json.Rates.optiondetail7}</li>
                  <li className="uppercase">{json.Rates.optiondetailluxury}</li>
                  <li className="uppercase">{json.Rates.optiondetailPremier}</li>
                </ul>
}
                <div className="flex flex-row justify-center">
                {option == "opcion3"?
                  <button className="border-2 uppercase cursos-pointer hover:bg-[#a59f98] w-[150px] font-apollo text-md mb-4 mt-2"
                  onClick={()=> setOption("")}
                  >
                    
                    {json.Rates.optionclose}
                  </button>
                    :
                    <button className="border-2  cursos-pointer hover:bg-[#a59f98] w-[150px] font-apollo text-md mb-4 mt-2"
                  onClick={()=> setOption("opcion3")}
                  >
                    
                    {json.Rates.detailsButton}
                  </button>
                   
                    }
                </div>
              </div>
            </div>
  ]

  return (
<div className={`w-full h-full mb-10 md:mb-0 ${option !== "" ? (option === "lg" ? "h-[1300px]" : "h-[1000px]") : ""} flex flex-col mt-8 xl:mt-0`}>
      <div className="w-full   flex flex-row justify-center items-center">
        <div className="w-full  flex flex-col items-center justify-center lg:mt-8">
          <h3 className="text-4xl font-cinzelBold mb-8">{json.Rates.title}</h3>
          <div id={"slider"} className="w-full h-full xl:w-[80%]  mb-8 lg:mb-0 mx-4 lg:mx-0  flex flex-row justify-center ">
            <div className="w-[90%]   flex flex-row justify-start lg:justify-between 2xl:justify-center items-center gap-8 overflow-x-scroll overflow-y-hidden  scroll-smooth scrollbar-hide ">

            { 
              ratesElements.map((rate, index) =>(
                <div key={index}>{rate}</div>
                ))
              }
              </div>
          </div>

          <div className="w-full h-full lg:h-[400px] xl:h-[300px] xl:w-[80%] 2xl:w-[1350px] flex flex-col mt-14 ">
            <div className="w-full  h-full  flex flex-row justify-center">
              <div className="w-full  lg:w-[90%]  flex flex-col lg:flex-row gap-8 lg:gap-1 justify-center lg:justify-between">

              
              <div className="w-[15%] lg:w-[40%] hidden lg:flex flex-row justify-center items-center">
                <Image src={fototo1} alt="persona" className="h-full object-cover " />
              </div>
              <div className="w-full  xl:w-[35%] flex flex-row justify-center items-center">
                <Image
                  src={fototo2}
                  alt="persona" 
                  className="w-[90%] h-full md:rounded-[18px] lg:rounded-none  object-cover"
                />
              </div>
              <div className=" w-full lg:w-[30%] h-full flex flex-col justify-center lg:justify-between gap-2 text-center lg:text-left tracking-[4px] ">
                <h3 className="lg:w-full font-apollo text-3xl ">
                  {json.Rates.unforgettableTitle}
                </h3>
                <div className="flex flex-row justify-center lg:justify-start">

                <p className="w-[90%] lg:w-full font-apollo text-lg text-justify tracking-[1px]">{json.Rates.unforgettableText}</p>
                </div>
                <div className="flex flex-row justify-center lg:justify-start ">

                <button className="font-Geometrica bg-[#d3cbc0] hover:bg-[#a59f98] w-[150px] h-[35px] rounded-[7px] text-xl px-2 mt-4">
                <Link href="/Experience">
                  {json.Rates.experiencesButton}
                  </Link>
                </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rates;
