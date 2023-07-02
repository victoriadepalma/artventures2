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
  listObras,
  listObrasTour,
  listRatings,
  listTours,
  listUsers,
} from "../../Redux/actions/actions";
import {useNavigate} from 'react-router-dom'
import { UserAuth } from "../../context/AuthContext";
export const BookGeneral = ({ title, tour_info, link }) => {
  const navigate=useNavigate()
  const { loading, user } = UserAuth()
  const {currentObras, artists,locations,currentRatings,tours,obras,ratings } = useSelector((state) => ({
    ...state.tours,
  }));
  const {users } = useSelector((state) => ({
    ...state.user,
  }));
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if(artists.length ==0 || locations.length==0 || tours.length==0 || obras.length==0 ){
      dispatch(listArtists());
     dispatch(listTours())
dispatch(listObras())
    dispatch(listLocations())
    dispatch(listRatings())
    dispatch(listUsers())
    }
    // if(!currentTour || currentObras.length==0 || currentTour?.id !=id){
    //   dispatch(getTour(id));
    //   dispatch(listObrasTour(id));
    //   dispatch(listUsers())
    //   dispatch(getRatings(id))
    // }
  

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
  const getAverage=(id)=>{

    let average=0;
    
    ratings.filter((r)=> r.ID_tour==id).map((rating)=>{
      console.log(average)
      average+=rating.rating;
    })
  
    return parseInt(average/ratings.filter((r)=> r.ID_tour==id).length)
  }

  const reservar=(id)=>{
    navigate(`/events/${id}`)
  }
  return (
    <>
      {tours.length>0 &&
      obras.length>0 &&
      locations.length>0 &&
      artists.length>0 && (
        <>
        {tours.map((currentTour)=>{
           return <>
            <div className="book bookGeneral">
              {getAverage(currentTour.id) >0 &&
              <div className="stars-container">
                
              {[...Array(getAverage(currentTour.id))].map((n)=>{
            return  <FontAwesomeIcon icon={faStar} className="big-star" />
          })}
        
              </div>}

              <h1 className="titulos-book">{currentTour.name_tour}</h1>
              <p className="parrafos-book">{currentTour.description}</p>
         {user !=null &&
                <button className="b-book" onClick={()=>{reservar(currentTour.id)}}>Reservar</button>}
              
            </div>
            <div className="book bookGeneral">
              <div className="black-container"></div>
              <div className="obras-container">
                {obras.filter((o)=>o.ID_tour==currentTour.id).map((obra, index) => {
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
            {users.length>0 &&
           <Slider ratings={ratings.filter((f)=>f.ID_tour==currentTour.id)}/>}
          </>
        })}
        </>
        
        )}
    </>
  );
};
