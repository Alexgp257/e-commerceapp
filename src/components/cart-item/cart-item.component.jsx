import React from 'react';
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

import './cart-item.styles.scss';

const CartItem = ({ item, clearItem, addItem, removeItem }) => {
    const { imageUrl, price, name, quantity } = item;
    return (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <div className='item-details-container'>
                <span className='arrow' onClick={() => removeItem(item)}>&#10096;</span>
                <span className='price'>           
                {quantity} X ${price}
                </span>
                <span className='arrow' onClick={() => addItem(item)}>&#10097;</span>           
                <span className='remove-button' onClick={() => clearItem(item)}>&#10006;</span>
            </div>
        </div>
    </div>
    )};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))

})
export default connect(null, mapDispatchToProps)(CartItem);