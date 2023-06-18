import React from 'react'
import { Link } from 'react-router-dom'
import esucltura from "../../assets/imagenes/escultura.png"
import { Aprende } from './Aprende'
export const Portada = () => {
  return (
    <div className='portada'>
    <img className="escultura" src={esucltura}></img>
    <h1 className='aventuras'>Aventuras Unimet</h1>
    <p className='aventuras-info'>Una nueva forma de vivir el arte <br></br>
    universitario y divertirse</p>
    <Link to = "/tours"><button className='b'>Empieza tu Viaje</button></Link>
    <p className='nuevo-evento-title'>Nuevo Evento</p>
    <p className='nuevo-evento'>Una sinfonía pictórica para <br></br> celebrar el Cincuentanario<br></br>  de la Unimet</p>
    <Aprende/>
    <p className='sentimiento-title'>Sentimiento Unimetano</p>
    <p className='sentimiento'>Estatua al fundador Eugenio<br></br>Mendoza </p>
    <Aprende/>
    <h1 className='plus'>+</h1>
    <h1 className='minus'>_</h1>
    
    </div>
  )
}
