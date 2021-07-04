import { CartType } from "./cartType"
const INITIAL_STATE = {
   hidden:false
}

const CartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case CartType.TOGGLE_CART_HIDDEN:
         return {
            ...state,
            hidden:!state.hidden
         }
      default:
         return state;
   }
}

export default CartReducer