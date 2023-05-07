import React, { useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import slider1 from "../../../assets/Home/slider1.jpg";
import slider2 from "../../../assets/Home/slider2.jpg";
import slider3 from "../../../assets/Home/slider3.jpg";
import slider4 from "../../../assets/Home/slider4.jpg";
import Carrousel from "./Carrousel";

function Slider() {

  const [photoArray, setPhotoArray] = useState([
    slider1,slider2,slider3,slider4
  ])
  const [aux, setAux] = useState(null)
  const [selected, setSelected] = useState(photoArray[0])
  console.log(selected)
  
  const handleSlider = (slider, index) => {
    const photoArrayCopy = [...photoArray];
    console.log(selected)
    const selectedIndex = photoArrayCopy.indexOf(selected);
    const sliderIndex = photoArrayCopy.indexOf(slider);
    photoArrayCopy[sliderIndex] = selected
    photoArrayCopy[selectedIndex] = slider
    setPhotoArray(photoArrayCopy);
    setSelected(slider);
  };
  


  return (
    <div className="w-full h-screen relative overflow-hidden">
        <div className="bg-red-500 h-full w-full  ">
        <Image src={selected} className="w-full h-full object-cover " alt="Slider 1" />
        </div>
        <div className="bg-gray-950/60 h-full w-full absolute top-0  ">
        </div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-start ml-12 ">
        <div >
          <h1 className="text-8xl text-white">CASA ITZIMNÁ</h1>
          <button className="mt-8 bg-white border-2 border-black px-20 py-2 font-bold hover:bg-black hover:text-white">
            RESERVAR
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-20 right-32 flex flex-row">
        <div className="flex flex-col justify-center">
{/*           <HiOutlineArrowLeft className="text-gray-300 text-2xl mr-8 text-cente hover:text-white"/>
 */}        </div>
        {
          photoArray.map((slider, index) =>(
            index != 0?

              <Carrousel 
              slider = {slider}
              key={index}
              index={index}
              handleSlider={() => handleSlider(slider)}
              />
              : null
            
          ))
        }
        {/* <div  className="w-[200px] h-[125px] mr-4 opacity-75 cursor-pointer hover:border-2 hover:border-white">
          <Image src={slider2} className="w-full h-full object-cover " alt="Slider 2" />
        </div>
        <div  className="w-[200px] h-[125px]  mr-4 opacity-50 cursor-pointer hover:border-2 hover:border-white">
        <Image src={slider3} className="w-full h-full object-cover" alt="Slider 1" />
        </div>
        <div  className="w-[200px] h-[125px]  ">
        <Image src={slider4} className="w-full h-full object-cover opacity-25 cursor-pointer hover:border-2 hover:border-white " alt="Slider 1" />
        </div> */}
        <div className="flex flex-col justify-center">
{/*           <HiOutlineArrowRight className="text-gray-300 text-2xl ml-8 text-center hover:text-white" />
 */}        </div>
      </div>
    </div>
  );
}

export default Slider;
