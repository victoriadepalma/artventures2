import React from 'react'
import biblioteca from "../../../assets/imagenes/cara1.png"
import "./Artistas.css"
import {useDispatch,useSelector} from 'react-redux'

export const Artistas = () => {
  const { artists } = useSelector((state) => ({
    ...state.tours,
  }));
 
  return (
    <>
    {artists.length > 0 &&
    <div className='artistas'>
        <div className='square'>
        <img className="imagen" src = {biblioteca}></img>
        </div>
        <h1 className='titulo-artistas'>Artistas</h1>
        <p className='info-a'>
        {artists.slice(0, 5).map((artist)=>{
          return <p className='info-a-item'>{artist.name} {artist.lastname}</p>
        })}
       
        </p>
    </div>}
    </>
  )
}