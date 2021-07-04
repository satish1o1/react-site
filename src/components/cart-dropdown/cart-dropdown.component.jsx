import CustomButton from "../component/custom-button/custom-button.component"
import './cart-dropdown.styles.scss'
const CartDropdown = () => (
   <div className="cart-dropdown">
      <div className='cart-items'></div>
      <CustomButton>CHECKOUT</CustomButton>
   </div>
)

export default CartDropdown