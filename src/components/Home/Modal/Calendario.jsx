import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

function Calendario({ inicio, fin, setInicio, setFin, setShow, plan, planPrecio, guestsPrecio }) {
  console.log(plan, planPrecio)
  console.log(guestsPrecio)
  const [actualMonth, setActualMonth] = useState(1);

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
  const today = new Date();
  console.log(today);
  console.log(today.getDay());
  console.log(today.getMonth());
  console.log(today.getDate());
  const currentMonthName = monthNames[today.getMonth()];
  console.log(currentMonthName);
  const currentYear = today.getFullYear();
  console.log(currentYear);
  const firstDayOfMonth = new Date(currentYear, today.getMonth(), 1).getDay();
  console.log(firstDayOfMonth);
  const daysInMonth = new Date(
    currentYear,
    today.getMonth() + actualMonth,
    0
  ).getDate();
  console.log(daysInMonth);

  function handleDayClick(day) {
    console.log(day);
    if (!inicio) {
      // Si no hay día de inicio seleccionado, establecerlo
      setInicio(day);
      localStorage.setItem("inicio", day);
    } else if (!fin && day > inicio) {
      // Si hay día de inicio pero no hay día de fin y el día seleccionado es mayor que el día de inicio, establecerlo como día de fin
      setFin(day);
      localStorage.setItem("fin", day);
    } else {
      // Si hay día de inicio, día de fin y se hace clic en un día diferente, reiniciar la selección
      setInicio(null);
      localStorage.setItem("inicio", null);
      setFin(null);
      localStorage.setItem("fin", null);
    }
  }

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      
      
      <div
        key={new Date(currentYear, today.getMonth(), i)}
        className={`mb-2 mt-4 relative
        ${
          i > today.getDate()
            ? "cursor-pointer lg:hover:bg-[#d3cbc0] lg:hover:mx-2 lg:hover:rounded-full"
            : "text-gray-200"
        }
          ${
            i === today.getDate()
              ? " text-white bg-[#d3cbc0]  rounded-full mx-0 lg:mx-2 "
              : "text-black"
          } 
        ${
          i === inicio?.getDate() && inicio?.getMonth() === today.getMonth()
            ? "bg-[#d3cbc0] rounded-l-full"
            : null
        } 
        ${
          i === fin?.getDate() && fin?.getMonth() === today.getMonth()
            ? "bg-[#d3cbc0] rounded-r-full"
            : null
        } 
      ${
        inicio?.getDate() &&
        fin?.getDate() &&
        i > inicio?.getDate() &&
        i < fin?.getDate() &&
        inicio?.getMonth() === today.getMonth()
          ? "bg-[#c7c1b8]"
          : null
      }
        ${
          inicio?.getDate() &&
          fin?.getDate() &&
          inicio?.getMonth() != fin?.getMonth() &&
          i > inicio?.getDate()
            ? "bg-[#c7c1b8]"
            : null
        }
        `}
        onClick={() => {
          if (i > today.getDate()) {
            handleDayClick(new Date(currentYear, today.getMonth(), i));
          }
        }}
      >
        <div className="flex flex-col">
        <span className="text-[10px]">${planPrecio + guestsPrecio}</span>
        {i}
      </div>
      </div>
    );
  }
  const emptyCells = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    emptyCells.push(<div key={i}>&nbsp;</div>);
  }

  function getNextMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 1);
  }

  const nextMonth = getNextMonth(today);
  const nextMonthName = monthNames[nextMonth.getMonth()];
  const nextMonthYear = nextMonth.getFullYear();
  const nextMonthFirstDay = new Date(
    nextMonthYear,
    nextMonth.getMonth(),
    1
  ).getDay();
  const nextMonthDaysInMonth = new Date(
    nextMonthYear,
    nextMonth.getMonth() + 1,
    0
  ).getDate();

  const nextMonthDays = [];
  for (let i = 1; i <= nextMonthDaysInMonth; i++) {
    nextMonthDays.push(
      <div
        key={new Date(currentYear, today.getMonth(), i)}
        className={`mb-2 mt-4 relative cursor-pointer lg:hover:bg-[#d3cbc0] lg:hover:mx-2 lg:hover:rounded-full
       
        ${
          i === inicio?.getDate() && inicio?.getMonth() === today.getMonth() + 1
            ? "bg-[#d3cbc0] rounded-l-full"
            : null
        } 
        ${
          i === fin?.getDate() && fin?.getMonth() === today.getMonth() + 1
            ? "bg-[#d3cbc0] rounded-r-full"
            : null
        } 
      ${
        inicio?.getDate() &&
        fin?.getDate() &&
        i > inicio?.getDate() &&
        i < fin?.getDate() &&
        fin?.getMonth() === today.getMonth() + 1
          ? "bg-[#c7c1b8]"
          : null
      }
      ${
        inicio?.getDate() &&
        fin?.getDate() &&
        inicio?.getMonth() != fin?.getMonth() &&
        i < fin?.getDate()
          ? "bg-[#c7c1b8]"
          : null
      }
             
             
             `}
        onClick={() =>
          handleDayClick(new Date(currentYear, today.getMonth() + 1, i))
        }
      >
        <div className="flex flex-col">
        <span className="text-[10px]">${planPrecio + guestsPrecio}</span>
        {i}
        </div>
      </div>
    );
  }

  const nextMonthEmptyCells = [];
  for (let i = 0; i < nextMonthFirstDay; i++) {
    nextMonthEmptyCells.push(<div key={i}>&nbsp;</div>);
  }

  return (
    <div className="flex flex-col w-full h-full items-center  mt-4 relative z-10 ">
      <div className="flex flex-row w-full h-full justify-center  ">
        <div
          className="flex flex-col lg:flex-row h-full w-full bg-white-200 rounded-md
           bg-white lg:border lg:border-gray-100 py-6 ">
          <div className="flex flex-col w-full h-full lg:border-r-2 lg:border-black">
          <div className=" w-full h-full  flex flex-row  justify-end absolute -top-4">
              <RxCross2
                className="mr-4 cursor-pointer  text-2xl text-black lg:hidden"
                onClick={() => setShow(false)}
              />
            </div>
            <div className="flex flex-row justify-center mb-4">
              <div className="text-xl font-bold text-black">
                {currentMonthName} {currentYear}
              </div>
            </div>
            <div className="grid grid-cols-7 text-center text-black font-bold">
              <div>D</div>
              <div>L</div>
              <div>M</div>
              <div>M</div>
              <div>J</div>
              <div>V</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 text-center">
              {emptyCells}
              {days}
            </div>
          </div>
          <div className="flex flex-col w-full h-full relative">
            <div className=" w-full h-full  flex flex-row  justify-end absolute -top-4">
              <RxCross2
                className="hidden lg:flex mr-4 cursor-pointer text-2xl text-black"
                onClick={() => setShow(false)}
              />
            </div>
            <div className="flex flex-row justify-center mb-4">
              <div> </div>
              <div className="text-xl font-bold text-black">
                {nextMonthName} {nextMonthYear}
              </div>
            </div>
            <div className="grid grid-cols-7 text-center font-bold text-black">
              <div>D</div>
              <div>L</div>
              <div>M</div>
              <div>M</div>
              <div>J</div>
              <div>V</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 text-center text-black">
              {nextMonthEmptyCells}
              {nextMonthDays}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendario;
