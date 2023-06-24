import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"



export const Footer = () => {
  return (
    <footer className="footer">
    

            <Link to="/" className='footer-link'><p className='footer-element'>HOME</p></Link>
            <Link to="/tours" className='footer-link'><p className='footer-element'>TOURS</p></Link>
            <Link to="/events" className='footer-link'><p className='footer-element'>EVENTS</p></Link>
            <Link to="/book" className='footer-link'><p className='footer-element'>BOOK</p></Link>
            <p className='contacto'>CONTACTO <br></br>+58 414-117-2157<br></br>ARTVENTURES@GMAIL.COM</p>
           
          
       
   
      
    </footer>
  )
}
