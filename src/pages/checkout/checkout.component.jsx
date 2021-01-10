// import libraries
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

// import reducers
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';

// import styles
import './checkout.styles.scss'


const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>product</span>
            </div>
        
            <div className='header-block'>
                <span>description</span>
            </div>
        
            <div className='header-block'>
                <span>quantity</span>
            </div>
        
            <div className='header-block'>
                <span>price</span>
            </div>
        
            <div className='header-block'>
                <span>remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />) )
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            *Please use the folowing test credit card for payment*
            <br />
            4242 4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal

})

export default connect(mapStateToProps)(CheckoutPage);