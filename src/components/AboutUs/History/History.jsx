import florizq from "./florizq.png";
import florder from "./florder.png";
import Image from "next/image";
import flor from "../../../assets/flor.png";
import React from "react";

function History({ json }) {

  const historia = [
      {
        "fecha": "Época Prehispánica",
        "titulo": "ITZIMNÁ COBRA VIDA",
        "texto": "La Colonia Itzimná pertenece al cacicazgo de Ceh Pech, como un templo dedicado a la Deidad Itzamná y es considerada como Legado Prehispánico de la Colonia."
      },
      {
        "fecha": "1572",
        "titulo": "UN SANTUARIO DE FE EN TIEMPOS DE CAMBIO",
        "texto": "Después de la destrucción del templo prehispánico, se construye una pequeña capilla que venera al Cristo de las Esquipulas y a San Miguel Arcángel."
      },
      {
        "fecha": "1961",
        "titulo": "ESTABLECIMIENTO",
        "texto": "Construcción de la casona de estilo colonial en la antigua Colonia de Itzimná."
      },
      {
        "fecha": "Varios años",
        "titulo": "UNA HISTORIA VIVA",
        "texto": "La casona es ocupada como casa habitación por familias locales de Mérida y también como sede de Oficinas Gubernamentales."
      },
      {
        "fecha": "Años recientes",
        "titulo": "RESTAURACIÓN Y CONSERVACIÓN",
        "texto": "La casona es sometida a intervenciones y restauraciones, manteniendo y rescatando elementos originales, y se la reacondiciona para convertirla en una boutique de lujo con servicios contemporáneos, conservando su encanto colonial."
      },
      {
        "fecha": "2022",
        "titulo": "CASA ITZIMNÁ BOUTIQUE",
        "texto": "La Casona Renace como Una Casa Boutique de Lujo y Estilo Contemporáneo, una Experiencia Única de Encanto Colonial y Comodidades Modernas."
      }
]
  const history = [
      {
        "fecha": "Pre-Hispanic Era",
        "titulo": "ITZIMNÁ COBRA VIDA",
        "texto": "The Itzimná Colony belongs to the Ceh Pech cacicazgo, housing a temple dedicated to the deity Itzamná and considered a Pre-Hispanic Legacy of the Colony."
      },
      {
        "fecha": "1572",
        "titulo": "UN SANTUARIO DE FE EN TIEMPOS DE CAMBIO",
        "texto": "After the destruction of the pre-Hispanic temple, a small chapel is built, honoring the Christ of Esquipulas and San Miguel Archangel."
      },
      {
        "fecha": "1961",
        "titulo": "ESTABLECIMIENTO",
        "texto": "Construction of the colonial-style mansion in the ancient Itzimná Colony."
      },
      {
        "fecha": "Several years",
        "titulo": "UNA HISTORIA VIVA",
        "texto": "The mansion serves as a residence for local Mérida families and as a governmental office."
      },
      {
        "fecha": "Recent Years",
        "titulo": "RESTAURACIÓN Y CONSERVACIÓN",
        "texto": "The mansion undergoes interventions and restorations, preserving and rescuing original elements, transformed into a luxury boutique with modern amenities while conserving its colonial charm."
      },
      {
        "fecha": "2022",
        "titulo": "CASA ITZIMNÁ BOUTIQUE",
        "texto": "The Mansion Revives as a Luxury Boutique, a Unique Blend of Colonial Charm and Contemporary Comforts."
      }
]

  return (
    <div className="w-full h-full lg:pb-8 flex flex-col text-center bg-[#d3cbc0] relative">
      <div className="lg:absolute flex flex-row justify-center w-full  -bottom-10 left-0">
       <div className="w-[95%] h-[70px] flex flex-row justify-center rounded-l-full rounded-r-full bg-white ">
          <div className="w-[95%] h-full flex flex-row justify-around items-center">
            <span className="font-Geometrica underline text-[#aea08c] cursor-pointer">prev</span>
            <div className="w-full h-full flex flex-row justify-around items-center">
              <div className="flex flex-col relative ">
                <div className="bg-white h-[40px] w-[40px] rotate-45 absolute -top-7 z-10"></div>
            <span className="font-cinzelBold text-xl z-20">1980</span>
              </div>
              <div className="flex flex-col relative ">
                <div className="bg-white h-[40px] w-[40px] rotate-45 absolute -top-7 z-10"></div>
            <span className="font-cinzelBold text-xl z-20">1990</span>
              </div>
              <div className="flex flex-col relative ">
                <div className="bg-white h-[40px] w-[40px] rotate-45 absolute -top-7 z-10"></div>
            <span className="font-cinzelBold text-xl z-20">1994</span>
              </div>
            </div>
            <span className="font-Geometrica underline text-[#aea08c] cursor-pointer">next</span>
          </div>
      </div>
</div>
      <h3 className="font-apollo text-[15px] lg:text-[25px] text-white mt-9 tracking-[4px]">
        {json.History.subtitle}
      </h3>
      <h2 className="font-cinzelBold text-[30px] lg:text-[40px]">{json.History.title}</h2>
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
      <div className="flex flex-col lg:flex-row w-full lg:w-[90%] justify-center items-center gap-4">
        <div className="w-[350px] h-[220px] lg:h-[300px]   flex flex-col justify-center text-center bg-[#ad9f8b]">
          <h4 className="font-apollo text-xl tracking-[4px] lg:h-[40px]">
          {json.History.titleText1}
          </h4>
          <p className="text-white font-ethereal text-justify px-8 text-md tracking-[4px] lg:h-[200px]">
          {json.History.text1}
          </p>
        </div>
        <div className="w-[350px] h-[220px] lg:h-[300px] flex flex-col justify-center text-center bg-[#ad9f8b]">
          <h4 className="font-apollo text-xl tracking-[4px] lg:h-[40px]">
          {json.History.titleText2}
          </h4>
          <p className="text-white font-ethereal text-justify px-8 text-md tracking-[4px] lg:h-[200px]">
          {json.History.text2}
          </p>
        </div>
        <div className="w-[350px] h-[220px] lg:h-[300px] flex flex-col justify-center text-center bg-[#ad9f8b] mb-4 lg:mb-0">
          <h4 className="font-apollo text-xl tracking-[4px] lg:h-[40px]">
          {json.History.titleText3}
          </h4>
          <p className="text-white font-ethereal text-justify px-8 text-md tracking-[4px] lg:h-[200px]">
          {json.History.text3}
          </p>
        </div>
   
        </div>
      </div>
    </div>
  );
}

export default History;
