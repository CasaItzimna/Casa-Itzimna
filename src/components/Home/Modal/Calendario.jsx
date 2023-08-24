import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import { AppContext } from "@/context/StateContext";
import { useEffect } from "react";

function Calendario({ inicio, fin, setInicio, setFin, setShow, plan, planPrecio, guestsPrecio }) {
  console.log(plan, planPrecio)
  console.log(guestsPrecio)
  const [actualMonth, setActualMonth] = useState(1);
  const [sumMonth, setSumMonth] = useState(1)

  const {getReservaciones, reservaciones,  moneda,
    usdRate,
    eurRate} = AppContext()


  const determinarMoneda = () => {
    switch(moneda){
    
      case "USD":
        return usdRate
        break;
      case "EUR":
        return eurRate
        break;
        default:
          return 1
    }
  }


  useEffect(() => {
    getReservaciones()
  }, [])


  useEffect(() => {
    if(sumMonth == 12){
      console.log("es mayor")
      setSumMonth(1)
    }
  }, [sumMonth])
  

  console.log(reservaciones)
  


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
  function getTodayMonth(date) {
    return new Date(date.getFullYear(), date.getMonth()+sumMonth-1, 1);
  }
  const todayMonth = getTodayMonth(today)
  const currentMonthName = monthNames[todayMonth.getMonth()];
  console.log(today.getMonth()+sumMonth-1)
  console.log(currentMonthName);
  const currentYear = todayMonth.getFullYear();
  console.log(currentYear)
  const firstDayOfMonth = new Date(currentYear, todayMonth.getMonth(), 1).getDay();
  const daysInMonth = new Date(
    currentYear,
    today.getMonth() + sumMonth ,
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

  function isDateBetween(date, startDate, endDate) {
    return date >= startDate && date <= endDate;
  }

  function isDateReserved(date) {
    for (const reserva of reservaciones) {
      if(reserva.status == "aprobada"){

        const checkinDate = new Date(reserva.checkin);
        const checkoutDate = new Date(reserva.checkout);
        if (isDateBetween(date, checkinDate, checkoutDate)) {
          return true;
        }
      }
    }
    return false;
  }
  console.log(reservaciones)

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const currentDate = new Date (currentYear, todayMonth.getMonth(), i)
    const isReserved = isDateReserved(currentDate)
    days.push(
      <div
        key={new Date(currentYear, today.getMonth(), i)}
        className={`mb-2 mt-4 relative
        ${
          //Hace seleccionables los dias despues de hoy
          i > today.getDate() && !isReserved ?
             "cursor-pointer lg:hover:bg-[#d3cbc0] lg:hover:mx-2 lg:hover:rounded-full"
             : ""
        }
        ${
          //Hace seleccionables los dias despues de hoy
          i > today.getDate() && isReserved ?
             "text-gray-200 "
             : ""
        }
        ${
          //Pinta de gris los dias antes de hoy
          today.getMonth() == todayMonth.getMonth() &&
          i < today.getDate() &&
           "text-gray-200"
        }
        ${
          //Hace seleccionables todos los dias que no sean de este mes 
          today.getMonth() != todayMonth.getMonth() &&
          !isReserved &&
          "cursor-pointer  lg:hover:bg-[#d3cbc0] lg:hover:mx-2 lg:hover:rounded-full"
        }
          ${
            //Pinta de color HOY y si no el texto es negro
            today.getMonth() == todayMonth.getMonth() &&
            !isReserved &&
            i === today.getDate()
              ? " text-white bg-[#d3cbc0]  rounded-full mx-0 lg:mx-2 "
              : "text-black"
          } 
        ${
          //Pinta de media luna izq la fecha seleccionada 
          i === inicio?.getDate() && inicio?.getMonth() === todayMonth.getMonth() 
          && !isReserved
          && inicio?.getFullYear() == currentYear
            ? "bg-[#d3cbc0] rounded-l-full"
            : null
        } 
        ${
          ////Pinta de media luna der la fecha seleccionada 
          i === fin?.getDate() && fin?.getMonth() === todayMonth.getMonth()
          && !isReserved
            ? "bg-[#d3cbc0] rounded-r-full"
            : null
        } 
      ${
        //Pinta los dias que estan entre el inicio y fin
        inicio?.getDate() &&
        fin?.getDate() &&
        i > inicio?.getDate() &&
        i < fin?.getDate() &&
        inicio?.getMonth() === todayMonth.getMonth()
        && !isReserved
          ? "bg-[#c7c1b8]"
          : null
      }
        ${
          //Pinta los dias de meses diferentes acorde al mes posicionado
          inicio?.getDate() &&
          fin?.getDate() &&
          inicio?.getMonth() != fin?.getMonth() &&
          inicio?.getMonth() === todayMonth.getMonth() &&
           !isReserved &&
          i > inicio?.getDate()
            ? "bg-[#c7c1b8]"
            : null
        }
        
        ${

          //pinta los dias del mes final en el mes posicionado
          inicio?.getMonth() &&
          fin?.getMonth() &&
          inicio?.getMonth() != fin?.getMonth() &&
          today.getMonth()+sumMonth-1 == fin?.getMonth()&&
          !isReserved &&
          i< fin?.getDate() &&
          
          "bg-[#c7c1b8]"
        }
       
        `}


        //TO DO
     /*  Que No se vean las fechas ya reservadas */

        onClick={() => {
          console.log(inicio); 
          
            if(  !isReserved){
              console.log('entre')
              console.log(currentYear, todayMonth.getMonth(), i)
              handleDayClick(new Date(currentYear, todayMonth.getMonth(), i));
              
            }
            
        
        }}
      >
        <div className="flex flex-col">
        <span className="text-[10px]">${((planPrecio + guestsPrecio)*determinarMoneda()).toFixed(2)} {moneda}</span>
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
    return new Date(date.getFullYear(), date.getMonth() + sumMonth, 1);
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
     const nextCurrentDate = new Date (nextMonthYear, nextMonth.getMonth(), i)
    const isReserved = isDateReserved(nextCurrentDate)
    nextMonthDays.push(
      <div
        key={new Date(currentYear, today.getMonth()+ sumMonth, i)}
        className={`mb-2 mt-4 relative 
        ${
          //Hace seleccionables los dias despues de hoy
          !isReserved ?
             "cursor-pointer lg:hover:bg-[#d3cbc0] lg:hover:mx-2 lg:hover:rounded-full"
             : ""
        }
        ${
          //Hace seleccionables los dias despues de hoy
           isReserved ?
             "text-gray-200"
             : ""
        }
        ${
          i === inicio?.getDate() && inicio?.getMonth() === nextMonth.getMonth()
          && !isReserved  
          ? "bg-[#d3cbc0] rounded-l-full"
            : null
        } 
        ${
          i === fin?.getDate() && fin?.getMonth() === nextMonth.getMonth()
          && !isReserved 
          ? "bg-[#d3cbc0] rounded-r-full"
            : null
        } 
      ${
        inicio?.getDate() &&
        fin?.getDate() &&
        i > inicio?.getDate() &&
        i < fin?.getDate() &&
        fin?.getMonth() === nextMonth.getMonth()
        && !isReserved
          ? "bg-[#c7c1b8]"
          : null
      }
      
      ${
        inicio?.getDate() &&
        fin?.getDate() &&
        inicio?.getMonth() != fin?.getMonth() &&
        fin?.getMonth() === nextMonth.getMonth() &&
        i < fin?.getDate()
        && !isReserved
          ? "bg-[#c7c1b8]"
          : null
      }
      ${
        inicio?.getDate() &&
        fin?.getDate() &&
        inicio?.getMonth() != fin?.getMonth() &&
        inicio?.getMonth() === nextMonth.getMonth() &&
        i > inicio?.getDate()
        && !isReserved
          ? "bg-[#c7c1b8]"
          : null
      }
      
             
             
             `}
        onClick={() =>{
          if(  !isReserved){
         handleDayClick(new Date(nextMonthYear, nextMonth.getMonth(), i));
          }
        }
        }
      >
        <div className="flex flex-col">
        <span className="text-[10px]">{((planPrecio + guestsPrecio)*determinarMoneda()).toFixed(2)} {moneda}</span>
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
              <div className="text-xl font-bold text-black flex flex-row justify-center items-center gap-4">
                {
                  !inicio && !fin&&
                  <FaAngleLeft className={sumMonth-1 == 0? "hidden":"cursor-pointer z-10"} onClick={()=>setSumMonth(sumMonth-1)}  />
                }
                {console.log(currentYear)}
               <span>{currentMonthName} {currentYear}</span> 
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
              <div className="text-xl font-bold text-black flex flex-row justify-center items-center gap-4">
                {nextMonthName} {nextMonthYear}
                {
                  !inicio && !fin &&
                  <FaAngleRight className="cursor-pointer z-10" onClick={()=>setSumMonth(sumMonth+1)} />
                }
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
