import Image from "next/image";
import React, { useState } from "react";

import Producto from "./Producto";
import { AppContext } from "@/context/StateContext";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Grid({ json }) {

  const{ productos, getProductos} = AppContext()

  useEffect(() => {
    getProductos();
  }, []);

  const [currentPage, setCurrentPage] = useState(1)

  const productosPerPage = 6
  const indexOfLastProducto = currentPage * productosPerPage
  const indexOfFirstProducto  = indexOfLastProducto - productosPerPage
  const currentProductos = productos?.slice(indexOfFirstProducto, indexOfLastProducto )

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  }; 


  if (!productos ) {
    // Renderizar un mensaje de carga o un mensaje de "No hay productos disponibles" si el array está vacío.
    return <div>Cargando productos o no hay productos disponibles.</div>;
  }


  return (
    <div className="w-full h-full flex justify-center  relative">
        <div className="hidden h-[200px] w-full  bg-gradient-to-t from-white via-white to-transparent z-0 overflow-y-hidden absolute -top-48 "></div>
      <div className="flex flex-col justify-center mb-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-8">
          {currentProductos?.map((producto, index) => (
            <Producto key={index} producto={producto} json={json} />
          ))}
        </div>
        <div  className="flex flex-row justify-center gap-8 mt-8">

<button onClick={handlePrevPage} >
        <FaArrowLeft className={currentPage == 1? "hidden":"text-[#d3cbc0] text-3xl"}/>
      </button>
      <button onClick={handleNextPage} >
        <FaArrowRight className={currentProductos.length < productosPerPage? "hidden": "text-[#d3cbc0] text-3xl "}/>
      </button>
</div>
      </div>
    </div>
  );
}

export default Grid;
 