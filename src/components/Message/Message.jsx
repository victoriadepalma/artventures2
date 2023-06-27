import { useState, useEffect } from "react";
import "./Message.css";
import img1 from "../../assets/imagenes/biblioteca.jpg";
import img2 from "../../assets/imagenes/cara1.png";
import img3 from "../../assets/imagenes/gandhi.png";
import img4 from "../../assets/imagenes/escultura.png";

export const Message = () => {
   
    return (
      <div className="overlay">
       <div className="message-container">
        <h1>Desea realizar alguna contribución?</h1>
        <div className="button-container">
          <button className="button-dismiss">Cancelar</button>
          <button className="button">Contribuir</button>
        </div>
       </div>
      </div>
    );
  };