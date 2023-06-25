import React from 'react'


export const Objetivos = ({previous,next}) => {
  return (
    <div className='objetivos'>
        <h1 className='titulos'>Objetivos</h1>
        <p className='parrafos'>Entre los objetivos planteados pueden encontrarse:
        <br></br>
1-Desarrollar el sistema de información.
<br></br>
2-Exponer obras de arte de la UNIMET.
<br></br>
3-Llevar control de los visitantes de las obras.
<br></br>
4-Promover información acerca de diversas áreas de la institución. </p>
<div className="square_slider_left" onClick={()=>{previous()}}><i class="arrow left"></i></div>
        
        <div className="square_slider_right" onClick={()=>{next()}}><i class="arrow right"></i></div>
    </div>
  )
}