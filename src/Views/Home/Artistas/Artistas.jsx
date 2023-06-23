import React from 'react'
import biblioteca from "../../../assets/imagenes/cara1.png"
import "./Artistas.css"


export const Artistas = () => {
  return (
    <div className='artistas'>
        <div className='square'>
        <img className="imagen" src = {biblioteca}></img>
        </div>
        <h1 className='titulo-artistas'>Artistas</h1>
        <p className='info-a'>
            Antonio Herrera Toro.
            <br></br>
            Luisa Cristina Riquezes.
            <br></br>
            Luis Dominguez Salazar.
            <br></br>
            Balthazar Armas.
            <br></br>
            Fernando Botero.
            <br></br>
            Emilia Firgau.
            <br></br>
            Joan Miró.
            <br></br>
            Edson Motta.
            </p>
    </div>
  )
}