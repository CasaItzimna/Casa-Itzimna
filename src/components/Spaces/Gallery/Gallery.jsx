import React from 'react'
import { useState } from 'react'

function Gallery({json}) {

    const [active, setActive] = useState("opcion1")
    console.log(active)

  return (
    <div className='w-full h-[1000px] flex flex-row justify-center '>
        <div className='flex flex-col justify-start'>
            <div className='grid grid-cols-6 gap-4'>
                <button className={`font-Geometrica bg-[#31302c] w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("opcion1")}
                >
                    {json.Gallery.button1}
                </button>
                <button className={`font-Geometrica bg-[#31302c] w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("opcion2")}
                >
                {json.Gallery.button2}
                </button>
                <button className={`font-Geometrica bg-[#31302c] w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("opcion3")}
                >
                {json.Gallery.button3}
                </button>
                <button className={`font-Geometrica bg-[#31302c] w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("opcion4")}
                >
                {json.Gallery.button4}
                </button>
                <button className={`font-Geometrica bg-[#31302c] w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("opcion5")}
                >
                {json.Gallery.button5}
                </button>
                <button className={`font-Geometrica bg-[#31302c] w-[120px] text-white text-md tracking-[2px]`}
                onClick={()=>setActive("opcion6")}
                >
                {json.Gallery.button6}
                </button>
            </div>
            <div>
                {/*aqui van las fotos*/}
            </div>
            </div> 

    </div>
  )
}

export default Gallery