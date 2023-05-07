import Image from "next/image";
import React from "react";

function Carrousel({ slider, index, handleSlider }) {
  console.log(index);
  
  return (
    <div
      className={`w-[200px] h-[125px] mr-4
     ${index == 1 ? "opacity-75" : null}
     ${index == 2 ? "opacity-50" : null} 
     ${index == 3 ? "opacity-25" : null} 
       cursor-pointer hover:border-2 hover:border-white`}
       onClick={handleSlider}
    >
      <Image
        src={slider}
        className="w-full h-full object-cover "
        alt="Slider 2"
      />
    </div>
  );
}

export default Carrousel;
