import React from 'react';
import './checkout.css';
import { uuid } from 'uuidv4';


const Checkout = () => {
    return ( 
        <div className="orderConfirm">
            <div>Thank You For Your Purchase!!!</div><br/>
            <div>Your order is being processed. You should receive an email confirmation shortly.</div><br/>
    <div>Your Order ID: {uuid()}</div>
        </div>
     );
}
 
export default Checkout