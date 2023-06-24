import React from 'react'
import { LogoN } from '../../components/Navbar/LogoN'
import './Book.css'
export const Book = ({title, tour_info}) => {
  return (
  <>
       <LogoN/>
    <div className='book'> 
    <h1 className='titulos'>{title}</h1>
    <p className='parrafos'>{tour_info}</p>
    <button className='b'>Reservar</button>
    </div>
   </>
  )
}
