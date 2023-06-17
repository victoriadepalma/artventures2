import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"



export const Footer = () => {
  return (
    <footer className="footer">
    

            <Link to="/"><p>HOME</p></Link>
            <Link to="/tours"><p>TOURS</p></Link>
            <Link to="/events"><p>EVENTS</p></Link>
            <Link to="/book"><p>BOOK</p></Link>
           
          
       
   
      
    </footer>
  )
}
