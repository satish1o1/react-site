import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import { clearCartItem } from '../../../redux/cart/cartAction'
import { addItem } from '../../../redux/cart/cartAction'
import { removeItem } from '../../../redux/cart/cartAction'

const CheckoutItem = ({ cartItem,clearItem,addItem,removeItem}) => {
   const { imageUrl, name, quantity, price } = cartItem
   return (
      <div className="checkout-item">
      <div className="image-container">
         <img src={imageUrl } />
      </div>
         <span className="name">{name}</span>
         <span className='quantity'>
          <div className = "arrow" onClick = {()=>removeItem(cartItem)}>&#10094;</div>
          <span className="value">{quantity}</span>
          <div className = "arrow" onClick = {()=>addItem(cartItem)}>&#10095;</div>
         </span>   
      <span className="price">{price}</span> 
      <span className="remove-button" onClick = {()=>clearItem(cartItem)}>&#10005;</span>
   </div>
   )
  
   }


const mapDispatchToProps = dispatch => (
   {
      clearItem: item => dispatch(clearCartItem(item)),
      addItem: item => dispatch(addItem(item)),
      removeItem:item=>dispatch(removeItem(item))
      
   }
)
export default connect(null,mapDispatchToProps)(CheckoutItem)