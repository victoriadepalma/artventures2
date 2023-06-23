import React from 'react'
import { Mision } from './Mision'
import "./Home.css"
import { Portada } from './Portada'
import { Localidades } from './Localidades/Localidades'
import { Navbar } from '../../components/Navbar/Navbar'
import { Artistas } from './Artistas/Artistas'
import { Tours } from './Tours_Portada/Tours'
import { Fechas } from './Fechas/Fechas'
import Slider from '../../components/Carrete/Slider'

export const Home = () => {
  return (
    <>
    <Navbar />
    <Portada/>
    <Slider/>
    <div className='row-container'>
      <Localidades/>
      <Tours/>
      <Artistas/>
      <Fechas/>
    </div>
   
    </>
  )
}
