import { AppContext } from "@/context/StateContext";
import React, { useEffect, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

import Calendario from "@/components/Reservacion/Calendario";
import { differenceInDays } from "date-fns";

function Reservacion() {
  const { postReservacion } = AppContext();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    people: "",
    begin: "",
    end: "",
    comments: "",
    total: "",
  });
  const [total, setTotal] = useState(0);
  const [precio, setPrecio] = useState(200)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    postFactura(formData);
    setFormData({
      name: "",
      phone: "",
      email: "",
      people: "",

      comments: "",
    });
  };
  const today = new Date();

  const [inicio, setInicio] = useState(null);
  const [fin, setFin] = useState(null);

  const [hoy, setHoy] = useState(new Date(today));
  const dateAfterThreeDays = new Date(today);
  dateAfterThreeDays.setDate(today.getDate() + 3);
  const [despues, setDespues] = useState(dateAfterThreeDays);

  const [show, setShow] = useState(false);
  console.log(show);

  

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
    if(!inicio && !fin){
      setTotal(differenceInDays(despues, hoy) * precio)
    }
    else{
      setTotal(differenceInDays(fin, inicio) * precio)
    }
  }, [inicio, fin, hoy, despues])

  console.log(differenceInDays(despues, hoy))
  

  return (
    <div className="flex flex-col h-full w-full">
      <form className="flex flex-col h-full w-full" onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className=" text-sm mt-4 text-center lg:text-left "
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-2 mt-2 text-center lg:text-left"
          placeholder="Name"
          onChange={handleInputChange}
          value={formData.name}
          required
        />
        <label
          htmlFor="name"
          className=" text-sm mt-4 text-center lg:text-left "
        >
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="border-2 mt-2 text-center lg:text-left "
          placeholder="Phone"
          onChange={handleInputChange}
          value={formData.phone}
          required
        />
        <label
          htmlFor="name"
          className=" text-sm mt-4 text-center lg:text-left "
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2 mt-2 text-center lg:text-left"
          placeholder="Email"
          onChange={handleInputChange}
          value={formData.email}
          required
        />
        <label
          htmlFor="people"
          className=" text-sm mt-4 text-center lg:text-left "
        >
          Personas
        </label>
        <input
          type="number"
          name="people"
          id="people"
          className="border-2 mt-2 text-center lg:text-left"
          placeholder=""
          onChange={handleInputChange}
          value={formData.people}
          required
        />
        <label
          htmlFor="comments"
          className=" text-sm mt-4 text-center lg:text-left "
        >
          Comentarios
        </label>
        <textarea
          type="text-area"
          name="coomments"
          id="comments"
          className="border-2 mt-2 text-center lg:text-left"
          placeholder="Comentarios..."
          onChange={handleInputChange}
          value={formData.comments}
          required
        />
        <div className="grid grid-cols-2 mt-2 mb-4 px-4 w-full h-full">
          <div
            className="w-1/2 mx-[25%] bg-black text-white flex flex-col text-center relative cursor-pointer"
            onClick={() => setShow(true)}
          >
            <p>Entrada</p>
            {!inicio ? (
              <div>
                <p className="text-6xl">{hoy.getDate()}</p>
                <p className="mt-2">
                  {monthNames[hoy.getMonth()]}, {hoy.getFullYear()}
                </p>
                <div>
                  <AiOutlineCaretDown className="absolute top-[50%] right-[10%]" />
                </div>
              </div>
            ) : (
              <div>
                <p className="text-6xl">{inicio.getDate()}</p>
                <p className="mt-2">
                  {monthNames[inicio.getMonth()]}, {inicio.getFullYear()}
                </p>
                <div>
                  <AiOutlineCaretDown className="absolute top-[50%] right-[10%]" />
                </div>
              </div>
            )}
          </div>
          <div
            className="w-1/2 mx-[25%] bg-black text-white flex flex-col text-center relative cursor-pointer"
            onClick={() => setShow(true)}
          >
            <p>Salida</p>
            {!fin ? (
              <div>
                <p className="text-6xl">{despues.getDate()}</p>
                <p className="mt-2">
                  {monthNames[despues.getMonth()]}, {despues.getFullYear()}
                </p>

                <div>
                  <AiOutlineCaretDown className="absolute top-[50%] right-[10%]" />
                </div>
              </div>
            ) : (
              <div>
                <p className="text-6xl">{fin.getDate()}</p>
                <p className="mt-2">
                  {monthNames[fin.getMonth()]}, {fin.getFullYear()}
                </p>
                <div>
                  <AiOutlineCaretDown className="absolute top-[50%] right-[10%]" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={`mt-4 ${!show ? "hidden" : "block"}`}>
          <Calendario
            inicio={inicio}
            fin={fin}
            setInicio={setInicio}
            setFin={setFin}
            setShow={setShow}
          />
        </div>
        <div className="flex flex-row justify-end">
          <p>Total: ${total}</p>
        </div>
        <button
          className="w-full bg-black text-white text-sm uppercase font-semibold py-4 mt-4"
          onClick={handleSubmit}
          type="submit"
        >
          continue
        </button>
      </form>
    </div>
  );
}

export default Reservacion;
