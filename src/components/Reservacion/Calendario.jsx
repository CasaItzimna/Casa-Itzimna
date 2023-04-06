import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Calendario() {
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
  console.log(today.getMonth());
  const currentMonthName = monthNames[today.getMonth()];
  console.log(currentMonthName);
  const currentYear = today.getFullYear();
  console.log(currentYear);
  const firstDayOfMonth = new Date(currentYear, today.getMonth(), 1).getDay();
console.log(firstDayOfMonth)
  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
  console.log(daysInMonth);

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(<div key={i} className="mb-2 mt-4">{i}</div>);
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
  const nextMonthFirstDay = new Date(nextMonthYear, nextMonth.getMonth(), 1).getDay();
  const nextMonthDaysInMonth = new Date(nextMonthYear, nextMonth.getMonth() + 1, 0).getDate();

  const nextMonthDays = [];
  for (let i = 1; i <= nextMonthDaysInMonth; i++) {
    nextMonthDays.push(<div key={i} className="mb-2 mt-4">{i}</div>);
  }

  const nextMonthEmptyCells = [];
  for (let i = 0; i < nextMonthFirstDay; i++) {
    nextMonthEmptyCells.push(<div key={i} >&nbsp;</div>);
  }

  return (
    <div className="flex flex-row w-full h-full px-12 mt-4">

    <div className="flex flex-col w-1/2 h-full border-r-2 border-black">
      <div className="flex flex-row justify-center mb-4">
        <div className="text-xl font-bold">{currentMonthName} {currentYear}</div>
        
      </div>
      <div className="grid grid-cols-7 text-center font-bold">
        <div>L</div>
        <div>M</div>
        <div>M</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
        <div>D</div>
      </div>
      <div className="grid grid-cols-7 text-center">
      {emptyCells}
        {days}
      </div>
      
    </div>
    <div className="flex flex-col w-1/2 h-full">
      <div className="flex flex-row justify-center mb-4">
        <div> </div>
        <div className="text-xl font-bold">{nextMonthName} {nextMonthYear}</div>
        
      </div>
      <div className="grid grid-cols-7 text-center font-bold">
        <div>L</div>
        <div>M</div>
        <div>M</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
        <div>D</div>
      </div>
      <div className="grid grid-cols-7 text-center">
      {nextMonthEmptyCells}
    {nextMonthDays}
      </div>
      
    </div>
    </div>
  );
}

export default Calendario;
