import React, { useState } from 'react';
import { LogoN } from '../../components/Navbar/LogoN';
import { Calendar } from './Calendar/Calendar';
import './Events.css';

export const Events = ({title_event}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <LogoN />
      <div className='events'>
        <div className='title-container'>
          <h1 className='title-event'>{title_event}</h1>
          <div className='more'>
            <button className="btn" onClick={handleButtonClick}>
              More 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className={`more-menu ${isClicked ? 'show-menu' : ''}`}>
              <a href="#">Pinceladas por la Universidad</a>
              <a href="#">Rutas de Esculturas</a>
              <a href="#">Caminando entre Jardines</a>
            </div>
          </div>
        </div>
      </div>
      <Calendar/>
    </>
  )
}
