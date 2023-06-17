import React from 'react'
import { Link } from 'react-router-dom'

export const Tour = ({item}) => {
  return (
    <>
    
    <div className='tour'>
    <h1 className='tour-name'>TITULO</h1>
    <Link to= "/book"> <button className='ver-mas-button'>Ver más</button> </Link>
        
    <div className='square-tour'>
    </div>
    
    </div>
   
   
  </>
  )
}
