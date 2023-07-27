import { AppContext } from "@/context/StateContext";
import { useEffect, useState } from "react";
import Factura from "./Facturas/Factura";
import { useRef } from "react";
import Head from 'next/head';
import Image from "next/image";
import triangulo from '../../assets/Icons/triangulo.png'
import Modal from "./Modal/Modal";

const Facturas = () => {
  const { getFacturas, setIsLoading, isLoading, facturas, postFactura } = AppContext();

  useEffect(() => {
    getFacturas();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const [addFormData, setAddFormData] = useState({
    name: "",
    phone: 0,
    email: "",
    date: null,
    rfc: "",
    state: "",
    total: 0,
  });
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("esto es lo que vamos a mandar" + addFormData)
    
    try {
      const respuesta = await postFactura(addFormData);
      console.log('la respuesta fue', respuesta)
      
      getFacturas()
      setShowModal(false);
      
     
      
    } catch (error) {
      console.log(error)
    }

   
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddFormData({ ...addFormData, [name]: value });
  };

  return (
    <>
    <div className="h-full w-full flex flex-row justify-center z-10 ">
      <div className="h-full w-[90%] flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-0">
          <h2 className="text-2xl font-apollo tracking-[2px] mb-8">Facturación</h2>
          <div className="flex flex-row gap-4">
            <div className="border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer flex flex-row items-center gap-2"  >
              STATUS <Image src={triangulo} alt="triangulo icon" className="w-[9px] h-[7px] " />
            </div>
            <div className="border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer"
            onClick={()=>setShowModal(true)}
            >+AGREGAR <span className="hidden md:w-auto">FACTURA</span></div>
          </div>
        </div>
        <div className="w-full border-[2px] rounded-[7px] px-8 py-8">
          {isLoading ? (
            <p>Cargando facturas...</p>
          ) : facturas && facturas.length > 0 ? (
            <table className="w-full text-center ">
              <thead>
                <tr>
                  <th className="text-left pl-2">NOMBRE</th>
                  <th className="hidden md:table-cell">TELEFONO</th>
{/*                   <th className="hidden md:table-cell">CORREO</th>
 */}                  <th className="hidden md:table-cell">RFC</th>
                  <th className="hidden md:table-cell">FECHA</th>
                  <th className="hidden md:table-cell">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {facturas.map((factura, index) => (
                  <Factura index={index} key={factura._id} factura={factura} />
                ))}
              </tbody>
            </table>
          ) : (
            <span>No hay facturas</span>
          )}
        </div>
      </div>
    </div>


    <Modal show={showModal} onClose={handleCloseModal}>
        <div className="p-6 ">
          <h2 className="text-xl mb-4 font-apollo uppercase tracking-[2px]">Crear Factura</h2>
          <div>
            <form
              className="flex flex-col h-full w-full font-Geometrica"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 mt-2 "
                placeholder="name"
                onChange={handleInputChange}
                value={addFormData.name}
                required
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                className="border-2 mt-2"
                placeholder="phone"
                onChange={handleInputChange}
                value={addFormData.phone}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                className="border-2 mt-2"
                placeholder="email"
                onChange={handleInputChange}
                value={addFormData.email}
                required
              />
              <input
                type="date"
                name="date"
                id="date"
                className="border-2 mt-2"
                placeholder="date"
                onChange={handleInputChange}
                value={addFormData.date}
                required
              />
              <input
                type="text"
                name="rfc"
                id="rfc"
                className="border-2 mt-2"
                placeholder="rfc"
                onChange={handleInputChange}
                value={addFormData.rfc}
                required
              />
              <input
                type="string"
                name="total"
                id="total"
                className="border-2 mt-2 mb-2"
                placeholder="total"
                onChange={handleInputChange}
                value={addFormData.total}
                required
              />
              {/* <label htmlFor="switch">
                {isSwitchChecked ? "RECIBIDA" : "ENVIADA"}
              </label>
              <div className="flex flex-row w-[50px]">

              <input
                type="checkbox"
                name="switch"
                id="switch"
                className="mr-2"
                onChange={handleSwitchChange}
                checked={isSwitchChecked}
              />
              </div> */}
            </form>
          </div>
          <div className="flex flex-row justify-between">
            <button
              className="mt-4 bg-[#d3cbc0] hover:bg-[#4a443c] text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Guardar 
            </button>
            <button
              className="mt-4 bg-[#d3cbc0] hover:bg-[#4a443c] text-white font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Facturas;
