import React from "react";
import { differenceInDays, isValid } from "date-fns";

function Reservacion({rsv}) {
  return (
    <div>
       <h3 className='text-center lg:text-left font-apollo tracking-[4px] text-xl text-[#d3cbc0] uppercase'>Booking Data</h3>
      <p className="text-center lg:text-left font-apollo tracking-[2px] uppercase">{rsv.name}</p>
      <p className="text-center lg:text-left font-apollo tracking-[2px] uppercase">{rsv.tel}</p>
      <p className="text-center lg:text-left font-apollo tracking-[2px] uppercase">
        {rsv.email}
      </p>
      <p className="text-center lg:text-left font-apollo tracking-[2px] uppercase">{rsv.guests} guest</p>
      <p className="text-center lg:text-left font-apollo tracking-[2px] uppercase">{rsv.plan} rate</p>
      <p className="text-center lg:text-left font-apollo tracking-[2px] uppercase">
        <span>Check in:</span> {rsv.checkin.substring(0, 10)}
      </p>
      <p className="font-apollo tracking-[2px] uppercase">
        <span>Check out:</span> {rsv.checkout.substring(0, 10)}
      </p>
      <p className="font-apollo tracking-[2px] uppercase">Experiences: 

      {rsv.experience.map((exp,index) =>(
        <span key={index} className="text-center lg:text-left "> {exp.nombreENG} </span>
        ))}
        </p>
    
    </div>
  );
}

export default Reservacion;
