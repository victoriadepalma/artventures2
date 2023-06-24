import React from 'react'
import { Carousel } from '../../components/Carousel/Carousel'
import { LogoN } from '../../components/Navbar/LogoN'
import { Tour } from './Tour'
import "./Tours.css"

export const Tours = () => {
  return (
  <> 
 
 <LogoN/>
     <Tour name_tour="PINCELADAS POR LA UNIVERSIDAD" link_tour={"/book-pinceladas"}/>
     <Tour name_tour="RUTAS DE ESCULTURAS" link_tour={"/book-rutas-esculturas"}/>
     <Tour name_tour="CAMINANDO ENTRE JARDINES" link_tour={"/book-caminando-jardines"}/>
     
    


  </>
  )
}
