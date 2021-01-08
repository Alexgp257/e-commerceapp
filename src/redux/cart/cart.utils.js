export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log(cartItems);
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );
        console.log('cart item ', existingCartItem);
    if(existingCartItem) {
        console.log(existingCartItem);
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity +1  }
            : cartItem
        );
    }; 
    return [ ...cartItems,  {...cartItemToAdd, quantity: 1 }];
      
    
}