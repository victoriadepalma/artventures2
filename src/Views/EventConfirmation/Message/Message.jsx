import { useState, useEffect } from "react";
import "./Message.css";
import { Link, useNavigate } from "react-router-dom";

export const Message = ({show,setShow,currentReserva,currentTour}) => {
  const navigate=useNavigate()
   
    return (
      <div className={show ? "overlay active" :"overlay"}>
       <div className="message-container">
        <h1>Desea realizar alguna contribución?</h1>
        <div className="button-container">
          <button className="button-dismiss" onClick={()=>{setShow()}}>Cancelar</button>
          <button className="button" onClick={()=>{navigate(`/events/${currentTour}/pay/${currentReserva}`)}}>Contribuir</button>
        </div>
       </div>
      </div>
    );
  };