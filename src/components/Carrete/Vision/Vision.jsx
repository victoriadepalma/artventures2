import React from 'react'


export const Vision = ({previous,next}) => {
  return (
    <div className='vision'>
        <h1 className='titulos'>Vision</h1>
        <p className='parrafos'>Con Unimet ArtVentures se espera ofrecer proceso cómodo, divertido y amigable para que los usuarios puedan conocer las distintas áreas de la  institución  y a la vez brindarle a asegurarle a los artistas que sus obras serán vista y apreciadas.</p>
        <div className="square_slider_left" onClick={()=>{previous()}}><i class="arrow left"></i></div>
        
        <div className="square_slider_right" onClick={()=>{next()}}><i class="arrow right"></i></div>
    </div>
  )
}