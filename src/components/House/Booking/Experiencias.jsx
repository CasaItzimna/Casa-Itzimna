import { AppContext } from "@/context/StateContext";
import React from "react";
import { useEffect } from "react";

function Experiencias({json, handleExperienceChange, experiences}) {

    const {getExperiencias, experiencias} = AppContext()

    useEffect(() => {
      getExperiencias()
    }, [])
    console.log(experiences)
    

  return (
    <div className="flex flex-row justify-center gap-4 col-span-2">
      <div className="flex flex-col ">
          <h3 className="text-[#d3cbc0] text-center font-Geometrica uppercase tracking-[2px]">
            {json.Booking.experiences}
          </h3>
        <div className="flex flex-col items-center lg:flex-row font-Geometrica gap-4 mb-4">

          {
            experiencias.map((experiencia, index) =>(
                <label key={index} className="block uppercase">
            <input
              type="checkbox"
              value={experiencia?.nombre}
              checked={experiences.includes(experiencia)}
              onChange={()=>handleExperienceChange(experiencia)}
              className="uppercase"
            />
            {experiencia?.nombre}
          </label>
            ))
          }

          
        </div>
      </div>
    </div>
  );
}

export default Experiencias;
