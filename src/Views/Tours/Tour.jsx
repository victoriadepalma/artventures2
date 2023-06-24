import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '../../components/Carousel/Carousel'

export const Tour = ({item}) => {
  return (
    <>
    
    <div className='tour'>
        <Carousel/>
    <h1 className='tour-name'>TITULO</h1>
    <Link to= "/book"> <button className='ver-mas-button'>Ver más</button> </Link>
        
    <div className='square-tour'>
    </div>
    
    </div>
  </>
  )
}

