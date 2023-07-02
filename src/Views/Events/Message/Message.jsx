import { useState, useEffect } from "react";
import "./Message.css";


export const Message = ({show,setShow,makeReservation}) => {
   
    return (
      <div className={show ? "overlay active" :"overlay"}>
       <div className="message-container">
        <h1>Desea reservar el tour de <span className="bold">Pinceladas Por La Universidad</span></h1>
 <h1>el <span className="bold">31 de Mayo de 2023</span> a las <span className="bold">10:00 AM.</span></h1>
        <div className="button-container">
          <button className="button-dismiss" onClick={()=>{setShow()}}>Cancelar</button>
          <button className="button" onClick={()=>{makeReservation()}}>Reservar</button>
        </div>
       </div>
      </div>
    );
  };