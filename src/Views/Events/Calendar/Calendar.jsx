import React from 'react'


import { useEffect, useRef } from "react";
import "./Calendar.css";





export const Calendar = () => {
  const daysRef = useRef(null);
  const currentDateRef = useRef(null);
  const prevIconRef = useRef(null);
  const nextIconRef = useRef(null);

  useEffect(() => {
    let date = new Date(),
      currYear = date.getFullYear(),
      currMonth = date.getMonth();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const renderCalendar = () => {
      let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
      let liTag = "";
      for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
      }
      for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday =
          i === date.getDate() &&
          currMonth === new Date().getMonth() &&
          currYear === new Date().getFullYear()
            ? "active"
            : "";
        liTag += `<li class="${isToday}">${i}</li>`;
      }
      for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
      }
      currentDateRef.current.innerText = `${months[currMonth]} ${currYear}`;
      daysRef.current.innerHTML = liTag;
    };

    renderCalendar();

    const prevNextIcon = [prevIconRef.current, nextIconRef.current];

    prevNextIcon.forEach((icon) => {
      icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
          date = new Date(currYear, currMonth, new Date().getDate());
          currYear = date.getFullYear();
          currMonth = date.getMonth();
        } else {
          date = new Date();
        }
        renderCalendar();
      });
    });

    return () => {
      prevNextIcon.forEach((icon) => {
        icon.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="wrapper">
      <header>
        <p className="current-date" ref={currentDateRef}></p>
        <div className="icons">
          <span
            id="prev"
            className="material-symbols-rounded"
            ref={prevIconRef}

          > <div className="square_slider_left-c"><i class="arrow-c left"></i></div>
            
          </span>
          <span
            id="next"
            className="material-symbols-rounded"
            ref={nextIconRef}
          > <div className="square_slider_right-c"><i class="arrow-c right"></i></div>
          </span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li >S</li>
          <li>M</li>
          <li>T</li>
          <li >W</li>
          <li>T</li>
          <li >F</li>
          <li>S</li>
        </ul>
        <ul className="days" ref={daysRef}></ul>
      </div>
    </div>
  );

  
}
