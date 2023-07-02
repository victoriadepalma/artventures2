
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
import { reserve,  getTour, listTours, } from '../../Redux/actions/actions';
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
  const { currentTour,currentReserva,tours} = useSelector((state) => ({
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

  const makeReservation=(cant)=>{
    const data={
       ID_tour:id,
       ID_user:user.uid,
       cantidad_persona:cant,
       contribucion:false,
       fecha:selectedDate,
       horario:selectedHour,
       feedback:false
      }
    dispatch(reserve(data))
  }

  useEffect(() => {

    if(!currentTour && id){
      dispatch(getTour(id));
    }
  

  }, []);

  useEffect(() => {

    if(tours.length==0){
      dispatch(listTours());
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
    {
      currentTour &&        <Message currentTour={currentTour} selectedDate={selectedDate} selectedHour={selectedHour} currentReserva={currentReserva} show={showMessage} setShow={()=>{setShowMessage(!showMessage)}} makeReservation={(cant)=>{makeReservation(cant)}}/>
    }


      <div className='events'>
        <div className='title-container'>
        
          <div className='more'>
            <button className=" title-event btn" onClick={handleButtonClick}>
             {currentTour ? currentTour.name_tour : 'Escoge un Tour Para ver el Calendario'}
              <i className="fa fa-caret-down"></i>
            </button>
            
            <div className={`more-menu ${isClicked ? 'show-menu' : ''}`}>
              {tours.map((tour)=>{
      return <a href={`/events/${tour.id}`}>{tour.name_tour}</a>
              })}
            </div>
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
