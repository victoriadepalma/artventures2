import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '../../components/Carousel/Carousel'

export const Tour = ({item}) => {
  return (
    <>
    
    <div className='tour'>
        <Carousel/>
        <div className='tour-name-container'>
    <h1 className='tour-name'><span>TITULO</span></h1>
    <h1 className='tour-name tour-name2'><span>TITULO</span></h1>
    
    </div>
    <button className='ver-mas-button'>Ver más</button>
        
    {/* <div className='square-tour'>
    </div> */}
    
    </div>
  </>
  )
}

