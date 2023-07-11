import React from 'react'
import { useState } from 'react';

function Form({json}) {

    
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleTelChange = (event) => {
    setTel(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <div className='w-full h-full flex flex-row justify-center relative mb-4 lg:mb-0'>
                      <div className="h-[200px] w-full  bg-gradient-to-t from-white via-white to-transparent z-0 overflow-y-hidden absolute -top-48 "></div>

        <div className='flex flex-col justify-start items-center z-10'>
        <h3 className="w-[90%] lg:w-full text-5xl font-apollo text-center tracking-[8px] mb-4">
                {json.Contact.Touch}
              </h3>
              <form className="w-[90%] lg:w-full grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder={json.Contact.Input1}
                  className="placeholder:text-center placeholder:font-Geometrica w-full   border-[1px] py-1 border-[#b4a692]"
                />
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  placeholder={json.Contact.Input2}
                  className="placeholder:text-center placeholder:font-Geometrica w-full   border-[1px] py-1 border-[#b4a692]"
                />
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder={json.Contact.Input3}
                  className="placeholder:text-center placeholder:font-Geometrica border-[1px] py-1 border-[#b4a692]"
                />
                <input
                  type="tel"
                  name="tel"
                  value={tel}
                  placeholder={json.Contact.Input4}
                  className="placeholder:text-center placeholder:font-Geometrica border-[1px] py-1 border-[#b4a692]"
                />
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  placeholder={json.Contact.Input5}
                  className="h-full flex items-center text-center placeholder:font-Geometrica  border-[1px] py-4 col-span-2 border-[#b4a692]"
                />

              </form>
                <p className="w-[90%] lg:w-full col-span-2 font-PlayfairDisplay text-sm mt-2">
                {json.Contact.consent}<span className="text-[#b4a692] ml-2">{json.Contact.privacy}</span>
              </p>
              <div className='wfull flex flex-row justify-center'>

              <button className=" w-[250px] bg-black text-white text-2xl tracking-[4px] font-Geometrica py-2 mt-4">{json.Contact.button}</button>
              </div>
              
        </div>

    </div>
  )
}

export default Form