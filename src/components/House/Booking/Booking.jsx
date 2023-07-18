import Image from "next/image";
import React, { useEffect, useState } from "react";
import bookingfoto from "./bookingfoto.png";
import trianguloAb from "./trianguloAb.png";
import Link from "next/link";
import Calendario from "@/components/Home/Modal/Calendario";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AppContext } from "@/context/StateContext";
import { differenceInDays, isValid } from "date-fns";
import { useRouter } from "next/router";

function Booking({ json }) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");
  const [plan, setPlan] = useState("");
  const [experiences, setExperiences] = useState([]);
  
  const {carrito,setCarrito} = AppContext()

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTelChange = (event) => {
    setTel(event.target.value);
  };

  const handleCheckinChange = (event) => {
    setCheckin(event.target.value);
  };

  const handleCheckoutChange = (event) => {
    setCheckout(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };

  const handleExperienceChange = (e) => {
    const selectedValue = e.target.value;
    if (e.target.checked) {
      // Agregar experiencia seleccionada
      setExperiences([...experiences, selectedValue]);
    } else {
      // Eliminar experiencia deseleccionada
      setExperiences(experiences.filter((experience) => experience !== selectedValue));
    }
  };

  /* const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
  }; */

  const router = useRouter();

  const { postReservacion } = AppContext();

  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    guests: "",
    checkin: "",
    checkout: "",
    comments: "",
    total: "",
  });
  const [precio, setPrecio] = useState(200);
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const options = { weekday: "long" };

  const today = new Date();
  const todayName = today?.toLocaleDateString("en-US", options);
  const [inicio, setInicio] = useState(null);
  const inicioName = inicio?.toLocaleDateString("en-US", options);

  const [fin, setFin] = useState(null);
  const finName = fin?.toLocaleDateString("en-US", options);
  const [hoy, setHoy] = useState(new Date(today));
  const hoyName = hoy?.toLocaleDateString("en-US", options);
  const dateAfterThreeDays = new Date(today);
  dateAfterThreeDays.setDate(today.getDate() + 3);
  const [despues, setDespues] = useState(dateAfterThreeDays);
  const despuesName = despues?.toLocaleDateString("en-US", options);

  const [total, setTotal] = useState(differenceInDays(despues, hoy) * precio);

  const [show, setShow] = useState(false);
  console.log(show);

  const [selectedPackage, setSelectedPackage] = useState("1-2");

  const handlePackageChange = (event) => {
    setSelectedPackage(event.target.value);
  };

  const monthNames = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  useEffect(() => {
    if (inicio && fin) {
      console.log("aqui anndo", inicio, fin);
      setTotal(differenceInDays(fin, inicio) * precio);
    }
  }, [inicio, fin]);

  useEffect(() => {
    if (inicio) {
      formData.begin = inicio;
    }
    if (fin) {
      formData.end = fin;
    }
    if (inicio && fin) {
      formData.total = parseInt(total);
    }
  }, [inicio, fin, total]);

  useEffect(() => {
    localStorage.setItem("paquete", "paquete1");
  }, []);

  const handleSubmit = () => {
    event.preventDefault();
    console.log(formData);
    formData.checkin = inicio;
    formData.checkout = fin;
    formData.guests = selectedPackage;
    formData.experience = experiences;
    formData.plan = plan;
    console.log(formData);
    if (
      formData.name &&
      formData.tel &&
      formData.email &&
      formData.guests &&
      formData.checkin &&
      formData.checkout &&
      formData.total
    ) {
      console.log("entre en el if", formData);

      setCarrito(formData)
      //postReservacion(formData);
      var formDataJSON = JSON.stringify(formData);
      localStorage.setItem("carrito", formDataJSON);
      setFormData({
        name: "",
        tel: "",
        email: "",
        guests: "1-2",
        checkin: "",
        checkout: "",
        comments: "",
      });
      router.push("/Carrito");
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center pb-10">
      <div className="w-full lg:w-[1200px]  flex flex-col-reverse lg:flex-row justify-center gap-4">
        <div className="w-full lg:w-[40%] flex flex-col ">
          <div className="w-full flex flex-row justify-center">
            <div className="w-full flex flex-col items-center" id="booking">
              <h3 className=" text-5xl font-cinzelBold tracking-[2px] mb-4">
                {json.Booking.title}
              </h3>
              <form
                className="w-[90%] lg:w-full grid grid-cols-2 gap-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  onChange={handleInputChange}
                  value={formData.name}
                  placeholder="NAME"
                  className="placeholder:text-center placeholder:font-Geometrica w-full  col-span-2 border-[1px] py-1 border-[#b4a692]"
                />
                <input
                  type="tel"
                  name="tel"
                  onChange={handleInputChange}
                  value={formData.tel}
                  placeholder="PHONE NUMBER"
                  className="placeholder:text-center placeholder:font-Geometrica col-span-2 border-[1px] py-1 border-[#b4a692]"
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  placeholder="EMAIL"
                  className="placeholder:text-center placeholder:font-Geometrica col-span-2 border-[1px] py-1 border-[#b4a692]"
                />
                <div className="flex flex-col h-full w-full col-span-2">
                  <div className="flex flex-col h-full w-full ">
                    <div className="grid grid-cols-2 mt-2 mb-4 px-4 pb-4 pt-2 w-full h-full border-t-[1px] border-b-[1px] border-[#b4a692] gap-4">
                      <div className="flex flex-col items-center border-r-[1px] border-[#b4a692]  ">
                        <p className="text-[#b4a692] font-Geometrica uppercase mb-2 tracking-[2px]">
                          Entrada
                        </p>

                        <div
                          className="w-[70%] bg-[#b4a692] text-black flex flex-col text-center relative cursor-pointer"
                          onClick={() => setShow(true)}
                        >
                          {!inicio ? (
                            <div>
                              <p className="text-3xl font-Geometrica mt-2 uppercase">
                                {monthNames[hoy.getMonth()]}
                              </p>
                              <p className="text-3xl  font-Geometrica">
                                {hoy.getDate()}, {hoy.getFullYear()}
                              </p>
                              <p className="text-xl font-Geometrica uppercase mb-2">
                                {hoyName}
                              </p>
                              <div>
                                <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <p className="text-3xl font-Geometrica mt-2 uppercase">
                                {monthNames[inicio.getMonth()]}
                              </p>
                              <p className="text-3xl  font-Geometrica">
                                {inicio.getDate()}, {inicio.getFullYear()}
                              </p>
                              <p className="text-xl font-Geometrica uppercase mb-2">
                                {inicioName}
                              </p>
                              <div>
                                <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-center ">
                        <p className="text-[#b4a692] font-Geometrica uppercase mb-2 tracking-[2px]">
                          Salida
                        </p>

                        <div
                          className="w-[70%]  bg-[#b4a692] text-black flex flex-col text-center relative cursor-pointer"
                          onClick={() => setShow(true)}
                        >
                          {!fin ? (
                            <div>
                              <p className="text-3xl font-Geometrica mt-2 uppercase">
                                {monthNames[despues.getMonth()]}
                              </p>
                              <p className="text-3xl font-Geometrica">
                                {despues.getDate()}, {despues.getFullYear()}
                              </p>
                              <p className="text-xl font-Geometrica uppercase mb-2">
                                {despuesName}
                              </p>

                              <div>
                                <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                              </div>
                            </div>
                          ) : (
                            <div>
                              <p className="text-3xl font-Geometrica mt-2 uppercase">
                                {monthNames[fin.getMonth()]}
                              </p>
                              <p className="text-3xl  font-Geometrica">
                                {fin.getDate()}, {fin.getFullYear()}
                              </p>
                              <p className="text-xl font-Geometrica uppercase mb-2">
                                {finName}
                              </p>
                              <div>
                                <AiOutlineCaretDown className="absolute top-[15%] right-[10%]" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={`mt-4 mb-8 ${!show ? "hidden" : "block"}`}>
                      <Calendario
                        inicio={inicio}
                        fin={fin}
                        setInicio={setInicio}
                        setFin={setFin}
                        setShow={setShow}
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="text-[#b4a692] font-Geometrica uppercase tracking-[2px]">
                        GUEST NUMBER
                      </h3>
                      <div className="flex flex-row justify-center gap-4 text-black mt-2 mb-4">
                        <div
                          onClick={() => {
                            setSelectedPackage("1-2");
                            localStorage.setItem("paquete", "1-2");
                          }}
                          className={
                            selectedPackage === "1-2"
                              ? `border-[2px] border-[#b4a692] w-[25px] rounded-full relative cursor-pointer bg-[#b4a692]`
                              : `border-[2px] border-[#b4a692] w-[25px] rounded-full relative cursor-pointer`
                          }
                        >
                          <div
                            className={
                              selectedPackage === "1-2"
                                ? `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-white`
                                : `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-[#b4a692] `
                            }
                          ></div>
                        </div>
                        <label
                          htmlFor="1-2"
                          className={`font-Geometrica ${
                            selectedPackage === "1-2" ? "text-[#b4a692]" : ""
                          }`}
                        >
                          1-2
                        </label>
                        <div
                          onClick={() => {
                            setSelectedPackage("3-5");
                            localStorage.setItem("paquete", "3-5");
                          }}
                          className={
                            selectedPackage === "3-5"
                              ? `border-[2px] border-[#b4a692] w-[25px] rounded-full relative cursor-pointer bg-[#b4a692]`
                              : `border-[2px] border-[#b4a692] w-[25px] rounded-full relative cursor-pointer`
                          }
                        >
                          <div
                            className={
                              selectedPackage === "3-5"
                                ? `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-white`
                                : `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-[#b4a692] `
                            }
                          ></div>
                        </div>
                        <label
                          htmlFor="3-5"
                          className={`font-Geometrica ${
                            selectedPackage === "3-5" ? "text-[#b4a692]" : ""
                          }`}
                        >
                          3-5
                        </label>
                        <div
                          onClick={() => {
                            setSelectedPackage("6-8");
                            localStorage.setItem("paquete", "6-8");
                          }}
                          className={
                            selectedPackage === "6-8"
                              ? `border-[2px] border-[#b4a692] w-[25px] rounded-full relative cursor-pointer bg-[#b4a692]`
                              : `border-[2px] border-[#b4a692] w-[25px] rounded-full relative cursor-pointer`
                          }
                        >
                          <div
                            className={
                              selectedPackage === "6-8"
                                ? `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-white`
                                : `border-[1px] w-[10px] h-[10px] rounded-full absolute top-[25%] left-[25%] bg-[#b4a692] `
                            }
                          ></div>
                        </div>
                        <label
                          htmlFor="6-8"
                          className={`font-Geometrica ${
                            selectedPackage === "6-8" ? "text-[#b4a692]" : ""
                          }`}
                        >
                          6-8
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <select
                  name="plan"
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="border-[1px] py-1 border-[#b4a692] font-Geometrica text-gray-500"
                >
                  <option value="">CHOOSE A PLAN</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col ">

                  <h3>Experiences:</h3>
                  <div className="flex flex-row gap-4 mb-4">
                    
                  
      <label className="block">
        <input
          type="checkbox"
          value="beginner"
          checked={experiences.includes("beginner")}
          onChange={handleExperienceChange}
        />
        Beginner
      </label>
      <label className="block">
        <input
          type="checkbox"
          value="intermediate"
          checked={experiences.includes("intermediate")}
          onChange={handleExperienceChange}
        />
        Intermediate
      </label>
      <label className="block">
        <input
          type="checkbox"
          value="advanced"
          checked={experiences.includes("advanced")}
          onChange={handleExperienceChange}
        />
        Advanced
      </label>
      
      </div>
      </div>
    </div>
                <p className="font-Geometrica">TOTAL:</p>
                <p className="font-Geometrica text-right">${total}mxn</p>
                {error ? (
                  <div className="col-span-2 w-full flex flex-row justify-center text-red-500 font-Geometrica uppercase">
                    <p>Completa todos los campos</p>
                  </div>
                ) : null}
                <button
                  className="col-span-2  bg-black text-white text-2xl tracking-[4px] font-Geometrica py-3 mt-2"
                  onClick={handleSubmit}
                >
                  {/*  <Link href="/Carrito"> BOOK NOW </Link> */}
                  BOOK NOW
                </button>

                <p className="col-span-2 font-PlayfairDisplay text-sm">
                  {json.Booking.consent}
                  <span className="text-[#b4a692] ml-2">
                    {json.Booking.privacy}
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex flex-col">
          <div className="w-full h-full flex flex-row justify-center lg:justify-start">
            <Image
              src={bookingfoto}
              alt="bookingfoto"
              className="w-[90%] h-[550px] mb-8 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
