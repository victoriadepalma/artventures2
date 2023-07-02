import { useState, useEffect } from "react";
import "./Message.css";


export const Message = ({show,setShow,makeReservation,currentTour, selectedDate,selectedHour}) => {
  const [cant, setCant]=useState(1)
  const getHour = (hour) => {
    if (hour < 12) {
      return `${hour}:00 AM`;
    } else if (hour == 12) {
      return `${12}:00 PM`;
    } else {
      return `${hour - 12}:00 PM`;
    }
  };
    return (
      <div className={show ? "overlay active" :"overlay"}>
       <div className="message-container">
        <h1>Desea reservar el tour de <span className="bold">{currentTour.name_tour}</span></h1>
 <h1>el <span className="bold">{selectedDate}</span> a las <span className="bold">{getHour(selectedHour)}</span></h1>
 <div className="input">
  <input type="number" placeholder="Cantidad de personas" min={1} max={5} onChange={(e)=>{setCant(e.target.value)}}/>
 </div>
        <div className="button-container">
          <button className="button-dismiss" onClick={()=>{setShow()}}>Cancelar</button>
          <button className="button" onClick={()=>{makeReservation(cant)}}>Reservar</button>
        </div>
       </div>
      </div>
    );
  };