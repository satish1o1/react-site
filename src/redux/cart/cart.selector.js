import { create } from "istanbul-reports";
import { createSelector } from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
   [selectCart],
   cart => cart.cartItems
)

export const selectItemCount = createSelector(
   [selectCartItems],
   cartItems => cartItems.reduce((accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity,
      0
   )
)