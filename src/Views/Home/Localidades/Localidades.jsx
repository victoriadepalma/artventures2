import React from 'react'
import biblioteca from "../../../assets/imagenes/estatua1.png"
import "./Localidades.css"


export const Localidades = () => {
  return (
    <div className='localidades'>
        <div className='square'>
        <img className="imagen" src = {biblioteca}></img>
        </div>
        <h1 className='titulo-localidades'>Localidades</h1>
        <p className='info-l'>
            Biblioteca Pedro Grases.
            <br></br>
            CELAUP.
            <br></br>
            Laboratorios de Computadoras de la Biblioteca.
            <br></br>
            Sala Humanística.
            <br></br>
            Recepcion.
            <br></br>
            Jardines.</p>
    </div>
  )
}
