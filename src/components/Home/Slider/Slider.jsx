import React, { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";
import slider1 from "../../../assets/Home/slider1.jpg";
import slider2 from "../../../assets/Home/slider2.jpg";
import slider3 from "../../../assets/Home/slider3.jpg";
import slider4 from "../../../assets/Home/slider4.jpg";
import Carrousel from "./Carrousel";
import { motion, AnimatePresence } from "framer-motion";

function Slider() {
  const [photoArray, setPhotoArray] = useState([
    slider1,
    slider2,
    slider3,
    slider4,
  ]);
  const [selected, setSelected] = useState(photoArray[0]);
  const [sliderIndex, setSliderIndex] = useState(null);
  console.log(selected);
  const [animationKey, setAnimationKey] = useState(0); // Añadir esta línea

  

  const handleSlider = (slider, index) => {
    console.log(slider)
    console.log(selected)
    const photoArrayCopy = [...photoArray];
    console.log(selected);
    const selectedIndex = photoArrayCopy.indexOf(selected);
    const sliderIndexAux = photoArrayCopy.indexOf(slider);
    setSliderIndex(sliderIndexAux)
    photoArrayCopy[sliderIndexAux] = selected;
    photoArrayCopy[selectedIndex] = slider;
    setPhotoArray(photoArrayCopy);
    setSelected(slider);
    setAnimationKey((prevKey) => prevKey + 1); // Añadir esta línea

  };

  

  // Framer Motion animation variants
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  const buttonVariants = {
    rest: { backgroundColor: "rgba(255, 255, 255, 1)", color: "rgba(0, 0, 0, 1)" },
    hover: { backgroundColor: "rgba(0, 0, 0, 1)", color: "rgba(255, 255, 255, 1)" },
  };
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="h-full w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={animationKey} // Modificar esta línea
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute w-full h-full"
          >
            <Image
              src={selected}
              className="w-full h-full object-cover"
              alt="Slider"
              layout="fill"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="bg-gray-950/60 h-full w-full absolute top-0  "></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center items-start ml-12 ">
        <div>
        <motion.h1
  className="text-8xl text-white"
  variants={titleVariants}
  initial="hidden"
  animate="visible"
>CASA ITZIMNÁ
</motion.h1>
          <motion.button
  className="mt-8 border-2 border-black px-20 py-2 font-bold"
  initial="rest"
  whileHover="hover"
  variants={buttonVariants}
  transition={{ duration: 0.3, ease: "easeInOut" }}
>
  RESERVAR
</motion.button>
        </div>
      </div>

      <div className="absolute bottom-20 right-32 flex flex-row">
        <div className="flex flex-col justify-center">
          {/*           <HiOutlineArrowLeft className="text-gray-300 text-2xl mr-8 text-cente hover:text-white"/>
           */}{" "}
        </div>
        {photoArray.map((slider, index) =>
          index != 0 ? (
            <Carrousel
              slider={slider}
              key={index}
              index={index}
              handleSlider={() => handleSlider(slider)}
            />
          ) : null
        )}
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
           */}{" "}
        </div>
      </div>
    </div>
  );
}

export default Slider;
