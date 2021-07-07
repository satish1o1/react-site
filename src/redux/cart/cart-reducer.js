import { CartType } from "./cartType"
import addItemToCart, { removeCartItem } from "./cart-utils"

const INITIAL_STATE = {
   hidden: true,
   cartItems:[]
}

const CartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case CartType.TOGGLE_CART_HIDDEN:
         return {
            ...state,
            hidden:!state.hidden
         }
      case CartType.ADD_ITEM:
         return {
            ...state,
            cartItems:addItemToCart(state.cartItems,action.payload)

         }
      
      case CartType.CLEAR_ITEM_FROM_CART:
         return {
            ...state,
            cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
         }
      
      case CartType.REMOVE_ITEM:
         return {
            ...state,
            cartItems:removeCartItem(state.cartItems,action.payload)
         }
      
      
      default:
         return state;
   }
}

export default CartReducer