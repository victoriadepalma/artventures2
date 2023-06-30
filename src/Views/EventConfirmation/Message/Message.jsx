import { useState, useEffect } from "react";
import "./Message.css";


export const Message = ({show,setShow}) => {
   
    return (
      <div className={show ? "overlay active" :"overlay"}>
       <div className="message-container">
        <h1>Desea realizar alguna contribución?</h1>
        <div className="button-container">
          <button className="button-dismiss" onClick={()=>{setShow()}}>Cancelar</button>
          <button className="button" onClick={()=>{console.log('contribucion')}}>Contribuir</button>
        </div>
       </div>
      </div>
    );
  };