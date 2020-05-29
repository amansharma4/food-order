import React, { Component } from 'react';
import { CardElement, injectStripe } from "react-stripe-elements";
import '../../App'
import {ToastsContainer, ToastsStore} from 'react-toasts';


import Checkout from "./Checkout";
import "./style.css";
import  OrderCard from "../orders/OrderCard";
class CheckoutForm extends Component {

    
   onHandleClick = () =>{
           alert("Payment is sucessfull");
            
   }
    render()
    {   
        


        return(
            <div className = "card">
                     
                     <Checkout />
                      <button className="btn" onClick={this.onHandleClick}> Pay</button> 
                                                   
            
            
            
            </div>
        )
    }
}

export default (CheckoutForm);