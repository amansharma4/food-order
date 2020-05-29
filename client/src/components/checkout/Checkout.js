import React, { Component } from 'react';
import { Elements, StripeProvider, CardElement } from "react-stripe-elements";
import '../../App'
import './style.css'
class Checkout extends Component {
    
    render()
    {
        
        return(
            
            <div className="container">
            {
                <StripeProvider className="payment"
                 stripe={window.Stripe("pk_test_yO7Gsa7NMxyZJMTeuv2Cp6k7004XCKN8VV", {
                     betas: ["payment_intent_beta_3"]
                 })}
                 >
                     <Elements>
                         <CardElement />
                         

                     </Elements>
                 </StripeProvider>
            }
            </div>
            
        )
    }
}

export default Checkout;