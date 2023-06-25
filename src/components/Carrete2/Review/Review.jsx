import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfStroke,faStar } from '@fortawesome/free-solid-svg-icons'

export const Review = ({previous,next,currentIndex,index,title}) => {
  return (
    <div className="mision" style={{marginLeft:currentIndex==index ? (-index*100).toString()+"%":0}}>
      <div className='review-title'>
        <h1 className='titulos'>{title}</h1>
        <div className='star-content'>
        <FontAwesomeIcon icon={faStar} className='star' />
    <FontAwesomeIcon icon={faStar} className='star' />
    <FontAwesomeIcon icon={faStar} className='star' />
    <FontAwesomeIcon icon={faStar} className='star' />
    <FontAwesomeIcon icon={faStar} className='star' />
        </div>
        </div>
        <p className='parrafos'>Crear un Sistema de información para facilitar el conocimiento de las distintas obras y espacios en la UNIMET, mostrándolos de una forma
        práctica y estructurada con ayuda de una selección de tours.</p>
        
        
        <div className="square_slider_left" onClick={()=>{previous()}}><i class="arrow left"></i></div>
        
        <div className="square_slider_right" onClick={()=>{next()}}><i class="arrow right"></i></div>
    </div>
    
  )
}

