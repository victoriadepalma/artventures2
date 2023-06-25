import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Carousel } from '../../components/Carousel/Carousel'


export const Tour = ({tour}) => {
  const navigate = useNavigate()
  console.log(tour)

  const goToDetail=()=>{
    navigate(`/book/${tour.id}`)
  }
  return (
    <>
    
    <div className='tour'>
   
        <Carousel/>
    
    <h1 className='tour-name'><span>{tour.name_tour}</span></h1>
    <h1 className='tour-name tour-name2'><span>{tour.name_tour}</span></h1>
    

    <button className='ver-mas-button' onClick={()=>{goToDetail()}}>Ver más</button>
        
    
    </div>
  </>
  )
}

