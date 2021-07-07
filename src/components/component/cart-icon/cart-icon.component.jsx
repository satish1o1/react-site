import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../../Assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import toggleCartHidden from '../../../redux/cart/cartAction'
import { selectItemCount } from '../../../redux/cart/cart.selector'
import { connect } from 'react-redux'

const CartIcon = ({toggleCartHidden,itemCount}) => (
   <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
   </div>
)

const mapDispatchToProps = dispatch => ({
   toggleCartHidden:()=>dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
   itemCount: selectItemCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)