import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfStroke,faStar } from '@fortawesome/free-solid-svg-icons'

import './Book.css'
import Slider from '../../components/Carrete2/Slider'
export const Book = ({title, tour_info, link}) => {
  return (

    <>
    <div className='book'> 
    <div className="stars-container">
    <FontAwesomeIcon icon={faStar} className='big-star' />
    <FontAwesomeIcon icon={faStar} className='big-star' />
    <FontAwesomeIcon icon={faStar} className='big-star' />
    <FontAwesomeIcon icon={faStar} className='big-star' />
    <FontAwesomeIcon icon={faStar} className='big-star' />
    </div>
    
    <h1 className='titulos-book'>Pinceladas por la Universidad</h1>
    <p className='parrafos-book'>Con Unimet ArtVentures se espera ofrecer proceso cómodo, divertido y amigable para que los usuarios puedan conocer las distintas áreas de la  institución y a la vez brindarle a asegurarle a los artistas que sus obras serán vista y apreciadas.</p>
    <Link to={link}><button className='b-book'>Reservar</button></Link>
    </div>
    <div className='book'>
      <div className="black-container"></div>
      <div className="obras-container">
        <div className="obra-container">
          <h1 className="title">Retrato de Doña Laura</h1>
          <h1 className="title">Singre de Schlageter</h1>
          <h1 className="number">01</h1>
          <div className="obra"></div>
        </div>
        <div className="obra-container">
          <h1 className="title">Retrato de Doña Laura</h1>
          <h1 className="title">Singre de Schlageter</h1>
          <h1 className="number">01</h1>
          <div className="obra"></div>
        </div>
        <div className="obra-container">
          <h1 className="title">Retrato de Doña Laura</h1>
          <h1 className="title">Singre de Schlageter</h1>
          <h1 className="number">01</h1>
          <div className="obra"></div>
        </div>
        <div className="obra-container">
          <h1 className="title">Retrato de Doña Laura</h1>
          <h1 className="title">Singre de Schlageter</h1>
          <h1 className="number">01</h1>
          <div className="obra"></div>
        </div>
        <div className="obra-container">
          <h1 className="title">Retrato de Doña Laura</h1>
          <h1 className="title">Singre de Schlageter</h1>
          <h1 className="number">01</h1>
          <div className="obra"></div>
        </div>
        <div className="obra-container">
          <h1 className="title">Retrato de Doña Laura</h1>
          <h1 className="title">Singre de Schlageter</h1>
          <h1 className="number">01</h1>
          <div className="obra"></div>
        </div>
        <div className="obra-container">
          <h1 className="title">Retrato de Doña Laura</h1>
          <h1 className="title">Singre de Schlageter</h1>
          <h1 className="number">01</h1>
          <div className="obra"></div>
        </div>
        <div className="obra-container">
          <h1 className="title">Retrato de Doña Laura</h1>
          <h1 className="title">Singre de Schlageter</h1>
          <h1 className="number">01</h1>
          <div className="obra"></div>
        </div>
      </div>
    </div>
    <Slider/>
    </>
  )
}
