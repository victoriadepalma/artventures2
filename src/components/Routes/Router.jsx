import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Login } from '../Login/Login'
import { Navbar } from '../Navbar/Navbar'
import { Events } from "../Events/Events"
import { Book } from "../Book/Book"
import { Signup } from "../Signup/Signup"
import { Tours } from '../Tours/Tours'
import { Home } from '../Home/Home'
import { Footer } from '../Footer/Footer'


export const Router = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tours" element={<Tours/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/book" element={<Book />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    
    </Routes>
    <Footer/>
    </>
  )
}
