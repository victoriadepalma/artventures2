import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Mision } from './Mision'
import "./Home.css"
import { Portada } from './Portada'
import { Localidades } from './Localidades/Localidades'
import { Navbar } from '../../components/Navbar/Navbar'
import { Artistas } from './Artistas/Artistas'
import { Tours } from './Tours_Portada/Tours'
import { Fechas } from './Fechas/Fechas'
import Slider from '../../components/Carrete/Slider'
import { listArtists, listLocations, listTours } from '../../Redux/actions/actions'

export const Home = () => {
  const dispatch=useDispatch()


  useEffect(() => {
    
dispatch(listLocations())
dispatch(listArtists())
dispatch(listTours())
  }, []);
  return (
    <>

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
