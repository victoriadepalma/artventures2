import React from 'react'
import { Mision } from './Mision'
import "./Home.css"
import { Portada } from './Portada'
import { Localidades } from './Localidades'
import { Navbar } from '../../components/Navbar/Navbar'

export const Home = () => {
  return (
    <>
    <Navbar />
    <Portada/>
    <Mision/>
    <Localidades/>
    </>
  )
}
