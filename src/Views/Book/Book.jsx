import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import "./Book.css";
import Slider from "../../components/Carrete2/Slider";
import { useDispatch, useSelector } from "react-redux";
import {
  getTour,
  listArtists,
  listObrasTour,
} from "../../Redux/actions/actions";
export const Book = ({ title, tour_info, link }) => {
  const { currentTour, currentObras, artists } = useSelector((state) => ({
    ...state.tours,
  }));
  
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTour(id));
    dispatch(listObrasTour(id));
    dispatch(listArtists());
  }, []);

  const getArtist = (obraID) => {
    const artist=artists.filter((artist)=>artist.id==obraID)[0]
const name=artist.name
const lastname=artist.last_name !=null ? artist.last_name : ""

  
return name + " "+ lastname
  };

  const getNumber=(number)=>{
    if(number.toString().length==1){
      return '0'+number.toString()
    }else{
      return number.toString()
    }

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
                <FontAwesomeIcon icon={faStar} className="big-star" />
                <FontAwesomeIcon icon={faStar} className="big-star" />
                <FontAwesomeIcon icon={faStar} className="big-star" />
                <FontAwesomeIcon icon={faStar} className="big-star" />
                <FontAwesomeIcon icon={faStar} className="big-star" />
              </div>

              <h1 className="titulos-book">{currentTour.name_tour}</h1>
              <p className="parrafos-book">{currentTour.description}</p>
              <Link to={link}>
                <button className="b-book">Reservar</button>
              </Link>
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
                        <div className="obra-hover"></div>
                      </div>
                     
                    </div>
                  );
                })}
              </div>
            </div>
            <Slider />
          </>
        )}
    </>
  );
};
