import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../../Assets/crown.svg'
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
const mapStateToProps = ({user:{CurrentUser},cart:{hidden}}) => (
   {
      CurrentUser,
      hidden
      }
)


export default connect(mapStateToProps)(Header);