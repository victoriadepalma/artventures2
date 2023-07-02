import React from "react";
import{ useRef, useState, useEffect } from "react";
import "./PayPal.css";

const PayPalButton = ({ amount }) => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AV11zbDBLN2DMkgKJz8K79UNI1odjmTaTaYM4tmHLx_wYB7_PBLMuWSF86n4pe1wUcDBPr737McZAMVl";
    script.addEventListener("load", () => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            setPaidFor(true);
            console.log(order);
          },
          onError: (err) => {
            setError(err.response.message);
            console.error(err);
          },
          style: {
            color: "gold",
            shape: "pill",
            label: "pay",
            height: 40,
          },
        })
        .render("#paypal-button-container");
    });
    document.body.appendChild(script);
  }, [amount]);

  return (
    <div>
      {paidFor ? (
        <h1>Gracias por tu colaboracion!</h1>
      ) : (
        <div className="buttons">
          <h1 id = "mount">Total a pagar: ${amount}</h1>
          
          <div id="paypal-button-container"></div>
          {error && <div className="error-message">{error.message}</div>}
        </div>
      )}
    </div>
  );
};

export default PayPalButton;