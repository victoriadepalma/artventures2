
import React, { useState } from 'react';
import { Calendar } from './Calendar/Calendar';
import { Calendar2 } from './Calendar2/Calendar2';
import './Events.css';

export const Events = ({title_event}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  }


  return (
    <>

      <div className='events'>
        <div className='title-container'>
        
          <div className='more'>
            <button className=" title-event btn" onClick={handleButtonClick}>
             {title_event ? title_event : 'More'}
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
        <div className='calendar-container'>
        <Calendar2/>
        </div>
       
      </div>
   
    </>
  )
}
