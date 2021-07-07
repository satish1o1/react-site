import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase.utils'
import { selectCartHidden } from '../../../redux/cart/cart.selector'
import { selectCurrentUser } from '../../../redux/user/user.selector'
import { ReactComponent as Logo } from '../../../Assets/crown.svg'
import { createStructuredSelector } from 'reselect'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../../cart-dropdown/cart-dropdown.component'
import './header.styles.scss'
const Header = ({ CurrentUser,hidden }) => (
   <div className="header">
      <Link to='/'>
         <Logo className = "logo" />
      </Link>
      <div className = "options">
      <Link to = "/shop" className = "option">
         SHOP</Link>
      <Link to = "/contact" className ="option">
            CONTACT</Link>
         {
            CurrentUser ? <div className='option' onClick = {()=>auth.signOut()}>SIGNOUT</div> :
            <Link to = "/sign" className ="option">
            SIGNIN</Link>
    
         }
         <CartIcon/>
      
      </div>
      {
         hidden?null:<CartDropdown/>
       }
      </div>
)
const mapStateToProps = createStructuredSelector(
   {
      CurrentUser:selectCurrentUser,
      hidden:selectCartHidden
      }
)


export default connect(mapStateToProps)(Header);