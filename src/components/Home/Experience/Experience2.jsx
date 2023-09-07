import Image from "next/image";
import spa from "./spa.png";
import spa2 from "./HomeExperience.jpg";

import flor from "./flor.png";
import florder from "../../../assets/flor.png";
import serpiente from "../../../assets/serpiente.png";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import florizq from "../Testimonials/florizq.png";
import { AppContext } from "@/context/StateContext";
import Itzimna240 from '../../../assets/Videos/Home/itzimna_240p.mp4'
import Itzimna480 from '../../../assets/Videos/Home/itzimna_480p.mp4'
import Itzimna720 from '../../../assets/Videos/Home/itzimna_720p.mp4'

import videojs from 'video.js';
import 'video.js/dist/video-js.css';

function Experience({json}) {
/*   const [isLargerThanMd, setIsLargerThanMd] = useState(window.innerWidth > 768)
 */
function toggleFullScreen() {
  const videoPlayer = document.getElementById('videoPlayer');

  if (!document.fullscreenElement) {
    if (videoPlayer.requestFullscreen) {
      videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
      videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
      videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
      videoPlayer.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

const { idioma } = AppContext();
const videoRef = useRef(null);

useEffect(() => {
  // Verificar si videoRef.current es un elemento válido antes de usarlo
  console.log(videoRef)
  if (videoRef.current) {
    const videoPlayer = videojs(videoRef.current, {
      responsive: true,
      fluid: true,
      poster: spa2, // Reemplaza con la ruta real de tu imagen de póster
    })
    

    const sources = [
      {
        src: Itzimna240,
        type: 'video/mp4',
        label: '240p',
      },
      {
        src: Itzimna480,
        type: 'video/mp4',
        label: '480p',
      },
      {
        src: Itzimna720,
        type: 'video/mp4',
        label: '720p',
      },
    ];

    videoPlayer.src(sources);

    // Agrega un controlador de eventos onClick para iniciar la reproducción y expandir a pantalla completa
    videoRef.current.addEventListener('click', () => {
      if (videoRef.current.paused) {
        videoRef.current.play();
        videoRef.current.requestFullscreen();
      } else {
        videoRef.current.pause();
      }
    });

    return () => {
      if (videoPlayer) {
        console.log(videoPlayer)
        videoPlayer.dispose();
      }
    };
  }
}, []);

  return (
    <div className="w-full h-[700px] lg:h-[400px] flex flex-row justify-center relative   ">
      <div className="absolute h-full w-full  flex flex-col lg:flex-row justify-center  items-center  z-0">
        <div className="lg:w-1/2 xl:w-[40%] 2xl:w-full  flex flex-row justify-center xl:justify-start 2xl:justify-end ">

        
        <div className="mt-4 lg:mt-0 sm-w-[500px] lg:w-[500px] xl:w-full xl:h-[400px] 2xl:w-[600px]   flex flex-col justify-center  ">
          {/* 

          <Image src={spa2} alt="spa" className="w-full h-full xl:w-[90%] xl:h-[90%] 2xl:w-full object-cover " /> */}
          {
            console.log(videoRef)
          }
        <video
              ref={videoRef}
              className="video-js vjs-default-skin"
              controls
              poster={spa2}
              onLoadedMetadata={() => {
                console.log('Video loaded successfully');
              }}
            ></video>
          
        </div>
        </div>
        <div className="w-full lg:w-1/2 xl:w-[40%] 2xl:w-full flex flex-row justify-start md:justify-center lg:justify-start xl:justify-end 2xl:justify-start ">

        <div className="w-full lg:w-[90%] xl:w-[80%] 2xl:w-[600px] h-full flex flex-col justify-start lg:justify-center  items-center lg:items-end 
         lg:mr-4 xl:mr-0 mt-4 lg:mt-0 2xl:pr-10">
          <div className="w-full md:w-[600px] lg:w-full 2xl:w-[500px]  flex flex-col items-center lg:items-end">
            <h3 className="text-[30px] md:text-[40px]   font-cinzelBold lg:text-white text-center lg:text-right ">
            {json.Experience.title}
            </h3>
            {
              idioma == 'ingles'?
              <div className="w-[260px] h-[20px] hidden lg:flex flex-row relative  ">
              <Image
                src={flor}
                alt="flor"
                className="w-[20px] h-[20px] absolute  -top-[9px] "
              />
              <div className="bg-[#31302c] w-[250px] h-[2px] absolute right-0"></div>
            </div>
            :
            <div className="w-[300px] h-[20px] hidden lg:flex flex-row relative  ">
            <Image
              src={flor}
              alt="flor"
              className="w-[20px] h-[20px] absolute  -top-[9px] "
            />
            <div className="bg-[#31302c] w-[290px] h-[2px] absolute right-0"></div>
          </div>
            }
            
           

            <div className="w-full flex flex-col items-center">

      <div className="lg:hidden w-[80%] md:w-[440px] h-[50px] flex flex-row  relative mt-3">
        <Image
          src={florizq}
          alt="flor"
          className="w-[20px] h-[20px] absolute left-0 -top-2"
          />
        <div className="bg-[#d3cbc0] w-[430px] h-[2px]"></div>
        <Image
          src={florder}
          alt="flor"
          className="w-[20px] h-[20px] absolute right-0 -top-2"
          />
      </div>
          </div>
          </div>
          <p
      className="text-xl font-ethereal text-justify lg:hidden w-[350px] md:w-[600px] lg:w-[480px] tracking-[4px] lg:text-white"
      
    >
          {json.Experience.text}
          </p> 
          <p
      className="text-xl font-ethereal hidden lg:flex w-[480px] tracking-[4px] lg:text-white"
      style={{
        textAlign: 'right', // Justificar al centro por defecto
        textAlignLast: 'right', // Justificar a la derecha por defecto
      }}
    >
          {json.Experience.text}
          </p>  
          <Link href='/Experience'>
          <button className="rounded-[4px] bg-[#31302c] text-white hover:text-[#d3cbc0] w-[200px] h-[45px] text-xl tracking-[4px] mt-8 font-apollo ">
            
          {json.Experience.buttonText}
         
          </button>
          </Link>
        </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row">
        <div className="hidden lg:flex w-2/5 h-full bg-[#31302c]"></div>
        <div className="hidden lg:flex w-2/3 h-full bg-[#d3cbc0]"></div>
      </div>
    </div>
  );
}

export default Experience;
