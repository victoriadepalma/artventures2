import React from "react";
import moment from 'moment'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import "./Calendar.css";

const mockData = ["6", "5", "2"];
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const mockHours = [9, 13, 23];

export const Calendar2 = ({tour,reserve}) => {
  const daysRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [show, setShow] = useState(false);
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [firstDayofMonth, setFirstDayofMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay()
  );
  const [lastDateofMonth, setLastDateofMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
  );


  const [lastDayofMonth, setLastDayofMonth] = useState(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()
    ).getDay()
  );
  const [lastDateofLastMonth, setLastDateofLastMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()
  );
  useEffect(() => {
    console.log(
      currentMonth,
      currentYear,
      new Date(
        new Date().getFullYear(currentYear, currentMonth, 1),
        new Date(currentYear, currentMonth, 1).getMonth(),
        new Date(
          new Date(currentYear, currentMonth, 1).getFullYear(
            currentYear,
            currentMonth,
            1
          ),
          new Date(currentYear, currentMonth, 1).getMonth() + 1,
          0
        ).getDate()
      ).getDay()
    );
    setFirstDayofMonth(
      new Date(
        new Date(currentYear, currentMonth, 1).getFullYear(),
        new Date(currentYear, currentMonth, 1).getMonth(),
        1
      ).getDay()
    );
    setLastDateofMonth(
      new Date(
        new Date(currentYear, currentMonth, 1).getFullYear(),
        new Date(currentYear, currentMonth, 1).getMonth() + 1,
        0
      ).getDate()
    );
    setLastDayofMonth(
      new Date(
        new Date().getFullYear(currentYear, currentMonth, 1),
        new Date(currentYear, currentMonth, 1).getMonth(),
        new Date(
          new Date(currentYear, currentMonth, 1).getFullYear(
            currentYear,
            currentMonth,
            1
          ),
          new Date(currentYear, currentMonth, 1).getMonth() + 1,
          0
        ).getDate()
      ).getDay()
    );
    setLastDateofLastMonth(
      new Date(
        new Date(currentYear, currentMonth, 1).getFullYear(),
        new Date(currentYear, currentMonth, 1).getMonth(),
        0
      ).getDate()
    );
  }, [currentMonth, currentYear]);

  const hola = (i, dateRange) => {
    if(tour.fecha.includes(
      new Date(currentYear, currentMonth, i)
        .getDay()
        .toString()
    ) && dateRange){
      if(selectedDate != null){
        console.log('ddd',new Date(selectedDate))
      }
      setSelectedDate(moment(new Date(currentYear, currentMonth, i)).format('l'));
      setShow(true)
    }else{
      setShow(false)
    }
   
  };

  const getHour = (hour) => {
    if (hour < 12) {
      return `${hour}:00 AM`;
    } else if (hour == 12) {
      return `${12}:00 PM`;
    } else {
      return `${hour - 12}:00 PM`;
    }
  };

  const nextMonth = () => {
    if (currentMonth == 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  const prevMonth = () => {
    if (currentMonth == 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <div className="wrapper">
      <header>
        <p className="current-date">
          {months[currentMonth]} {currentYear}
        </p>
        <div className="icons">
          {((currentMonth > new Date().getMonth() && currentYear<=new Date().getFullYear()) || currentYear>new Date().getFullYear())  &&
          <button
            className="calendar-icon-button"
            onClick={() => {
              prevMonth();
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="calendar-icon" />
          </button>}
          <button
            className="calendar-icon-button"
            onClick={() => {
              nextMonth();
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} className="calendar-icon" />
          </button>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>D</li>
          <li>L</li>
          <li>M</li>
          <li>M</li>
          <li>J</li>
          <li>V</li>
          <li>S</li>
        </ul>
        <ul className="days" ref={daysRef}>
          {[...Array(firstDayofMonth)].map((element, index) => {
            return (
              <li className="inactive"  onClick={() => {
                hola(lastDateofLastMonth - firstDayofMonth + index + 1,false);
              }}>
                {lastDateofLastMonth - firstDayofMonth + index + 1}
              </li>
            );
          })}

          {[...Array(lastDateofMonth)].map((element, index) => {
            if (
              new Date().getDate() == index + 1 &&
              currentMonth == new Date().getMonth() &&
              currentYear == new Date().getFullYear()
            ) {
              return <li     onClick={() => {
                hola(index + 1,true);
              }} className={
                tour.fecha.includes(
                  new Date(currentYear, currentMonth, index + 1)
                    .getDay()
                    .toString()
                )
                  ? selectedDate != null ? 
                new Date(selectedDate).getFullYear()==currentYear && new Date(selectedDate).getMonth()==currentMonth && index + 1 ==new Date(selectedDate).getDate()
                     
                   ? 'selectedDay' :'active' :"active"
                  : ""
              }>{index + 1}</li>;
            } else {
              return (
                <li
                  onClick={() => {
                    hola(index + 1,true);
                  }}
                  disabled={true}
                  className={
                    tour.fecha.includes(
                      new Date(currentYear, currentMonth, index + 1)
                        .getDay()
                        .toString()
                    )
                      ? selectedDate != null ? 
                    new Date(selectedDate).getFullYear()==currentYear && new Date(selectedDate).getMonth()==currentMonth && index + 1 ==new Date(selectedDate).getDate()
                         
                       ? 'selectedDay' :new Date()> new Date(currentYear, currentMonth, index + 1) ? "inactive" :"available" :new Date()> new Date(currentYear, currentMonth, index + 1) ? "inactive" :"available"
                      : new Date()> new Date(currentYear, currentMonth, index + 1) ? "inactive" :""
                  }
                >
                  {index + 1}
                </li>
              );
            }
          })}

          {[...Array(6 - lastDayofMonth)].map((element, index) => {
            return <li onClick={() => {
              hola(index + 1,false);
            }}className="inactive">{index+1}</li>;
          })}
        </ul>
      </div>
      {show &&
      <div className="hours">
        {tour.horario.map((hour, index)=>{
          return    <div onClick={()=>{reserve(selectedDate, hour)}}>{getHour(Number(hour))}</div>
        })}
      </div>}
    </div>
  );
};
