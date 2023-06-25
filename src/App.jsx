import {  Routes, Route } from "react-router-dom"

import React from "react"
import { Router } from "./Views/Routes/Router"
import { AuthContextProvider } from "./context/AuthContext";

function App() {


  return (
    <>
    <div>
      <AuthContextProvider>
    <Router />
    </AuthContextProvider>
  </div>
  </>
  )
}

export default App
