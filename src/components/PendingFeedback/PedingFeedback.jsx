import { useState, useEffect } from "react";
import "./PendingFeedback.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMultiply } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useNavigation,useNavigate, useLocation } from 'react-router-dom';

export const PendingFeedback = ({show,setShow}) => {
  const navigate=useNavigate()

   
    return (
      <div className={show ? "pending-container visible":"pending-container"}>
         <FontAwesomeIcon icon={faMultiply} className='close-menu-icon-pending' onClick={()=>{setShow()}}/>
     <h1>Recientemente has visitado tours. Dejanos tus comentarios</h1>
     
      <button onClick={()=>{navigate('/perfil');setShow()} }>Dejar Feedback</button>
   
      </div>
    );
  };