import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Login } from '../Login/Login'
import { Navbar } from '../../components/Navbar/Navbar'
import { Events } from "../Events/Events"
import { Book } from "../Book/Book"
import { Signup } from "../Signup/Signup"
import { Tours } from '../Tours/Tours'
import { Home } from '../Home/Home'
import { Footer } from '../../components/Footer/Footer'
import PayPage from '../../Views/PayPage/PayPage'

export const Router = () => {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tours" element={<Tours/>} />
      <Route path="/events" element={<Events/>} />
      <Route path="/book" element={<Book />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/pay" element = {<PayPage/>}/>
    
    </Routes>
    <Footer/>
    </>
  )
}
