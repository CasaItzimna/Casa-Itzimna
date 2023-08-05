import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'

import hero9 from "./hero9.jpg";
import Link from "next/link";
 
function Hero({  json }) {


  return (
    <div className="w-full h-[70vh] lg:h-[90vh] flex flex-col relative">
       <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute w-full h-full md:h-full object-cover"
      >
        <Image
          src={hero9}
          alt="fondo"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-row justify-center h-full w-full text-white absolute z-10"
      >
        <div className="w-full h-[85%] md:h-[85%] lg:h-[90%] 2xl:h-full flex flex-col justify-end xl:pb-10 2xl:justify-center text-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-cinzelRegular xl:mt-20"
          >
            <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[150px] xl:text-[120px] 2xl:text-[150px]">C</span>
            asa{' '}
            <span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[150px] xl:text-[120px] 2xl:text-[150px]">I</span>
            tzimná
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-3xl sm:text-5xl md:text-6xl 2xl:text-6xl  font-cinzelRegular"
          >
            Boutique
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="w-[50%] lg:w-[30%] bg-black/40 hover:bg-black text-white mt-8 py-4 text-xl 2xl:text-3xl font-Geometrica tracking-[2px] "
          >
            <Link href="/House#booking">{json.Home.buttonBook}</Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
