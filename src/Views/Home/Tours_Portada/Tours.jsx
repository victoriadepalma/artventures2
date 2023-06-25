import React from 'react'
import biblioteca from "../../../assets/imagenes/imagen2.png"
import "./Tours.css"
import {useDispatch,useSelector} from 'react-redux'


export const Tours = () => {
  const { tours } = useSelector((state) => ({
    ...state.tours,
  }));
  return (
    <>
    {tours.length > 0 &&
    <div className='tours'>
        <div className='square'>
        <img className="imagen" src = {biblioteca}></img>
        </div>
        <h1 className='titulo-tours'>Tours</h1>
        <p className='info-t'>
        {tours.slice(0, 5).map((tour)=>{
          return <p className='info-t-item'>{tour.nombre}</p>
        })}
       
        </p>
    </div>}
    </>
  )
}