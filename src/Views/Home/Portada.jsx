import React from 'react'
import { Link } from 'react-router-dom'
import esucltura from "../../assets/imagenes/escultura.png"
export const Portada = () => {
  return (
    <div className='portada'>
    <img className="escultura" src={esucltura}></img>
    <h1 className='aventuras'>Aventuras Unimet</h1>
    <p className='aventuras-info'>Una nueva forma de vivir el arte <br></br>
    universitario y divertirse</p>
    <Link to = "/tours"><button>Empieza tu Viaje</button></Link>
    
    </div>
  )
}
