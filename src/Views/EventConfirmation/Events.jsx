
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
import './Events.css';
import { UserAuth } from '../../context/AuthContext';
import { useDispatch, useSelector } from "react-redux";
import {Message} from './Message/Message'
import { db } from '../../firebase';
import { reserve,  getTour, getReserva, resetReserva, } from '../../Redux/actions/actions';
import { Link, useNavigate } from "react-router-dom";
// const currentReserva= {
//   ID_tour:'2ssHeCkRnkHISHKBV0Ir',
//   ID_user:'XRCDH9yiegS84Ohy2xFjNiaGYMs1',
//   cantidad_persona:1,
//   contribucion:false,
//   fecha:'7/5/2023',
//   horario:'12'

// }
// const currentTour = {
//   description:"Ruta de Escultura es un tour que te lleva a explorar las esculturas públicas más destacadas de la ciudad, con una guía experta que te ayudará a entender el significado y la historia detrás de cada obra",
//   disponibilidad:true,
//   fecha:['1','2','3','5'],
//   horario:['12','7'],
//   name_tour:'Ruta de Escultura',
//   id:'2ssHeCkRnkHISHKBV0Ir'
// }

export const EventConfirmation = ({title_event}) => {
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const {id,reservaId}=useParams()
  const [showMessage, setShowMessage] = useState(false);
  const { currentTour,currentReserva} = useSelector((state) => ({
    ...state.tours,
  }));
  const { loading, user } = UserAuth()

  const getHour = (hour) => {
    if (hour < 12) {
      return `${hour}:00 AM`;
    } else if (hour == 12) {
      return `${12}:00 PM`;
    } else {
      return `${hour - 12}:00 PM`;
    }
  };

  useEffect(() => {

 dispatch(getTour(id))
 dispatch(getReserva(reservaId))
  

  }, []);

  useEffect(() => {

if(currentReserva && !currentReserva?.contribucion){
  setShowMessage(true)
}
     
   
     }, [currentReserva]);

  return (
    <>
          <Message show={showMessage} setShow={()=>{setShowMessage(!showMessage)}} />

      <div className='events'>
        {currentReserva ?
<>
       <h1>Su reserva a {currentTour.name_tour} se ha realizado de manera exitosa</h1>
       <h2>Fecha: {currentReserva.fecha}</h2>
       <h2>Hora: {getHour(currentReserva.horario)}</h2>
       <button className="finalizar"onClick={()=>{dispatch(resetReserva());navigate('/')}}>Finalizar</button>
       </>:  <h1>No existe la reserva</h1>}
      </div>

    </>
  )
}
