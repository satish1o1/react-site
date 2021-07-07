
const addItemToCart = (cartItems, cartItemToAdd) => {
   const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
   )

   if (existingCartItem) {
      return cartItems.map(
         cartItem => cartItem.id === cartItemToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            :cartItem

      )
   }

   return [...cartItems,{...cartItemToAdd,quantity:1}]

}



export const removeCartItem = (cartItems, CartItemToRemove) => {
   const existingCartItem = cartItems.find(
      cartItem => cartItem.id === CartItemToRemove.id
   )

   if (existingCartItem.quantity === 1) { 
     return cartItems.filter(cartItem=>cartItem.id !==CartItemToRemove.id)
   
   }

   return cartItems.map(cartItem =>
      cartItem.id === CartItemToRemove.id ?
         { ...cartItem, quantity: cartItem.quantity - 1 } :
         cartItem
      )

}


export default addItemToCart