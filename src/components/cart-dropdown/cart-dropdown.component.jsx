import CustomButton from "../component/custom-button/custom-button.component"
import './cart-dropdown.styles.scss'
import { withRouter } from "react-router"
import { connect } from "react-redux"
import { selectCartItems } from "../../redux/cart/cart.selector"
import  toggleCartHidden from '../../redux/cart/cartAction'
import CartItem from "../cart-item/cart-item.component"
const CartDropdown = ({cartItems,history,dispatch}) => (
   <div className="cart-dropdown">
      <div className='cart-items'>{
         cartItems.length?
         cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem}/>
         )) :
            <span className="empty-text">Your cart is empty</span>
      }
      </div>
      <CustomButton onClick={() => {
         history.push('/checkout');
         dispatch(toggleCartHidden())
      }}>CHECKOUT</CustomButton>
   </div>
)

const mapStateToProps = (state) => (
   {
      cartItems:selectCartItems(state)
   }
)
export default withRouter(connect(mapStateToProps)(CartDropdown))