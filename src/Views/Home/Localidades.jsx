import React from 'react'
import biblioteca from "../../assets/imagenes/biblioteca.jpg"

export const Localidades = () => {
  return (
    <div className='localidades'>
        <div className='square'>
        <img className="imagen" src = {biblioteca}></img>
        </div>
        <h1 className='titulo-localidades'>Localidades</h1>
        <p className='info-l'>
            Biblioteca Pedro Grases.
            CELAUP.
            Laboratorios de Computadoras de la BIblioteca.
            Sala Humanística.
            Recepción.
            Jardines.</p>
    </div>
  )
}
