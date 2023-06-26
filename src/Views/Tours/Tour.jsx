import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Carousel } from '../../components/Carousel/Carousel'
import {useDispatch,useSelector} from 'react-redux'


export const Tour = ({tour}) => {
  const { tours, obras } = useSelector((state) => ({
    ...state.tours,
  }));
  const navigate = useNavigate()
  console.log(tour)

  const goToDetail=()=>{
    navigate(`/book/${tour.id}`)
  }

  return (
    <>
    
    <div className='tour'>
   {obras.filter((obra)=>obra.ID_tour==tour.id).length > 0 &&
        <Carousel obras={obras.filter((obra)=>obra.ID_tour==tour.id).splice(0,4)} />}
    
    <h1 className='tour-name'><span>{tour.name_tour}</span></h1>
    <h1 className='tour-name tour-name2'><span>{tour.name_tour}</span></h1>
    

    <button className='ver-mas-button' onClick={()=>{goToDetail()}}>Ver más</button>
        
    
    </div>
  </>
  )
}

