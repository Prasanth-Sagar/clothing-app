// cartItems - All the existing cart items in the cartItem array right now
// cartItemToAdd - The cart item which we want to add

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    })
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}

export const reduceCartItems = (cartItems, cartItemToReduce) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToReduce.id);

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToReduce.id)
  }

  return cartItems.map(cartItem => cartItem.id === cartItemToReduce.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
}