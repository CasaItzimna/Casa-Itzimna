import Image from "next/image";
import React, { useState } from "react";
import bookingfoto from './bookingfoto.png'
import trianguloAb from './trianguloAb.png'

function Booking({ json }) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");
  const [plan, setPlan] = useState("");
  const [experience, setExperience] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTelChange = (event) => {
    setTel(event.target.value);
  };

  const handleCheckinChange = (event) => {
    setCheckin(event.target.value);
  };

  const handleCheckoutChange = (event) => {
    setCheckout(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center pb-10">
      <div className="w-full max-w-[1920px] flex flex-row justify-center gap-4">
        <div className="w-[40%] flex flex-col ">
          <div className="w-full flex flex-row justify-center">
            <div className="flex flex-col">
              <h3 className="text-5xl font-cinzelBold tracking-[2px] mb-4">
                {json.Booking.title}
              </h3>
              <form className="w-full grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="NAME"
                  className="placeholder:text-center placeholder:font-Geometrica w-full  col-span-2 border-[1px] py-1 border-[#b4a692]"
                />
                <input
                  type="tel"
                  name="tel"
                  value={tel}
                  placeholder="PHONE NUMBER"
                  className="placeholder:text-center placeholder:font-Geometrica col-span-2 border-[1px] py-1 border-[#b4a692]"
                />
                <input
                  type="date"
                  name="checkin"
                  value={checkin}
                  placeholder="CHECK IN"
                  className="placeholder:text-center placeholder:font-Geometrica  border-[1px] py-1 border-[#b4a692]"
                />
                <input
                  type="date"
                  name="checkout"
                  value={checkout}
                  placeholder="CHECK OUT"
                  className="placeholder:text-center placeholder:font-Geometrica  border-[1px] py-1 border-[#b4a692]"
                />
                <input
                  type="text"
                  name="guests"
                  value={guests}
                  placeholder="GUESTS"
                  className="placeholder:text-center placeholder:font-Geometrica col-span-2 border-[1px] py-1 border-[#b4a692]"
                />
                <input
                  type="text"
                  name="plan"
                  value={plan}
                  placeholder={`CHOOSE A PLAN `}
                  className="placeholder:text-center placeholder:font-Geometrica  border-[1px] py-1 border-[#b4a692]"
                />
                <input
                  type="text"
                  name="experience"
                  value={experience}
                  placeholder="ADD AN EXPERIENCE"
                  className="placeholder:text-center placeholder:font-Geometrica  border-[1px] py-1 border-[#b4a692]"
                />
                <button className="bg-black text-white text-2xl tracking-[4px] font-Geometrica py-3 mt-2">BOOK NOW</button>
                <p className="col-span-2 font-PlayfairDisplay text-sm">
                {json.Booking.consent}<span className="text-[#b4a692] ml-2">{json.Booking.privacy}</span>
              </p>
              </form>
              
            </div>
          </div>
        </div>
        <div className="w-[40%] flex flex-col">
          <div className="w-full flex flex-row justify-start">

          <Image src={bookingfoto} alt="bookingfoto" className="w-full h-[550px] mb-8 object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
