import React from 'react'
import { useState } from 'react'
import Masonry from './Masonry/GalleryMasonry'

function Gallery({json}) {

    const [active, setActive] = useState("garden")
    console.log(active)

  return (
    <div className='w-full h-[1000px] flex flex-row justify-center relative '>
                        <div className="h-[200px] w-full  bg-gradient-to-t from-white via-white to-transparent z-0 overflow-y-hidden absolute -top-48 "></div>

        <div className=' w-[50%] flex flex-col justify-start z-20'>
            <div className='grid grid-cols-6 gap-4'>
                <button className={`font-Geometrica ${active == "garden"? "bg-[#b4a692]" : "bg-[#31302c]"}  w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("garden")}
                >
                    {json.Gallery.button1}
                </button>
                <button className={`font-Geometrica ${active == "rooms"? "bg-[#b4a692]" : "bg-[#31302c]"} w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("rooms")}
                >
                {json.Gallery.button2}
                </button>
                <button className={`font-Geometrica ${active == "terrace"? "bg-[#b4a692]" : "bg-[#31302c]"} w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("terrace")}
                >
                {json.Gallery.button3}
                </button>
                <button className={`font-Geometrica ${active == "kitchen"? "bg-[#b4a692]" : "bg-[#31302c]"} w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("kitchen")}
                >
                {json.Gallery.button4}
                </button>
                <button className={`font-Geometrica ${active == "lounges"? "bg-[#b4a692]" : "bg-[#31302c]"} w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("lounges")}
                >
                {json.Gallery.button5}
                </button>
                <button className={`font-Geometrica ${active == "experience"? "bg-[#b4a692]" : "bg-[#31302c]"} w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("experience")}
                >
                {json.Gallery.button6}
                </button>
            </div>
            <div>
                {/*aqui van las fotos*/}
                <Masonry
                opcion = {active}
                />
            </div>
            </div> 

    </div>
  )
}

export default Gallery