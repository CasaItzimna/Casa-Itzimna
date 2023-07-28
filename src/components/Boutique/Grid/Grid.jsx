import Image from "next/image";
import React from "react";

import Producto from "./Producto";
import { AppContext } from "@/context/StateContext";
import { useEffect } from "react";

function Grid({ json }) {

  const{ productos, getProductos} = AppContext()

  useEffect(() => {
    getProductos();
  }, []);

  console.log(productos);

  console.log(productos[0]?.image[0].asset._ref);
  return (
    <div className="w-full h-full flex justify-center  relative">
        <div className="hidden h-[200px] w-full  bg-gradient-to-t from-white via-white to-transparent z-0 overflow-y-hidden absolute -top-48 "></div>
      <div className="flex flex-col justify-center mb-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-8">
          {productos.map((producto, index) => (
            <Producto key={index} producto={producto} />
          ))}
        </div>
      {/*   <div className="flex flex-row justify-center items-center">
          <span className="text-4xl text-[#d3cbc0] font-cinzelBold mr-2">
            {"<"}
          </span>
          <span className="text-3xl px-4 py-2 border-[1px] rounded-[7px] border-[#d3cbc0] mr-4 mt-4 mb-4">
            1
          </span>
          <span className="text-3xl px-4 py-2 border-[1px] rounded-[7px] bg-[#31302c] text-white mr-4 mt-4 mb-4">
            2
          </span>
          <span className="text-3xl px-4 py-2 border-[1px] rounded-[7px] border-[#d3cbc0] mr-4 mt-4 mb-4">
            3
          </span>
          <span className="text-4xl text-[#d3cbc0] font-cinzelBold ml-2">
            {">"}
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default Grid;
 