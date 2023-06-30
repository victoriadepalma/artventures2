import { PayPalButton, PayPalScriptProvider } from "react-paypal-button-v2";
import { loadScript } from "@paypal/paypal-js";
import styles from "./PayPage.css";
import { findDOMNode } from "react-dom";
import { useRef, useState } from "react";

export default function PayPage() {
  const [price, setPrice] = useState("");
  const paypalOptions = {
    clientId:
      "AV11zbDBLN2DMkgKJz8K79UNI1odjmTaTaYM4tmHLx_wYB7_PBLMuWSF86n4pe1wUcDBPr737McZAMVl",
    currency: "USD",
  };

  const onSuccess = (payment) => {
    console.log("Pago completado correctamente!", payment);
  };

  const onError = (error) => {
    console.error("Hubo un error al procesar el pago: ", error);
  };

  const onCancel = (data) => {
    console.log("Pago cancelado por el usuario: ", data);
  };

  console.log(toString(price))

  return (
    <div className={styles.generalContainer}>
      
      <div className={styles.payContainer}>
        <PayPalButton
          amount="10"
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
          options={paypalOptions}
        />
      </div>
      <div className={styles.mountContainer}>
        <input
          type="text"
          onChange={(ev) => setPrice(ev.target.price)}
          name="mount"
          placeholder="Ingrese monto de contribucion"
        ></input>
      </div>
    </div>
  );
}
