import React from 'react'
import { Mision } from './Mision'
import "./Home.css"
import { Portada } from './Portada'
import { Localidades } from './Localidades'

export const Home = () => {
  return (
    <>
    <Portada/>
    <Mision/>
    <Localidades/>
    </>
  )
}
