import React from 'react'
import { Link } from 'react-router-dom'
import esucltura from "../../assets/imagenes/escultura.png"
import { Aprende } from './Aprende'
export const Portada = () => {
  return (
    <div className='portada'>
      <div className='column-left'>
    <h1 className='minus'>_</h1>
    <h1 className='aventuras'>Aventuras Unimet</h1>
    <p className='aventuras-info'>Una nueva forma de vivir el arte <br></br>
    universitario y divertirse</p>
    <Link to = "/tours"><button className='b'>Empieza tu Viaje</button></Link>
    </div>
    <div className='column-right'>
    {/* <h1 className='plus'>+</h1> */}
    <p className='nuevo-evento-title'>Nuevo Evento</p>
    <p className='nuevo-evento'>Una sinfonia pictorica para <br></br> celebrar el Cincuentanario<br></br>  de la Unimet</p>
    <a href="https://www.unimet.edu.ve/una-sinfonia-pictorica-para-celebrar-el-cincuentenario-de-la-unimet/" target={"_black"}><Aprende/> </a>
    <p className='nuevo-evento-title'>Sentimiento Unimetano</p>
    <p className='nuevo-evento'>Estatua al fundador Eugenio<br></br>Mendoza </p>
    <a href="http://bibliobytes.unimet.edu.ve/numero2/peq-historia.htm"target={"_black"}><Aprende/></a>
  
 
    </div>
    </div>
  )
}
