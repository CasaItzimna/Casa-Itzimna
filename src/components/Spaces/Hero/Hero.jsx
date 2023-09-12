import Image from 'next/image';
import React from 'react';
import hero2 from './hero2.jpg';
import { motion } from 'framer-motion';
import { AppContext } from '@/context/StateContext';

function Hero() {

  const {idioma} = AppContext()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[70vh] lg:h-[90vh] flex flex-col relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        
      >
        <Image src={hero2} alt="fondo" className="absolute w-full h-full object-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row justify-center h-full w-full text-white absolute z-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-[85%] flex flex-col justify-end lg:pb-20 2xl:pb-0 2xl:justify-center text-center items-center"
        >
            {
              idioma =="ingles"?
          <motion.h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-cinzelRegular">
            <motion.span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px]">G</motion.span>
            allery{" "}
          </motion.h1>
          :
          <motion.h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-cinzelRegular">
          <motion.span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[200px]">G</motion.span>
          alería{" "}
        </motion.h1>
            }
          {/* Espacio vacío con animación */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex lg:hidden h-[100px]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
