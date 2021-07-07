import { CartType } from "./cartType"
const toggleCartHidden = ()=> ({
   type: CartType.TOGGLE_CART_HIDDEN
})

export const addItem = item => ( {
      type: CartType.ADD_ITEM,
      payload:item
})

export const clearCartItem = item => (
   {
      type: CartType.CLEAR_ITEM_FROM_CART,
      payload:item
   }
)

export const removeItem = item => (
   {
      type: CartType.REMOVE_ITEM,
      payload:item
   }
)



export default toggleCartHidden