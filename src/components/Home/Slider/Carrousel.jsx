import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Carrousel({ slider, index, handleSlider }) {
  
  return (
    <motion.div
      className={`w-[200px] h-[125px] mr-4
     ${index == 1 ? "opacity-75" : null}
     ${index == 2 ? "opacity-50" : null} 
     ${index == 3 ? "opacity-25" : null} 
       cursor-pointer hover:border-2 hover:border-white`}
       onClick={handleSlider}
       whileHover={{ scale: [null, 1.1, 1.1] }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={slider}
        className="w-full h-full object-cover "
        alt="Slider 2"
      />
    </motion.div>
  );
}

export default Carrousel;
