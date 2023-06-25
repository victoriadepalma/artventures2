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
import { Message } from '../../components/Message/Message'
import ProtectedAdminRoute from "../Routes/ProtectedAdminRoute";
import ProtectedRoute from "../Routes/ProtectedRoute";
import AuthRoute from "../Routes/AuthRoute";
import { UserAuth } from '../../context/AuthContext'


export const Router = () => {
  const { loading, user } = UserAuth();
  return (
    <>
    {!loading ? (
    <div className='main-container'>
     <Navbar/>
     {/* <Message/> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tours" element={<Tours/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/book" element={<Book />} />
      <Route path="/login" element={<AuthRoute><Login/></AuthRoute>} />
      <Route path="/signup" element={<AuthRoute><Signup/></AuthRoute>} />
      <Route path="/editar-perfil" element={<ProtectedRoute><Edit_Profile/></ProtectedRoute>} />
      <Route path="/book-pinceladas" element={<Pinceladas/>} />
      <Route path="/book-rutas-esculturas" element={<Rutas/>} />
      <Route path="/book-caminando-jardines" element={<Caminando/>} />
      <Route path="/events-pinceladas" element={<Events_Pinceladas/>} />

   
    
    </Routes>
    <Footer/>
    </div>):null}
    </>
  )
}
