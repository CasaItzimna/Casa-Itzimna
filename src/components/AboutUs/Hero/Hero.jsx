import Image from 'next/image'; 
import React from 'react'
import hero9 from './hero9.jpg'
import { AppContext } from '@/context/StateContext';
import { motion } from 'framer-motion';
 
function Hero({json}) {

  const {idioma} = AppContext()

  return ( 
    <div className="w-full h-[70vh] lg:h-[90vh]  flex flex-col relative"> 
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute w-full h-full"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-[85%] flex flex-col justify-end lg:pb-20 2xl:pb-0 2xl:justify-center text-center items-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl lg:mt-8 font-cinzelRegular"
          >
            {idioma === "ingles" ? (
              <motion.span>
                <motion.span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[170px]">A</motion.span>
                <motion.span>Bout{" "}</motion.span>
                <motion.span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[170px] ">U</motion.span>s{" "}
              </motion.span>
            ) : (
              <motion.span>
                <motion.span className="text-[60px] sm:text-[100px] md:text-[150px] lg:text-[170px]">A</motion.span>cerca{" "}
              </motion.span>
            )}
          </motion.h1>

          {/* Espacio vacío con animación */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex lg:hidden h-[100px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
    
  }
  
  export default Hero;