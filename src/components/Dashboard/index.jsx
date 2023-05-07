import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";

import Facturas from "./Facturas";
import Reservaciones from "./Reservaciones";
import { AppContext } from "@/context/StateContext";


const Dashboard = () => {

  const {getReservaciones} = AppContext()

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
    getReservaciones()
  }, [])
  

  useEffect(() => {
    const storedActiveComponent = localStorage.getItem("activeComponent");
    if (storedActiveComponent) {
      setActiveComponent(storedActiveComponent);
    } else {
      setActiveComponent("Reservaciones");
    }
  }, []);
  
  
  
  return (
    <div className="h-full w-full">
      <div>
        <h1>Dashboard</h1>
        <p>Bienvenido,{user?.name}</p>
        <button onClick={() => logout()}>Logout</button>
      </div>
      <div className="flex flex-row w-full h-full mt-4 ">
        <div className="flex flex-col w-1/6 h-full">
          Sidebar
          <ul>
  <li className="cursor-pointer">
    <span onClick={() => handleSidebarClick("Reservaciones")}>
      Reservaciones
    </span>
  </li>
  <li className="cursor-pointer">
    <span onClick={() => handleSidebarClick("Facturas")}>Facturas</span>
  </li>
  <li>Menu</li>
</ul>
        </div>
        <div className="w-5/6 h-full ">{renderActiveComponent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
