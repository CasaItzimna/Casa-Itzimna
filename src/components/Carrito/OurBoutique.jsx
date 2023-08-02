import { AppContext } from "@/context/StateContext";
import Image from "next/image";
import React, { useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { client, urlFor } from "../../lib/client";
import Link from "next/link";

function OurBoutique({json}) {
  const { getProductos, productos } = AppContext();
  useEffect(() => {
    getProductos();
  }, []);
  console.log(productos);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 350;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 350;
  };

  return (
    <div className="w-full flex flex-row justify-start md:justify-center bg-[#d3cbc0]">
      <div className="w-full flex flex-col items-center">
        <h3 className="text-2xl font-apollo tracking-[4px] mb-2">
        {json.Cart.our}
        </h3>
        <div className=" w-full lg:w-[80%] 2xl:w-[1140px]  relative flex flex-row justify-center items-center group">
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />

          <div
            id={"slider"}
            className="w-full h-full mb-4 lg:mb-8 mx-4 lg:mx-0  flex flex-row justify-start items-center gap-8 overflow-x-scroll overflow-y-hidden  scroll-smooth scrollbar-hide"
          >
            {productos?.map(
              (producto, index) =>
                producto?.cantidad > 0 && (
                  <Link
                    key={index}
                    href={`/Boutique/${producto?.slug?.current}`}
                  >
                    <img
                      src={urlFor(producto?.image[0].asset._ref)}
                      alt="products"
                      className="w-[150px] h-[150px] object-contain bg-white cursor-pointer"
                    />
                  </Link>
                )
            )}
          </div>
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
        </div>
      </div>
    </div>
  );
}

export default OurBoutique;
