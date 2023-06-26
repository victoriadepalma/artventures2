
import React, { useState } from 'react';
import { Calendar } from './Calendar/Calendar';
import { Calendar2 } from './Calendar2/Calendar2';
import { useParams } from 'react-router-dom';
import './Events.css';

const currentTour = {
  description:"Ruta de Escultura es un tour que te lleva a explorar las esculturas públicas más destacadas de la ciudad, con una guía experta que te ayudará a entender el significado y la historia detrás de cada obra",
  disponibilidad:true,
  fecha:['1','2','3','5'],
  horario:['12','7'],
  name_tour:'Ruta de Escultura',
  id:'2ssHeCkRnkHISHKBV0Ir'
}

export const Events = ({title_event}) => {
  const [isClicked, setIsClicked] = useState(false);
  const {id}=useParams()

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  }


  return (
    <>

      <div className='events'>
        <div className='title-container'>
        
          <div className='more'>
            <button className=" title-event btn" onClick={handleButtonClick}>
             {currentTour ? currentTour.name_tour : 'More'}
              <i className="fa fa-caret-down"></i>
            </button>
            <div className={`more-menu ${isClicked ? 'show-menu' : ''}`}>
              <a href="#">Pinceladas por la Universidad</a>
              <a href="#">Rutas de Esculturas</a>
              <a href="#">Caminando entre Jardines</a>
            </div>
          </div>
        </div>
        {/* <Calendar/> */}
        {currentTour  &&
        <div className='calendar-container'>
        <Calendar2 tour={currentTour}/>
        </div>
}
       
      </div>
   
    </>
  )
}
