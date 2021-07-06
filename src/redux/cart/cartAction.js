import { CartType } from "./cartType"
const toggleCartHidden = ()=> ({
   type: CartType.TOGGLE_CART_HIDDEN
})

export const addItem = item => ( {
      type: CartType.ADD_ITEM,
      payload:item
})


export default toggleCartHidden