import React from 'react'
import { NavLink, useNavigation,useNavigate, useLocation } from 'react-router-dom';
import logo from "../../assets/imagenes/logo3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMultiply } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import './Navbar.css'
import { UserAuth } from '../../context/AuthContext';

export const Navbar = () => {
  const [open, setOpen]=useState(false)
  const { loading, user, logout } = UserAuth();
  const navigate = useNavigate();
const location=useLocation()

  const toggle =()=>{
    setOpen(!open)
  }
  const goToTours=()=>{
    toggle()
    navigate('/tours')
  }

  const goToBook=()=>{
    toggle()
    navigate('/book')
  }
  const goToEvents=()=>{
    toggle()
    navigate('/events')
  }
  return (
    <div className= "logo-container" style={{backgroundColor:location?.pathname!='/' ? 'transparent':'#F2E346'}}>
    <NavLink to = "/" >  <img src = {logo}></img> ArtVentures</NavLink>
    {location?.pathname=='/' &&
    <div className= "navbar-middle">
        <NavLink to="/tours">  Tours </NavLink>
        <NavLink to="/events">  Events </NavLink>
        <NavLink  to="/book">  Book </NavLink>
      </div>
}
    {location?.pathname!='/' ?
    <div className='navbar-right'>
       {user != null &&
    <button className='logOut' onClick={()=>{logout()}}>Cerrar Sesión</button>}
    <button className='navbar-menu' onClick={()=>{toggle()}}>
    <div className='navbar-menu-line1'></div>
    <div className='navbar-menu-line2'></div>
    <div className='navbar-menu-line1'></div>
    
    </button></div>:
    <>
    {user == null ?
     <div className='navbar-right'>
   
     <NavLink  to="/login">  Iniciar Sesión </NavLink>
     <NavLink  to="/signup">  Registrarse </NavLink>
     </div>
     :<div className='navbar-right'>
   
  
     <NavLink to="/editar-perfil"> Editar Perfil</NavLink>
     <button className='logOut' onClick={()=>{logout()}}>Cerrar Sesión</button>
     </div>}
     </>
     }
  {location?.pathname!="/" &&
  <div className={open ? 'menu menu-open' : 'menu'}>
    <div className='menu-container'>
    <button className='menu-item' onClick={()=>{goToTours()}}> <h1>  Tours </h1><div className='menu-underline'></div></button>
 
    <button className='menu-item' onClick={()=>{goToEvents()}}> <h1 to="/events">  Events </h1><div className='menu-underline'></div></button>
    <button className='menu-item' onClick={()=>{goToBook()}}>  <h1  to="/book">  Book </h1><div className='menu-underline'></div></button>
    
    <button className='close-menu'  onClick={()=>{toggle()}}>
    <FontAwesomeIcon icon={faMultiply} className='close-menu-icon' />
    </button>
  </div>
  </div>
}
    </div> 
      
   
  )
}
