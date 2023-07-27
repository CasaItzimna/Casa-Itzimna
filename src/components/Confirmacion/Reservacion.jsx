import React from "react";
import { differenceInDays, isValid } from "date-fns";

function Reservacion({rsv}) {
  console.log(rsv)
  return (
    <div>
       <h3 className='text-center font-apollo tracking-[4px] text-xl text-[#b4a692] uppercase'>Booking Data</h3>
      <p className="font-apollo tracking-[2px] uppercase">{rsv.name}</p>
      <p className="font-apollo tracking-[2px] uppercase">{rsv.tel}</p>
      <p className="font-apollo tracking-[2px] uppercase">
        {rsv.email}
      </p>
      <p className="font-apollo tracking-[2px] uppercase">{rsv.guests} guest</p>
      <p className="font-apollo tracking-[2px] uppercase">{rsv.plan} rate</p>
      <p className="font-apollo tracking-[2px] uppercase">
        <span>Check in:</span> {rsv.checkin.substring(0, 10)}
      </p>
      <p className="font-apollo tracking-[2px] uppercase">
        <span>Check out:</span> {rsv.checkout.substring(0, 10)}
      </p>
      <p className="font-apollo tracking-[2px] uppercase">Experiences: 

      {rsv.experience.map((exp,index) =>(
        <span key={index} className=""> {exp} </span>
        ))}
        </p>
    
    </div>
  );
}

export default Reservacion;