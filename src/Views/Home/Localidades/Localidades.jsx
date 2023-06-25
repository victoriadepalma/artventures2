import React from 'react'
import biblioteca from "../../../assets/imagenes/estatua1.png"
import {useDispatch,useSelector} from 'react-redux'
import "./Localidades.css"


export const Localidades = () => {
  const { locations } = useSelector((state) => ({
    ...state.tours,
  }));

  return (
    <>
    {locations.length > 0 &&
    <div className='localidades'>
        <div className='square'>
        <img className="imagen" src = {biblioteca}></img>
        </div>
        <h1 className='titulo-localidades'>Localidades</h1>
        <p className='info-l'>
        {locations.slice(0, 5).map((location)=>{
          return <p className='info-l-item'>{location.nombre}</p>
        })}
       
        </p>
    </div>
}
    </>
  )
}
