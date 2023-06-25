import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from '../../components/Carousel/Carousel'


export const Tour = ({name_tour, link_tour}) => {
  return (
    <>
    
    <div className='tour'>
   
        <Carousel/>
    
    <h1 className='tour-name'><span>TITULO</span></h1>
    <h1 className='tour-name tour-name2'><span>TITULO</span></h1>
    

    <button className='ver-mas-button'>Ver más</button>
        
    {/* <div className='square-tour'>
    </div> */}
    
    </div>
  </>
  )
}

