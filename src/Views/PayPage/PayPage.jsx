import styles from "./PayPage.css";
import React from "react";
import  PayPalButton  from "../../components/PayPal/PayPal"
import { useState } from "react";

export default function PayPage() {
  const [price, setPrice] = useState(0);
  return(
    <div className={styles.generalContanier}> 
      <div className={styles.mountContainer}>
        <input id = "input" type="text" value = {price} onChange={ev => setPrice(ev.target.value)}/>
      </div>
      <div className={styles.paypalContainer}>
        <PayPalButton amount = {price} ></PayPalButton>
      </div>
      
      
    </div>
  )

}