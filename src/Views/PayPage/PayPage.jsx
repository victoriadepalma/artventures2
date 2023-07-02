import "./PayPage.css";
import React from "react";
import  PayPalButton  from "../../components/PayPal/PayPal"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReserva, getTour } from "../../Redux/actions/actions";
import { useParams } from 'react-router-dom';
export default function PayPage() {
  const [price, setPrice] = useState(0);
  const {id,reservaId}=useParams()
  const { currentTour,currentReserva} = useSelector((state) => ({
    ...state.tours,
  }));

//   useEffect(() => {

//     dispatch(getTour(id))
//     dispatch(getReserva(reservaId))
     
   
//      }, []);

  return(
    <div className="generalContanier"> 
      <div className="mountContainer">
        <input id="input" type="number" value = {price} onChange={ev => setPrice(ev.target.value)}/>
      </div>
      <div className="paypalContainer">
        <PayPalButton amount = {price} ></PayPalButton>
      </div>
      
      
    </div>
  )

}