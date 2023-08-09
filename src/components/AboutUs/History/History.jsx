import florizq from "./florizq.png";
import florder from "./florder.png";
import Image from "next/image";
import flor from "../../../assets/flor.png";
import React, { useEffect, useState } from "react";

function History({ json }) {
  const historia = [
    {
      fecha: "Época Prehispánica",
      titulo: "ITZIMNÁ COBRA VIDA",
      texto:
        "La Colonia Itzimná pertenece al cacicazgo de Ceh Pech, como un templo dedicado a la Deidad Itzamná y es considerada como Legado Prehispánico de la Colonia.",
    },
    {
      fecha: "1572",
      titulo: "UN SANTUARIO DE FE EN TIEMPOS DE CAMBIO",
      texto:
        "Después de la destrucción del templo prehispánico, se construye una pequeña capilla que venera al Cristo de las Esquipulas y a San Miguel Arcángel.",
    },
    {
      fecha: "1961",
      titulo: "ESTABLECIMIENTO",
      texto:
        "Construcción de la casona de estilo colonial en la antigua Colonia de Itzimná.",
    },
    {
      fecha: "Varios años",
      titulo: "UNA HISTORIA VIVA",
      texto:
        "La casona es ocupada como casa habitación por familias locales de Mérida y también como sede de Oficinas Gubernamentales.",
    },
    {
      fecha: "Años recientes",
      titulo: "RESTAURACIÓN Y CONSERVACIÓN",
      texto:
        "Empiezan las restauraciones, manteniendo y rescatando elementos originales",
    },
    {
      fecha: "2022",
      titulo: "CASA ITZIMNÁ BOUTIQUE",
      texto:
        "La Casona Renace como Una Casa Boutique de Lujo y Estilo Contemporáneo, una Experiencia Única de Encanto Colonial y Comodidades Modernas.",
    },
  ];
  const history = [
    {
      fecha: "Pre-Hispanic Era",
      titulo: "ITZIMNÁ COBRA VIDA",
      texto:
        "The Itzimná Colony belongs to the Ceh Pech cacicazgo, housing a temple dedicated to the deity Itzamná and considered a Pre-Hispanic Legacy of the Colony.",
    },
    {
      fecha: "1572",
      titulo: "UN SANTUARIO DE FE EN TIEMPOS DE CAMBIO",
      texto:
        "After the destruction of the pre-Hispanic temple, a small chapel is built, honoring the Christ of Esquipulas and San Miguel Archangel.",
    },
    {
      fecha: "1961",
      titulo: "ESTABLECIMIENTO",
      texto:
        "Construction of the colonial-style mansion in the ancient Itzimná Colony.",
    },
    {
      fecha: "Several years",
      titulo: "UNA HISTORIA VIVA",
      texto:
        "The mansion serves as a residence for local Mérida families and as a governmental office.",
    },
    {
      fecha: "Recent Years",
      titulo: "RESTAURACIÓN Y CONSERVACIÓN",
      texto:
        "The mansion undergoes interventions and restorations, preserving and rescuing original elements, transformed into a luxury boutique with modern amenities while conserving its colonial charm.",
    },
    {
      fecha: "2022",
      titulo: "CASA ITZIMNÁ BOUTIQUE",
      texto:
        "The Mansion Revives as a Luxury Boutique, a Unique Blend of Colonial Charm and Contemporary Comforts.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < historia.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const [numToShow, setNumToShow] = useState(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Solo actualiza el número de elementos a mostrar si estamos en el entorno del navegador
      setNumToShow(window.innerWidth < 1024 ? 1 : 3);
    }
  }, []);

  return (
    <div className="w-full h-full pb-12 flex flex-col text-center bg-[#d3cbc0] relative">
      <div className="absolute flex flex-row justify-center w-full -bottom-0  lg:-bottom-16 left-0 ">
        <div className="w-[95%] h-[40px] lg:h-[70px] flex flex-row justify-center rounded-l-full rounded-r-full bg-white  shadow-[12.0px_12.0px_8.0px_#d3cbc0] shadow-[#d3cbc0]/50">
          <div className="w-[95%] h-full flex flex-row justify-around items-center">
            <span className="font-Geometrica underline text-[#aea08c] cursor-pointer" onClick={handlePrevClick}>
              prev
            </span>
            <div className="w-full h-full flex flex-row justify-around items-center gap-20">
  {historia
    .slice(currentIndex, currentIndex + numToShow)
    .map((suceso, index) => (
      <div key={index} className="w-full flex flex-col items-center relative">
        <div className="bg-white h-[30px] w-[30px] lg:h-[40px] lg:w-[40px] rotate-45 absolute -top-3 lg:-top-7 z-10"></div>
        <div className="w-full flex flex-row justify-around text-center">
          <span className="font-cinzelBold text-center text-xl z-20">
            {suceso.fecha}
          </span>
        </div>
      </div>
    ))}
</div>

            <span className="font-Geometrica underline text-[#aea08c] cursor-pointer"
            onClick={handleNextClick}
            >
              next
            </span>
          </div>
        </div>
      </div>
      <h3 className="font-apollo text-[15px] lg:text-[25px] text-white mt-9 tracking-[4px]">
        {json.History.subtitle}
      </h3>
      <h2 className="font-cinzelBold text-[30px] lg:text-[40px]">
        {json.History.title}
      </h2>
      <div className="w-full flex flex-col items-center">
        <div className="hidden w-[410px] h-[70px] lg:flex flex-row  relative mt-3">
          <Image
            src={florizq}
            alt="flor"
            className="w-[20px] h-[20px] absolute left-0 -top-2"
          />
          <div className="bg-black w-[400px] h-[2px]"></div>
          <Image
            src={florder}
            alt="flor"
            className="w-[20px] h-[20px] absolute right-0 -top-2"
          />
        </div>

        <div className="lg:hidden w-[80%] md:w-[440px] h-[50px] flex flex-row  relative mt-3">
          <Image
            src={florizq}
            alt="flor"
            className="w-[20px] h-[20px] absolute left-0 -top-2"
          />
          <div className="bg-black w-[430px] h-[2px]"></div>
          <Image
            src={florizq}
            alt="flor"
            className="w-[20px] h-[20px] absolute  right-0 -top-2 rotate-180"
          />
        </div>
      </div>

      <div className="flex flex-row justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-3 w-full lg:w-[90%] place-items-center gap-4">
    {historia
      .slice(currentIndex, currentIndex + numToShow) // Mostrar 1 suceso si el ancho de ventana es menor a lg, 3 sucesos si es lg o mayor
      .map((suceso, index) => (
        <div key={index} className="w-[350px] h-[220px] lg:h-[300px] flex flex-col justify-center text-center bg-[#ad9f8b]">
          <h4 className="font-apollo text-xl tracking-[4px] mb-4 lg:h-[40px]">
            {suceso.titulo}
          </h4>
          <p className="text-white font-ethereal text-justify px-8 text-lg 2xl:tracking-[4px] lg:h-[200px]">
            {suceso.texto}
          </p>
        </div>
      ))}
  </div>
</div>

    </div>
  );
}

export default History;
