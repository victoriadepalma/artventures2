import React,{useEffect} from 'react'
import { Carousel } from '../../components/Carousel/Carousel'
import { Tour } from './Tour'
import { useNavigate, useParams } from "react-router-dom";
import "./Tours.css"
import {useDispatch,useSelector} from 'react-redux'
import { listArtists, listLocations, listTours,listObras } from '../../Redux/actions/actions'


export const Tours = () => {
  const { tours, obras } = useSelector((state) => ({
    ...state.tours,
  }));

  const dispatch=useDispatch()


  useEffect(() => {
dispatch(listTours())
dispatch(listObras())
  }, []);

  return (
  <> 
    {tours.filter((tour)=>tour.disponibilidad).map((tour)=>{
      return <Tour tour={tour}/>
    })}
    
    
  
     
    


  </>
  )
}
