import { AppContext } from "@/context/StateContext";
import React, { useState } from "react";

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
  const [value, onChange] = useState([new Date(), new Date()]);

  return (
    <div className="flex flex-col h-full w-full">
      <form className="flex flex-col h-full w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        className="border-2 mt-2"
        placeholder="name"
        onChange={handleInputChange}
        value={formData.name}
        required
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        className="border-2 mt-2"
        placeholder="phone"
        onChange={handleInputChange}
        value={formData.phone}
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        className="border-2 mt-2"
        placeholder="email"
        onChange={handleInputChange}
        value={formData.email}
        required
      />
      <input
        type="date"
        name="begin"
        id="begin"
        className="border-2 mt-2"
        placeholder="begin"
        onChange={handleInputChange}
        value={formData.begin}
        required
      />
      <div>
      <Calendario/>
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
