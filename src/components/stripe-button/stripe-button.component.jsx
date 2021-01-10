import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I81hXDK99F7cUKvIB9AzH6RpcMMrgO4IvIoV0QINHdzNJplO0r9bxnSCVV8ARs0T060okSdDdPAQf4j81BvtqHN004h9BTaTB';


    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
         label='Pay Now'
         name='E-commerce App'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token ={onToken}
         stripeKey ={publishableKey}
        />
    );
};

export default StripeCheckoutButton;