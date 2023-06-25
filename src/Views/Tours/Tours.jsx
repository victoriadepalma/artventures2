import React,{useEffect} from 'react'
import { Carousel } from '../../components/Carousel/Carousel'
import { Tour } from './Tour'
import "./Tours.css"
import {useDispatch,useSelector} from 'react-redux'
import { listArtists, listLocations, listTours } from '../../Redux/actions/actions'

export const Tours = () => {
  const { tours } = useSelector((state) => ({
    ...state.tours,
  }));
  const dispatch=useDispatch()


  useEffect(() => {
dispatch(listTours())
  }, []);

  return (
  <> 
    {tours.map((tour)=>{
      return <Tour tour={tour}/>
    })}
    
    
  
     
    


  </>
  )
}
