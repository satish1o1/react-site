import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../../Assets/crown.svg'
import './header.styles.scss'
const Header = ({ CurrentUser }) => (
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
      
      </div>
      </div>
)
const mapStateToProps = state => (
   {
      CurrentUser:state.user.CurrentUser
      }
)


export default connect(mapStateToProps)(Header);