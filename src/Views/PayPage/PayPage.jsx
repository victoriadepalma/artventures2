import React, { useState, useEffect } from "react";

const PayPalButton = window.paypal.Buttons.driver("react", {React, ReactDOM});

export default function PayPage(){
    const createOrder = (data, actions) => {
        return actions.order.create({

                purchase_units: [
                    {
                        amount:{
                            value:"0.01"
                        }
                    }
                ]
        });

    };
    const onApprove= (data, actions) => {
        return actions.order.capture();
    };
    return (
    <div className = "PayPage">
        <PayPalButton
            createOrder = {(data, actions) => createOrder(data,actions)}
            onApprove = {(data, actions) => onApprove(data, actions)}
        />  
    </div>
    );
}

