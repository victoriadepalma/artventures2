import React from 'react'
import { Link } from 'react-router-dom'
import { LogoN } from '../../components/Navbar/LogoN'
import './Book.css'
export const Book = ({title, tour_info, link}) => {
  return (
  <>
       <LogoN/>
    <div className='book'> 
    <h1 className='titulos-book'>{title}</h1>
    <p className='parrafos-book'>{tour_info}</p>
    <Link to={link}><button className='b-book'>Reservar</button></Link>
    </div>
   </>
  )
}
