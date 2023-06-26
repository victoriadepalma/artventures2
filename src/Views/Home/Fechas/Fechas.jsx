import React from 'react'
import { Link } from 'react-router-dom'
import biblioteca from "../../../assets/imagenes/pinturas.png"
import "./Fechas.css"


export const Fechas = () => {
  return (
    <div className='fechas'>
        <div className='square'>
        <img className="imagen" src = {biblioteca}></img>
        </div>
        <h1 className='titulo-fechas'>Fechas</h1>
        <Link to="/events">
        <p className='info-f'>

          Ver Calendario
           
            </p>
            </Link>
    </div>
  )
}