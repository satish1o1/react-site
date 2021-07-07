import CustomButton from "../component/custom-button/custom-button.component"
import './cart-dropdown.styles.scss'
import { connect } from "react-redux"
import { selectCartItems } from "../../redux/cart/cart.selector"
import CartItem from "../cart-item/cart-item.component"
const CartDropdown = ({cartItems}) => (
   <div className="cart-dropdown">
      <div className='cart-items'>{
         cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
         ))
      }
      </div>
      <CustomButton>CHECKOUT</CustomButton>
   </div>
)

const mapStateToProps = (state) => (
   {
      cartItems:selectCartItems(state)
   }
)
export default connect(mapStateToProps)(CartDropdown)