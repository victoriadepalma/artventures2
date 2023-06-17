import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/imagenes/logo2.png";
import "./Navbar.css"

export const Navbar = () => {
  const navLinktyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      testDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    
    <nav>
      <div className= "logo-container">
      <NavLink to = "/" > 
        <img src = {logo}></img>
      ArtVentures </NavLink>
       
      </div>
      <>
      <div className= "navbar-middle">
        <NavLink style={navLinktyles} to="/tours">  Tours </NavLink>
        <NavLink style={navLinktyles} to="/events">  Events </NavLink>
        <NavLink style={navLinktyles} to="/book">  Book </NavLink>
      </div>
      </>

      <div className='navbar-right'>
        <NavLink style={navLinktyles} to="/login">  Iniciar Sesión </NavLink>
        <NavLink style={navLinktyles} to="/signup">  Registrarse </NavLink>

       
       
        </div>
    </nav>

  )
}

