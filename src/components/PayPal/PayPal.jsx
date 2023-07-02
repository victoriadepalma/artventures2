import React from "react";
import{ useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paypal } from "../../Redux/actions/actions";
import "./PayPal.css";

const PayPalButton = ({ amount,ID_reserva }) => {
    const { currentPayment} = useSelector((state) => ({
        ...state.tours,
      }));
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
const dispatch=useDispatch()
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
const data1={
    ID_reserva:ID_reserva,
    amount:order.purchase_units[0].amount.value,
    paypal:order.id
}
            dispatch(paypal(data1))
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
      {paidFor || (currentPayment !=undefined && currentPayment.length >0) ? (
        <h1 className="success">Gracias por tu colaboracion!</h1>
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