
import styles from "./PayPage.css";
import React from "react";
import  PayPalButton  from "../../components/PayPal/PayPal"

export default function PayPage() {

  return(
    <div className={styles.generalContanier}> 
    <input type="text"/>
      <div className={styles.paypalContainer}>
        <PayPalButton amount = {"30"} ></PayPalButton>
      </div>
    </div>
  )

}

