import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import "./Book.css";
import Slider from "../../components/Carrete2/Slider";
import { useDispatch, useSelector } from "react-redux";
import {
  getRatings,
  getTour,
  listArtists,
  listLocations,
  listObrasTour,
  listUsers,
} from "../../Redux/actions/actions";
import {useNavigate} from 'react-router-dom'
import { UserAuth } from "../../context/AuthContext";
export const Book = ({ title, tour_info, link }) => {
  const navigate=useNavigate()
  const { loading, user } = UserAuth()
  const { currentTour, currentObras, artists,locations,currentRatings } = useSelector((state) => ({
    ...state.tours,
  }));

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTour(id));
    dispatch(listObrasTour(id));
    dispatch(listArtists());
    dispatch(listLocations())
    dispatch(getRatings(id))
    dispatch(listUsers())
  }, []);

  const getArtist = (obraID) => {
    const artist=artists.filter((artist)=>artist.id==obraID)[0]
const name=artist.name
const lastname=artist.last_name !=null ? artist.last_name : ""

  
return name + " "+ lastname
  };

  const getLocation = (obraID) => {
    
    const location=locations.filter((location)=>location.id==obraID)[0]

  
return location.nombre
  };
  const getNumber=(number)=>{
    if(number.toString().length==1){
      return '0'+number.toString()
    }else{
      return number.toString()
    }

  }
  const getAverage=()=>{
    console.log('kjuhgvbhnjmk')
    let average=0;
    
    currentRatings.map((rating)=>{
      console.log(average)
      average+=rating.rating;
    })
    return parseInt(average/currentRatings.length)
  }

  const reservar=()=>{
    navigate(`/events/${id}`)
  }
  return (
    <>
      {currentTour &&
      artists.length>0 &&
        currentObras.length > 0 &&
        currentTour?.disponibilidad && (
          <>
            <div className="book">
              <div className="stars-container">
              {[...Array(getAverage())].map((n)=>{
            return  <FontAwesomeIcon icon={faStar} className="big-star" />
          })}
        
              </div>

              <h1 className="titulos-book">{currentTour.name_tour}</h1>
              <p className="parrafos-book">{currentTour.description}</p>
         {user !=null &&
                <button className="b-book" onClick={()=>{reservar()}}>Reservar</button>}
              
            </div>
            <div className="book">
              <div className="black-container"></div>
              <div className="obras-container">
                {currentObras.map((obra, index) => {
                  return (
                    <div className="obra-container">
                      <h1 className="title">{obra.tittle}</h1>
                      <h1 className="title">{getArtist(obra.ID_artista)}</h1>
                      <h1 className="number">{getNumber(index)}</h1>
                      <div className="obra">
                        <img src={obra.img}/>
                        <div className="obra-hover">
                        <h1>Año: {obra.year}</h1>
                          <h1>Ubicación: {getLocation(obra.ID_ubicacion)}</h1>
                          <h1>Tipo: {obra.type}</h1>
                          <h1>Dimensiones: {obra.dimensiones}</h1>
                          <h1>Tecnica: {obra.tecnica}</h1>
                          <h1>Descripción: {obra.description}</h1>
                        </div>
                      </div>
                     
                    </div>
                  );
                })}
              </div>
            </div>
            <Slider ratings={currentRatings}/>
          </>
        )}
    </>
  );
};
