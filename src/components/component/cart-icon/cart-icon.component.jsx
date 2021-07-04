import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../../Assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import toggleCartHidden from '../../../redux/cart/cartAction'
import { connect } from 'react-redux'

const CartIcon = ({toggleCartHidden}) => (
   <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
   </div>
)

const mapDispatchToProps = dispatch => ({
   toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon)