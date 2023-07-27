import React from 'react'

function Card() {

    const testimonialElements = [
        `<div className="hidden lg:flex relative w-[95%] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#d3cbc0]">
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
        </div>`,
        `<div className="hidden lg:flex relative w-[100%] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#31302c]">
          <div className="absolute top-6 left-4 text-[#31302c] ">
            <Image src={comillasclaras} alt="comillas" className="w-[60px]" />
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
        </div>`,
        `<div className="hidden lg:flex relative w-[95%] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#d3cbc0]">
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
        </div>`,
        `<div className="hidden lg:flex relative w-[95%] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#d3cbc0]">
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
        </div>`,
        `<div className="hidden lg:flex relative w-[100%] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#31302c]">
          <div className="absolute top-6 left-4 text-[#31302c] ">
            <Image src={comillasclaras} alt="comillas" className="w-[60px]" />
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
        </div>`,
        `<div className="hidden lg:flex relative w-[95%] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#d3cbc0]">
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
        </div>`,
        `<div className="hidden lg:flex relative w-[95%] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#d3cbc0]">
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
        </div>`,
        `<div className="hidden lg:flex relative w-[100%] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#31302c]">
          <div className="absolute top-6 left-4 text-[#31302c] ">
            <Image src={comillasclaras} alt="comillas" className="w-[60px]" />
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
        </div>`,
        `<div className="hidden lg:flex relative w-[95%] h-[400px] md:w-[350px] md:h-[400px] border-8 rounded-[7px] border-[#d3cbc0]">
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
        </div>`,
      ];
  return (
    <div>Card</div>
  )
}

export default Card