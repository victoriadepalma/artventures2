import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/imagenes/logo2.png";
import "./Navbar.css"

export const Navbar = () => {
 
  
  return (
    
    <nav>
      <div className= "logo-container">
      <NavLink to = "/" > 
        <img src = {logo}></img>
      ArtVentures </NavLink>
       
      </div>
      <>
      <div className= "navbar-middle">
        <NavLink to="/tours">  Tours </NavLink>
        <NavLink to="/events">  Events </NavLink>
        <NavLink  to="/book">  Book </NavLink>
      </div>
      </>

      <div className='navbar-right'>
        <NavLink  to="/login">  Iniciar Sesión </NavLink>
        <NavLink  to="/signup">  Registrarse </NavLink>

       
       
        </div>
    </nav>

  )
}

