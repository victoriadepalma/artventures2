
import React, { useState,useEffect } from 'react';
import { Calendar } from './Calendar/Calendar';
import { Calendar2 } from './Calendar2/Calendar2';
import {Message} from './Message/Message'
import { useParams } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore"; 
import './Events.css';
import { UserAuth } from '../../context/AuthContext';
import { useDispatch, useSelector } from "react-redux";
import { db } from '../../firebase';
import { reserve,  getTour, } from '../../Redux/actions/actions';
import { Link, useNavigate } from "react-router-dom";
// const currentTour = {
//   description:"Ruta de Escultura es un tour que te lleva a explorar las esculturas públicas más destacadas de la ciudad, con una guía experta que te ayudará a entender el significado y la historia detrás de cada obra",
//   disponibilidad:true,
//   fecha:['1','2','3','5'],
//   horario:['12','7'],
//   name_tour:'Ruta de Escultura',
//   id:'2ssHeCkRnkHISHKBV0Ir'
// }

export const Events = ({title_event}) => {
  const dispatch =useDispatch()
  const navigate=useNavigate()
  const [isClicked, setIsClicked] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const {id}=useParams()
  const [showMessage, setShowMessage] = useState(false);
  const { currentTour,currentReserva} = useSelector((state) => ({
    ...state.tours,
  }));
  const { loading, user } = UserAuth()
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  }

console.log('jmjcdjnj',user)
  const reserveShow =async(date, time)=>{
    setSelectedDate(date)
    setSelectedHour(time)
    setShowMessage(true)

  }

  const makeReservation=()=>{
    const data={
       ID_tour:id,
       ID_user:user.uid,
       cantidad_persona:1,
       contribucion:false,
       fecha:selectedDate,
       horario:selectedHour,
       feedback:false
      }
    dispatch(reserve(data))
  }

  useEffect(() => {

    if(!currentTour){
      dispatch(getTour(id));
    }
  

  }, []);

  useEffect(() => {

    if(currentReserva !=undefined){
     setShowMessage(false)
navigate(`/events/${id}/confirmation/${currentReserva.id}`)
    }
  

  }, [currentReserva]);
  return (
    <>
       <Message currentReserva={currentReserva} show={showMessage} setShow={()=>{setShowMessage(!showMessage)}} makeReservation={()=>{makeReservation()}}/>

      <div className='events'>
        <div className='title-container'>
        
          <div className='more'>
            <button className=" title-event btn" onClick={handleButtonClick}>
             {currentTour ? currentTour.name_tour : 'More'}
              <i className="fa fa-caret-down"></i>
            </button>
            {id ==undefined &&
            <div className={`more-menu ${isClicked ? 'show-menu' : ''}`}>
              <a href="#">Pinceladas por la Universidad</a>
              <a href="#">Rutas de Esculturas</a>
              <a href="#">Caminando entre Jardines</a>
            </div>}
          </div>
        </div>
        {/* <Calendar/> */}
        {currentTour  &&
        <div className='calendar-container'>
        <Calendar2 tour={currentTour} reserve={(date, time)=>{reserveShow(date, time)}}/>
        </div>
}
       
      </div>

    </>
  )
}
