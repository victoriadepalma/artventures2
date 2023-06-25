import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Login } from '../Login/Login'

import { Events } from "../Events/Events"
import { Book } from "../Book/Book"
import { Signup } from "../Signup/Signup"
import { Tours } from '../Tours/Tours'
import { Home } from '../Home/Home'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'

import { Edit_Profile } from '../Edit_Profile/Edit_Profile'
import { Pinceladas } from '../Book/Pinceladas/Pinceladas'
import { Rutas } from '../Book/Rutas/Rutas'
import { Caminando } from '../Book/Caminando/Caminando'
import { Events_Pinceladas } from '../Events/Events_Pinceladas'



export const Router = () => {
  return (
    <div className='main-container'>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tours" element={<Tours/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/book" element={<Book />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/editar-perfil" element={<Edit_Profile/>} />
      <Route path="/book-pinceladas" element={<Pinceladas/>} />
      <Route path="/book-rutas-esculturas" element={<Rutas/>} />
      <Route path="/book-caminando-jardines" element={<Caminando/>} />
      <Route path="/events-pinceladas" element={<Events_Pinceladas/>} />
      
   
    
    </Routes>
    <Footer/>
    </div>
  )
}
