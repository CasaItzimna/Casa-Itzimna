import React from "react";
import comillas from "./comillas.png";
import comillasclaras from "./comillasclaras.png";
import starsolid from "./star-solid.png";
import florizq from "./florizq.png";
import Image from "next/image";
import flor from "../../../assets/flor.png";
import iguana from './iguana.png'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


function Testimonials({json}) {

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 350;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 350;
  };

  const testimonialElements = [
    <div
    key={1}
    className="flex relative w-[300px] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#d3cbc0]">
      <div className="absolute top-6 left-4 text-[#31302c] ">
        <Image src={comillas} alt="comillas" className="w-[45px] md:w-[60px]" />
      </div>
      <div className="absolute top-4 right-4 flex flex-row gap-1 ">
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
      </div>
      <div className=" absolute top-20 md:top-24 flex flex-col w-full h-full">
        <h3 className="text-[#31302c] text-xl md:text-2xl text-center px-8 font-apollo">
          {json.Testimonials.titleText}
        </h3>
        <p className="font-apollo text-justify px-4 text-lg">
          {json.Testimonials.text1}
        </p>
      </div>
    </div>,
    <div
    key={2} className="flex relative w-[300px] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#31302c]">
      <div className="absolute top-6 left-4 text-[#31302c] ">
        <Image src={comillasclaras} alt="comillas" className="w-[45px] md:w-[60px]" />
      </div>
      <div className="absolute top-4 right-4 flex flex-row gap-1 ">
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
      </div>
      <div className=" absolute top-24 flex flex-col w-full h-full">
        <h3 className="text-[#d3cbc0] text-xl md:text-2xl text-center px-8 font-apollo">
          {json.Testimonials.titleText}
        </h3>
        <p className="font-apollo text-justify px-4 text-lg">
          {json.Testimonials.text2}
        </p>
      </div>
    </div>,
    <div
    key={3} className="flex relative w-[300px] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#d3cbc0]">
      <div className="absolute top-6 left-4 text-[#31302c] ">
        <Image src={comillas} alt="comillas" className="w-[45px] md:w-[60px]" />
      </div>
      <div className="absolute top-4 right-4 flex flex-row gap-1 ">
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
      </div>
      <div className=" absolute top-20 md:top-24 flex flex-col w-full h-full">
        <h3 className="text-[#31302c] text-xl md:text-2xl text-center px-8 font-apollo">
          {json.Testimonials.titleText}
        </h3>
        <p className="font-apollo text-justify px-4 text-lg">
          {json.Testimonials.text3}
        </p>
      </div>
    </div>,
   
    <div 
    key={4}
    className="flex relative w-[300px] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#31302c]">
      <div className="absolute top-6 left-4 text-[#31302c] ">
        <Image src={comillasclaras} alt="comillas" className="w-[45px] md:w-[60px]" />
      </div>
      <div className="absolute top-4 right-4 flex flex-row gap-1 ">
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
      </div>
      <div className=" absolute top-24 flex flex-col w-full h-full">
        <h3 className="text-[#d3cbc0] text-xl md:text-2xl text-center px-8 font-apollo">
          {json.Testimonials.titleText}
        </h3>
        <p className="font-apollo text-justify px-4 text-lg">
          {json.Testimonials.text4}
        </p>
      </div>
    </div>,
    <div
    key={5}
    className="flex relative w-[300px] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#d3cbc0]">
      <div className="absolute top-6 left-4 text-[#31302c] ">
        <Image src={comillas} alt="comillas" className="w-[45px] md:w-[60px]" />
      </div>
      <div className="absolute top-4 right-4 flex flex-row gap-1 ">
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
      </div>
      <div className=" absolute top-20 md:top-24 flex flex-col w-full h-full">
        <h3 className="text-[#31302c] text-xl md:text-2xl text-center px-8 font-apollo">
          {json.Testimonials.titleText}
        </h3>
        <p className="font-apollo text-justify px-4 text-lg">
          {json.Testimonials.text5}
        </p>
      </div>
    </div>,
    <div 
    key={6}
    className="flex relative w-[300px] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#31302c]">
      <div className="absolute top-6 left-4 text-[#31302c] ">
        <Image src={comillasclaras} alt="comillas" className="w-[45px] md:w-[60px]" />
      </div>
      <div className="absolute top-4 right-4 flex flex-row gap-1 ">
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
      </div>
      <div className=" absolute top-24 flex flex-col w-full h-full">
        <h3 className="text-[#d3cbc0] text-xl md:text-2xl text-center px-8 font-apollo">
          {json.Testimonials.titleText}
        </h3>
        <p className="font-apollo text-justify px-4 text-lg">
          {json.Testimonials.text6}
        </p>
      </div>
    </div>,
    <div
    key={7} className="flex relative w-[300px] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#d3cbc0]">
      <div className="absolute top-6 left-4 text-[#31302c] ">
        <Image src={comillas} alt="comillas" className="w-[45px] md:w-[60px]" />
      </div>
      <div className="absolute top-4 right-4 flex flex-row gap-1 ">
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
        <Image src={starsolid} alt="comillas" className="w-[20px]" />
      </div>
      <div className=" absolute top-20 md:top-24 flex flex-col w-full h-full">
        <h3 className="text-[#31302c] text-xl md:text-2xl text-center px-8 font-apollo">
          {json.Testimonials.titleText}
        </h3>
        <p className="font-apollo text-justify px-4 text-lg">
          {json.Testimonials.text7}
        </p>
      </div>
    </div>,
    
  
  ];

  

  return (
    <div className="w-full  h-full md:h-[800px]   flex flex-col  text-center mt-4 relative ">
      <div className="absolute bottom-0 right-0">
        <Image src={iguana} alt="iguana" className="w-[400px]"/>
      </div>
      <h3 className="font-apollo text-lg lg:text-2xl">{json.Testimonials.subtitle}</h3>
      <h2 className="font-cinzelBold text-4xl lg:text-5xl">{json.Testimonials.title}</h2>
      <div className="w-full flex flex-col items-center">

      <div className="w-[80%] md:w-[440px] h-[70px] flex flex-row  relative mt-3">
        <Image
          src={florizq}
          alt="flor"
          className="w-[20px] h-[20px] absolute left-0 -top-2"
          />
        <div className="bg-[#d3cbc0] w-[430px] h-[2px]"></div>
        <Image
          src={flor}
          alt="flor"
          className="w-[20px] h-[20px] absolute right-0 -top-2"
          />
      </div>
          </div>

          <div className="w-full flex flex-row justify-start md:justify-center">
          <div className=" w-full lg:w-[90%] xl:w-[80%] 2xl:w-[1140px] relative flex flex-row justify-center items-center group">

          <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />

      <div id={"slider"} className="w-full h-full mb-8 lg:mb-0 mx-4 lg:mx-0   flex flex-row justify-start items-center gap-8 overflow-x-scroll overflow-y-hidden  scroll-smooth scrollbar-hide">
      {testimonialElements.map((testimonio, index) => (
        <div key={index}>{testimonio}</div>
        ))}

        
      </div>
      <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
      </div>
          </div>
    </div>
  );
}

export default Testimonials;
