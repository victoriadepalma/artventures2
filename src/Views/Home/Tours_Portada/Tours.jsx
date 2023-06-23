import React from 'react'
import biblioteca from "../../../assets/imagenes/imagen2.png"
import "./Tours.css"


export const Tours = () => {
  return (
    <div className='tours'>
        <div className='square'>
        <img className="imagen" src = {biblioteca}></img>
        </div>
        <h1 className='titulo-tours'>Tours</h1>
        <p className='info-t'>
            Pinceladas por la Universidad.
            <br></br>
            Ruta de Esculturas.
            <br></br>
            Caminando entre Arte y Naturaleza.
            </p>
    </div>
  )
}