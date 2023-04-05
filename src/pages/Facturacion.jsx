import { AppContext } from "@/context/StateContext";
import React, { useState } from "react";

function Facturacion() {

  const {postFactura} = AppContext()

  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    email:'',
    date:'',
    rfc:'',
    total:''
  })

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
    date:'',
    rfc:'',
    total:''
    })
  }

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
        type="text"
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
        name="date"
        id="date"
        className="border-2 mt-2"
        placeholder="date"
        onChange={handleInputChange}
        value={formData.date}
        required
      />
      <input
        type="text"
        name="rfc"
        id="rfc"
        className="border-2 mt-2"
        placeholder="rfc"
        onChange={handleInputChange}
        value={formData.rfc}
        required
      />
      <input
        type="number"
        name="total"
        id="total"
        className="border-2 mt-2"
        placeholder="total"
        onChange={handleInputChange}
        value={formData.total}
        required
      />
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

export default Facturacion;
