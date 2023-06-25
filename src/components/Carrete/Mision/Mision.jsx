import React from 'react'


export const Mision = ({previous,next,currentIndex}) => {
  return (
    <div className={currentIndex == 0 ? 'mision mision-active' : currentIndex==1 ? 'mision vision-active' : 'mision objetivos-active'}>
        <h1 className='titulos'>Mision</h1>
        <p className='parrafos'>Crear un Sistema de información para facilitar el conocimiento de las distintas obras y espacios en la UNIMET, mostrándolos de una forma
        práctica y estructurada con ayuda de una selección de tours.</p>
        
        
        <div className="square_slider_left" onClick={()=>{previous()}}><i class="arrow left"></i></div>
        
        <div className="square_slider_right" onClick={()=>{next()}}><i class="arrow right"></i></div>
    </div>
    
  )
}

