import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishbalekey = 'pk_test_uMJLeLkkEwRRsKZHq6daS2Lk00axZKrvVX'
    
    
   const onToken =token => {
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response =>{
            alert ('payment successeful')
        }).catch(error => {
            console.log('payment error' ,JSON.psrse(error));
            alert ( 'There is an issue with your payment')
        })
    }
    return (
        <StripeCheckout
        label = "PAY NOW"
        name ="HOJOZAT"
        image=''
        description ={`your total is $${price}`}
        amount ={priceForStripe}
        panelLabel="PAY Now"
        token={onToken}
        stripekey={publishbalekey}
        />
    )
}
export default StripeCheckoutButton;