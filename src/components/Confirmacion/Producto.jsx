import React from "react";

function Producto({item}) {
    console.log(item)
  return (
    <div className="w-full lg:w-[20%]">
      <h3 className="uppercase text-left font-apollo tracking-[4px] text-xl text-[#b4a692]">
        {item.name}
      </h3>

      <p className="font-apollo text-left tracking-[2px] uppercase">{item.description}</p>
    </div>
  );
}

export default Producto;