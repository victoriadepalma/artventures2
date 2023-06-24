import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '../../components/Carousel/Carousel'
import { LogoN } from '../../components/Navbar/LogoN'

export const Tour = ({name_tour, link_tour}) => {
  return (
    <>
    
    <div className='tour'>
   
        <Carousel/>
    <h1 className='tour-name'>{name_tour}</h1>
    <Link to= {link_tour}> <button className='ver-mas-button'>Ver más</button> </Link>
        
    <div className='square-tour'>
    </div>
    
    </div>
  </>
  )
}

