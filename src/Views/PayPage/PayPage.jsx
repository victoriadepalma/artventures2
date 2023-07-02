import "./PayPage.css";
import React,{useEffect,useState} from "react";
import  PayPalButton  from "../../components/PayPal/PayPal"
import { useDispatch, useSelector } from "react-redux";
import { getContribucion, getReserva, getTour } from "../../Redux/actions/actions";
import { useParams } from 'react-router-dom';
export default function PayPage() {
const dispatch=useDispatch()
  const [price, setPrice] = useState(0);
  const {id,reservaId}=useParams()
  const { currentTour,currentReserva,currentPayment} = useSelector((state) => ({
    ...state.tours,
  }));

  useEffect(() => {

    dispatch(getTour(id))
    dispatch(getReserva(reservaId))
    dispatch(getContribucion(reservaId))
     
   
     }, []);
console.log(currentTour, currentReserva)
  return(

    <div className="generalContanier"> 
    {currentTour != undefined && currentReserva !=undefined &&
    <>
    {currentPayment ==undefined &&

      <div className="mountContainer">
        <input id="input" type="number" value = {price} onChange={ev => setPrice(ev.target.value)}/>
      </div>}
      <div className="paypalContainer">
        <PayPalButton amount = {price} ID_reserva={reservaId} ></PayPalButton>
      </div>
      </>}
      
      
    </div>
  )

}