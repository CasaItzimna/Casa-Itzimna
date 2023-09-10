import { AppContext } from "@/context/StateContext";
import Head from "next/head";
import React, { useState } from "react";

function Formulario ({json}) {

  const {postFactura} = AppContext()

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    total: "",
    id_fiscal: "",
    calle: "",
    pais: "",
    ciudad: "",
    codigo_postal: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(
        formData.name &&
        formData.phone &&
        formData.email&&
        formData.date&&
        formData.total &&
        formData.id_fiscal &&
        formData.pais &&
        formData.ciudad &&
        formData.calle &&
        formData.codigo_postal
      ){
    postFactura(formData);
    setSuccess(true)
    setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        total: "",
        id_fiscal: "",
        pais: "",
        calle: "",
        ciudad: "",
        codigo_postal: "",
    });
}
else{
    setError(true)
  }
  };

  return (
    <div className="w-full h-full flex flex-row justify-center relative  ">
       <Head>
 <title>Casa Itzimná Boutique</title>
 </Head>
 <div className='flex flex-col justify-start items-center z-10 mb-8 mt-8'>
        <h3 className="w-[90%]  lg:w-full text-4xl md:text-5xl font-apollo text-center tracking-[4px] mb-4">
                {json.Factura.titulo}
              </h3>

              <form className="w-[90%] lg:w-full grid grid-cols-2 gap-4"
              onSubmit={handleSubmit}
              >
                <input
        type="email"
        name="email"
        id="email"
        className="placeholder:text-center placeholder:font-Geometrica w-full col-span-2  border-[1px] py-1 border-[#d3cbc0]"
        placeholder= {json.Factura.email}
        onChange={handleInputChange}
        value={formData.email}
        required
      />
      <input
        type="text"
        name="name"
        id="name"
        className="placeholder:text-center placeholder:font-Geometrica w-full col-span-2  border-[1px] py-1 border-[#d3cbc0]"
        placeholder= {json.Factura.name}
        onChange={handleInputChange}
        value={formData.name}
        required
      />
      <input
          type="text"
          name="id_fiscal"
          id="id_fiscal"
          className="placeholder:text-center placeholder:font-Geometrica w-full col-span-2  border-[1px] py-1 border-[#d3cbc0]"
          placeholder= {json.Factura.id}
          onChange={handleInputChange}
          value={formData.id_fiscal}
          required
        />
      <input
        type="tel"
        name="phone"
        id="phone"
        className="placeholder:text-center placeholder:font-Geometrica w-full col-span-2  border-[1px] py-1 border-[#d3cbc0]"
        placeholder= {json.Factura.number}
        onChange={handleInputChange}
        value={formData.phone}
        required
      />
      
      <input
        type="date"
        name="date"
        id="date"
        className="placeholder:text-center placeholder:font-Geometrica w-full col-span-2  border-[1px] py-1 border-[#d3cbc0]"
        placeholder="date"
        onChange={handleInputChange}
        value={formData.date}
        required
      />
      <input
          type="text"
          name="calle"
          id="calle"
          className="placeholder:text-center placeholder:font-Geometrica w-full col-span-2  border-[1px] py-1 border-[#d3cbc0]"
          placeholder= {json.Factura.calle}
          onChange={handleInputChange}
          value={formData.calle}
          required
        />
           <input
          type="text"
          name="ciudad"
          id="ciudad"
          className="placeholder:text-center placeholder:font-Geometrica w-full col-span-2   border-[1px] py-1 border-[#d3cbc0]"
          placeholder= {json.Factura.ciudad}
          onChange={handleInputChange}
          value={formData.ciudad}
          required
        />
      

        <input
          type="text"
          name="pais"
          id="pais"
          className="placeholder:text-center placeholder:font-Geometrica w-full   border-[1px] py-1 border-[#d3cbc0]"
          placeholder= {json.Factura.pais}
          onChange={handleInputChange}
          value={formData.pais}
          required
        />

     

        <input
          type="text"
          name="codigo_postal"
          id="codigo_postal"
          className="placeholder:text-center placeholder:font-Geometrica w-full   border-[1px] py-1 border-[#d3cbc0]"
          placeholder= {json.Factura.cp}
          onChange={handleInputChange}
          value={formData.codigo_postal}
          required
        />
      <input
        type="number"
        name="total"
        id="total"
        className="placeholder:text-center placeholder:font-Geometrica w-full col-span-2  border-[1px] py-1 border-[#d3cbc0]"
        placeholder= {json.Factura.total}
        onChange={handleInputChange}
        value={formData.total}
        required
      />
         
         {error ? (
                  <div className="col-span-2 w-full flex flex-row justify-center mt-4 text-red-500 font-Geometrica uppercase">
                    <p>{json.Factura.error}</p>
                  </div>
                ) : null}
              {success && (
        <div className="col-span-2 w-full flex flex-row justify-center mt-4 text-black tracking-[2px] font-Geometrica uppercase">
          <p>{json.Factura.success}</p>
        </div>
      )}
              <button className=" col-span-2 bg-black text-white text-2xl tracking-[4px] font-Geometrica py-2 mt-4"
              onClick={handleSubmit}>
                {json.Factura.boton}
                </button>
      </form>
    </div>
    </div>
  );
}

export default Formulario ;
