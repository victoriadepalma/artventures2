import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/imagenes/logo2.png";

export const LogoN = () => {
  return (
    <div className= "logo-container">
    <NavLink to = "/" >  <img src = {logo}></img> ArtVentures</NavLink>
  
    </div> 
      
   
  )
}
