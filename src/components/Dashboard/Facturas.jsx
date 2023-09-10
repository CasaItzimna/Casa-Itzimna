import { AppContext } from "@/context/StateContext";
import { useEffect, useState } from "react";
import Factura from "./Facturas/Factura";
import { useRef } from "react";
import Head from 'next/head';
import Image from "next/image";
import triangulo from '../../assets/Icons/triangulo.png'
import Modal from "./Modal/Modal";
import fondo from './img/fondo.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Facturas = () => {
  const { getFacturas, setIsLoading, isLoading, facturas, postFactura } = AppContext();

  useEffect(() => {
    getFacturas();
  }, []);

  const [facturasCheckin, setFacturasCheckin] = useState([])


  function compararPorCheckin(a, b) {
    const fechaCheckinA = new Date(a._createdAt);
    const fechaCheckinB = new Date(b._createdAt);
    return fechaCheckinA - fechaCheckinB;
  }

  useEffect(() => {
    if(facturas){
      facturas.sort(compararPorCheckin)
      setFacturasCheckin(facturas)
    }
  }, [facturas])

  const [showModal, setShowModal] = useState(false);

  const [addFormData, setAddFormData] = useState({
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
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const respuesta = await postFactura(addFormData);
      
      getFacturas()
      setShowModal(false);
      
     
      
    } catch (error) {
    }

   
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAddFormData({ ...addFormData, [name]: value });
  };

  const [currentPage, setCurrentPage] = useState(1)

  const facturasPerPage = 10
  const indexOfLastFactura = currentPage * facturasPerPage
  const indexOfFirstFactura  = indexOfLastFactura - facturasPerPage
  const currentFacturas = facturasCheckin?.slice(indexOfFirstFactura, indexOfLastFactura )

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  }; 

  return (
    <>
    <div className="h-full w-full flex flex-row justify-center  relative ">
              <Image src={fondo} alt="fondo img" className="absolute hidden lg:flex object-cover top-0 h-full w-full left-0 z-10" />

      <div className="h-full w-[90%] flex flex-col justify-center z-20">
        <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-0">
          <h2 className="text-2xl lg:text-4xl font-apollo tracking-[2px] mb-8 lg:text-white">Facturación</h2>
          <div className="flex flex-row gap-4">
            <div className="hidden border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer flex flex-row items-center gap-2 bg-white"  >
              STATUS <Image src={triangulo} alt="triangulo icon" className="w-[9px] h-[7px] " />
            </div>
            <div className="border-[2px] bg-white rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer"
            onClick={()=>setShowModal(true)}
            >+AGREGAR <span className="hidden md:w-auto">FACTURA</span></div>
          </div>
        </div>
        <div className="w-full border-[2px] rounded-[7px] px-8 py-8 bg-white">
          {isLoading ? (
            <p>Cargando facturas...</p>
          ) : currentFacturas && currentFacturas.length > 0 ? (
            <table className="w-full text-center ">
              <thead>
                <tr>
                  <th className="text-left pl-2">NOMBRE</th>
                  <th className="hidden xl:table-cell">TELEFONO</th>
{/*                   <th className="hidden md:table-cell">CORREO</th>
 */}                  <th className="hidden xl:table-cell">ID_FISCAL</th>
                  <th className="hidden xl:table-cell">FECHA</th>
                  <th className="hidden md:table-cell">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {currentFacturas.map((factura, index) => (
                  <Factura index={index} key={factura._id} factura={factura} />
                ))}
              </tbody>
            </table>

          ) : (
            <div className="w-[350px] h-[350px]">
            <span className="lg:text-white">No hay facturas</span>
              </div>
          )}
          <div  className="flex flex-row justify-center gap-8 mt-8">

<button onClick={handlePrevPage} >
        <FaArrowLeft className={currentPage == 1? "hidden":"text-[#d3cbc0] text-3xl"}/>
      </button>
      <button onClick={handleNextPage} >
        <FaArrowRight className={currentFacturas.length < facturasPerPage? "hidden": "text-[#d3cbc0] text-3xl "}/>
      </button>
</div>
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
                name="id_fiscal"
                id="id_fiscal"
                className="border-2 mt-2"
                placeholder="id_fiscal"
                onChange={handleInputChange}
                value={addFormData.id_fiscal}
                required
              />
               <input
                type="text"
                name="id_fiscal"
                id="id_fiscal"
                className="border-2 mt-2"
                placeholder="id_fiscal"
                onChange={handleInputChange}
                value={addFormData.id_fiscal}
                required
              />
               <input
                type="text"
                name="id_fiscal"
                id="id_fiscal"
                className="border-2 mt-2"
                placeholder="id_fiscal"
                onChange={handleInputChange}
                value={addFormData.id_fiscal}
                required
              />
               <input
                type="text"
                name="calle"
                id="calle"
                className="border-2 mt-2"
                placeholder="calle"
                onChange={handleInputChange}
                value={addFormData.calle}
                required
              />
               <input
                type="text"
                name="ciudad"
                id="ciudad"
                className="border-2 mt-2"
                placeholder="ciudad"
                onChange={handleInputChange}
                value={addFormData.ciudad}
                required
              />
               <input
                type="text"
                name="codigo_postal"
                id="codigo_postal"
                className="border-2 mt-2"
                placeholder="codigo_postal"
                onChange={handleInputChange}
                value={addFormData.codigo_postal}
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
