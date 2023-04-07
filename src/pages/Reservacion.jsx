import { AppContext } from "@/context/StateContext";
import React, { useState } from "react";
import {AiOutlineCaretDown} from 'react-icons/ai'

import Calendario from "@/components/Reservacion/Calendario";

function Reservacion() {

  const {postReservacion} = AppContext()

  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    email:'',
    people:'',
    begin:'',
    end: '',
    comments:'',
    total:''
  })
  const [total, setTotal] = useState(0)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () =>{
    console.log(formData)
    postFactura(formData)
    setFormData({
        name: '',
        phone:'',
        email:'',
        people:'',
        begin:'',
        end: '',
        comments:'',
        total:''
    })
  }

  const [inicio, setInicio] = useState(null);
  const [fin, setFin] = useState(null);
  const [show, setShow] = useState(false)
  console.log(show)

  return (
    <div className="flex flex-col h-full w-full">
      <form className="flex flex-col h-full w-full" onSubmit={handleSubmit}>
        <label htmlFor="name" className=" text-sm mt-4 ">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        className="border-2 mt-2"
        placeholder="Name"
        onChange={handleInputChange}
        value={formData.name}
        required
      />
      <label htmlFor="name" className=" text-sm mt-4 ">Phone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        className="border-2 mt-2"
        placeholder="Phone"
        onChange={handleInputChange}
        value={formData.phone}
        required
      />
      <label htmlFor="name" className=" text-sm mt-4 ">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="border-2 mt-2"
        placeholder="Email"
        onChange={handleInputChange}
        value={formData.email}
        required
      />
      <div className="grid grid-cols-2 mt-2 mb-4 px-4 w-full h-full">
        <div className="w-1/2 mx-[25%] bg-black text-white flex flex-col text-center relative cursor-pointer"
        onClick={()=>setShow(true)}
        >
          <p>Entrada</p>
          <p className="text-6xl">07</p>
          <p>abril, 2023</p>
          <p className="font-thin">Viernes</p>
          <div>
            <AiOutlineCaretDown className="absolute top-[50%] right-[10%]"/>
          </div>
        </div>
        <div className="w-1/2 mx-[25%] bg-black text-white flex flex-col text-center relative cursor-pointer"
        onClick={()=>setShow(true)}
        >
          <p>Salida</p>
          <p className="text-6xl">09</p>
          <p>abril, 2023</p>
          <p className="font-thin">Domingo</p>
          <div>
            <AiOutlineCaretDown className="absolute top-[50%] right-[10%]"/>
          </div>
        </div>
      </div>
      

      <div className={`mt-4 ${!show? "hidden" : "block"}`}>
      <Calendario
        inicio = {inicio}
        fin = {fin}
        setInicio = {setInicio}
        setFin = {setFin}
        setShow = {setShow}
        
      />
    </div>
      <button
          className="w-full bg-black text-white text-sm uppercase font-semibold py-4 mt-4"
          onClick={handleSubmit}
          type="submit"
        >
          continue
        </button>
      </form>
    </div>
  );
}

export default Reservacion;
