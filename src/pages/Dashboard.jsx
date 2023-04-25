import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Facturas from "../components/Dashboard/Facturas";
import Reservaciones from "../components/Dashboard/Reservaciones";

const Dashboard = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
  });
  const router = useRouter();
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

  const [activeComponent, setActiveComponent] = useState('Reservaciones');
  const handleSidebarClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Facturacion':
        return <Facturas />;
      case 'Reservaciones':
        return <Reservaciones />;
      default:
        return <Reservaciones />;
    }
  };

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
            <li onClick={() => handleSidebarClick('Reservaciones')} >Reservaciones</li>
            <li onClick={() => handleSidebarClick('Facturas')} >Facturas</li>
            <li>Menu</li>
          </ul>
        </div>
        <div className="w-5/6 h-full ">
        {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
