import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";

import Facturas from "./Facturas";
import Ventas from "./Ventas";
import Reservaciones from "./Reservaciones";
import { AppContext } from "@/context/StateContext";
import Image from "next/image";
import logomovil from "../../assets/Logo/logomenumov.png";
import homeIcon from "../../assets/Icons/home.png";
import factura from "../../assets/Icons/factura.png";
import menu from "../../assets/Icons/menu.png";
import close from "../../assets/Icons/x.png";

import salir from "../../assets/Icons/salir.png";
import { AiFillHome } from "react-icons/ai";
import {
  FaSuitcase,
  FaReceipt,
  FaRightFromBracket,
  FaRightToBracket,
  FaDollarSign,
  FaBars,
  FaRegCalendarAlt,
  FaGlassCheers,
  FaStar
} from "react-icons/fa";
import Productos from "./Productos";
import Fechas from "./Fechas";
import Experiencias from "./Experiencias";

const Dashboard = () => {
  const [active, setActive] = useState(false);

  const { getReservaciones } = AppContext();

  const [user, setUser] = useState({
    email: "",
    name: "",
  });
  const router = useRouter();
  const { component } = router.query;

  const getProfile = async () => {
    const response = await axios.get("/api/auth/profile");
    setUser(response.data);
  };
  useEffect(() => {
    getProfile();
  }, []);

  const logout = async () => {
    try {
      const response = await axios.post("/api/auth/logout");
      router.push("/Login");
    } catch (error) {
      console.error(error);
      router.push("/Login");
    }
  };

  const [activeComponent, setActiveComponent] = useState("Reservaciones");

  const renderActiveComponent = () => {
    console.log(activeComponent);
    switch (activeComponent) {
      case "Facturas":
        return <Facturas />;
        case "Ventas":
          return <Ventas/>
      case "Reservaciones":
      default:
        return <Reservaciones />;
    }
  };

  const handleSidebarClick = (component) => {
    setActiveComponent(component);
    localStorage.setItem("activeComponent", component);
    router.push(`/Dashboard/${component}`);
  };
  useEffect(() => {
    getReservaciones();
  }, []);

  useEffect(() => {
    const storedActiveComponent = localStorage.getItem("activeComponent");
    if (storedActiveComponent) {
      setActiveComponent(storedActiveComponent);
    } else {
      setActiveComponent("Reservaciones");
    }
  }, []);

  return (
    
    <Fragment>
      <div className="lg:hidden flex flex-row justify-between   w-full h-full    ">
      <div>

      </div>
        <FaBars
          src={menu}
          alt="menu movil"
          className={!active ? "flex text-5xl mr-4 mt-8 cursor-pointer text-[#d3cbc0] z-20" : "hidden"}
          onClick={()=>setActive(true)}
        />
      </div>
      <div
        className={
          active
            ? "w-full h-full flex flex-col  bg-white "
            : "hidden"
        }
      >
        <div className="w-full h-[180px] flex flex-row justify-center relative">
          <Image
            src={close}
            alt="close menu movil"
            onClick={() => setActive(false)}
            className="w-[30px] absolute top-10 right-4 cursor-pointer z-20"
          />

          <Image
            src={logomovil}
            alt="logo menu movil"
            className="w-[60%] absolute top-[80px] sm:top-[30%] md:top-[10%] "
          />
        </div>
        <div>
          <ul className="flex flex-col text-center gap-3 text-xl font-Geometrica">
            <li
              className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
              onClick={() => setActive(false)}
            >
              <span>
                <AiFillHome className="text-2xl text-white " />
              </span>{" "}
              Dashboard
            </li>
            <li
              className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
              onClick={() => {
                setActive(false);
                handleSidebarClick("Reservaciones");
              }}
            >
              <span>
                <FaSuitcase className="text-2xl text-white" />
              </span>
              Reservaciones
            </li>
            <li
              className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
              onClick={() => {
                setActive(false);
                handleSidebarClick("Facturas");
              }}
            >
              <span>
                <FaReceipt className="text-2xl text-white" />
              </span>{" "}
              Facturas
            </li>
            <li
              className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
              onClick={() => {
                setActive(false);
                handleSidebarClick("Ventas");
              }}
            >
              <span>
                <FaReceipt className="text-2xl text-white" />
              </span>{" "}
              Ventas
            </li>
            <a
            href="https://casaitzimna.sanity.studio/desk/fechas"
            target="_blank"
            rel="noopener noreferrer"
             className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
             onClick={() => {
               setActive(false)
             }}
            >
              <span>
                <FaReceipt className="text-2xl text-white" />
              </span>{" "}
              Productos
            </a>
            <a
              href="https://casaitzimna.sanity.studio/desk/fechas"
              target="_blank"
              rel="noopener noreferrer"
               className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
               onClick={() => {
                 setActive(false)
               }}
            >
              <span>
                <FaReceipt className="text-2xl text-white" />
              </span>{" "}
              Experiencias
            </a>
            <a
             href="https://casaitzimna.sanity.studio/desk/fechas"
             target="_blank"
             rel="noopener noreferrer"
              className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
              onClick={() => {
                setActive(false)
              }}
            >
              <span>
                <FaReceipt className="text-2xl text-white" />
              </span>{" "}
              Fechas Especiales
            </a>
            <li
              className="cursor-pointer hover:text-[#d3cbc0] tracking-[3px]"
              onClick={() => {
                setActive(false);
                logout()
              }}
            >
              <span>
                <FaReceipt className="text-2xl text-white" />
              </span>{" "}
               Cerrar Sesión
            </li>
          </ul>
        </div>
      </div>
    <div className="w-full h-full lg:h-screen flex flex-row ">
      <div className="hidden w-1/4 lg:flex flex-col bg-[#31302c]">
        <div className="w-full h-full flex flex-row justify-center ">
          <div className="w-[90%] flex flex-col  justify-between">
            <div className="h-full flex flex-col">
              <div className="text-center">
                <h1 className="  text-white text-3xl font-cinzelRegular mt-8">
                  <span className="text-white text-[35px]  ">C</span>
                  asa <span className="text-white text-[35px] ">I</span>
                  tzimná
                </h1>
                <h2 className="text-white text-md  font-cinzelRegular mb-2">
                  Boutique
                </h2>
              </div>
              <div className="text-white font-apollo mt-4">
                <p className="text-lg">Bienvenido,</p>
                <p className="text-4xl">{user?.name}</p>
              </div>
              <div className="flex flex-col">
                <p className="flex flex-row gap-4 mt-9 items-center cursor-pointer hover:text-[#d3cbc0]">
                  <span>
                    <AiFillHome className="text-2xl text-white " />
                  </span>
                  <span className="text-xl text-white font-apollo tracking-[2px]">
                    Dashboard
                  </span>
                </p>
                <p className="flex flex-row gap-4 mt-9 items-center cursor-pointer hover:text-[#d3cbc0]">
                  <span>
                    <FaSuitcase className="text-2xl text-white" />
                  </span>
                  <span
                    className="text-xl text-white font-apollo tracking-[2px]"
                    onClick={() => handleSidebarClick("Reservaciones")}
                  >
                    Reservaciones
                  </span>
                </p>
                <p className="flex flex-row gap-4 mt-9 items-center cursor-pointer hover:text-[#d3cbc0]">
                  <span>
                    <FaReceipt className="text-2xl text-white" />
                  </span>
                  <span
                    className="text-xl text-white font-apollo tracking-[2px]"
                    onClick={() => handleSidebarClick("Facturas")}
                  >
                    Facturación
                  </span>
                </p>
                <p className="flex flex-row gap-4 mt-9 items-center cursor-pointer hover:text-[#d3cbc0]">
                  <span>
                    <FaDollarSign className="text-2xl text-white" />
                  </span>
                  <span
                    className="text-xl text-white font-apollo tracking-[2px]"
                    onClick={() => handleSidebarClick("Ventas")}
                  >
                    Ventas
                  </span>
                </p>
                <p className="flex flex-row gap-4 mt-9 items-center cursor-pointer hover:text-[#d3cbc0]">
                  <span>
                    <FaStar className="text-2xl text-white" />
                  </span>
                  <a
      href="https://casaitzimna.sanity.studio/desk/productos"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-xl text-white font-apollo tracking-[2px]">
        Productos
      </span>
    </a>
                </p>
                <p className="flex flex-row gap-4 mt-9 items-center cursor-pointer hover:text-[#d3cbc0]">
                  <span>
                    <FaGlassCheers className="text-2xl text-white" />
                  </span>
                  <a
      href="https://casaitzimna.sanity.studio/desk/experiencias"
      target="_blank"
      rel="noopener noreferrer"
    >
                  <span
                    className="text-xl text-white font-apollo tracking-[2px]"
                    
                  >
                    Experiencias
                  </span>
                  </a>
                </p>
                <p className="flex flex-row gap-4 mt-9 items-center cursor-pointer hover:text-[#d3cbc0]">
                  <span>
                    <FaRegCalendarAlt className="text-2xl text-white" />
                  </span>
                  <a
      href="https://casaitzimna.sanity.studio/desk/fechas"
      target="_blank"
      rel="noopener noreferrer"
    >
                  <span
                    className="text-xl text-white font-apollo tracking-[2px]"
                   
                  >
                    Fechas Especiales
                  </span>
                  </a>
                </p>
              </div>
            </div>
            <div>
              <p
                className="flex flex-row gap-4 mb-8 items-center cursor-pointer hover:text-[#d3cbc0]"
                onClick={() => logout()}
              >
                <span>
                  <Image
                    src={salir}
                    alt="exit icon"
                    className="w-[20px] h-[21px]"
                  />
                </span>
                <span className="text-xl text-white font-apollo tracking-[2px]">
                  Cerrar Sesión
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      

      
      <div className={" h-full w-full lg:w-3/4  flex flex-col justify-center mt-8 mb-8 lg:mt-0 lg:mb-0"}>
        {renderActiveComponent()}
      </div>
    </div>
    </Fragment>
  );
};

export default Dashboard;
