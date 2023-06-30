import { useState, useEffect } from "react";
import "./Message.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../../../context/AuthContext";
import { sendFeedback } from "../../../Redux/actions/actions";

export const Message = ({ show, setShow, reserva }) => {
  const dispatch=useDispatch()
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { loading, user } = UserAuth()
  const { tours, misReservas } = useSelector((state) => ({
    ...state.tours,
  }));

  const giveFeedback = () => {
    const data = {
      ID_tour: reserva.ID_tour,
      ID_user: user.uid,
      feedback: comment,
      rating: rating,
      reserva:reserva.id
    };
    setComment('')
    setRating(0)
    dispatch(sendFeedback(data))
    setShow()
    console.log(data)
  };
  const getTourName = (id) => {
    let aux = tours.filter((tour) => tour.id == id);
    return aux[0].name_tour;
  };

  useEffect(() => {
    if (tours.length == 0 || misReservas.length == 0) {
      dispatch(getReservas(user.uid));
      dispatch(listTours());
    }
  }, []);
  return (
    <div className={show ? "overlay active" : "overlay"}>
      <div className="message-container">
        <h1>
          Recientemente visitaste el tour de {getTourName(reserva?.ID_tour)}.
        </h1>
        <h1>Dejanos tu opinión.</h1>
        <div className="stars-container-rating">
          {[...Array(5)].map((n, index) => {
            return (
              <FontAwesomeIcon
                icon={faStar}
                className={
                  (index + 1 - 5) * -1 < rating
                    ? `star-rating star-${index + 1} star-colored`
                    : `star-rating star-${index + 1} `
                }
                onClick={() => {
                  setRating((index + 1 - 5) * -1 + 1);
                }}
              />
            );
          })}
        </div>
        <textarea
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
        <div className="button-container">
          <button
            className="button-dismiss"
            onClick={() => {
              setShow();
            }}
          >
            Salir
          </button>
          <button
            className="button"
            onClick={() => {
              giveFeedback()
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
