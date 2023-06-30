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
import { EventConfirmation } from '../EventConfirmation/Events'


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
      <Route path="/events/:id" element={<ProtectedRoute><Events/></ProtectedRoute>} />
      <Route path="/events/:id/confirmation/:reservaId" element={<ProtectedRoute><EventConfirmation/></ProtectedRoute>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/book/:id" element={<Book />} />
      <Route path="/login" element={<AuthRoute><Login/></AuthRoute>} />
      <Route path="/signup" element={<AuthRoute><Signup/></AuthRoute>} />
      <Route path="/perfil" element={<ProtectedRoute><Edit_Profile/></ProtectedRoute>} />
    

   
    
    </Routes>
    <Footer/>
    </div>):null}
    </>
  )
}
