import './App.css'
import React from 'react'
import HomePage from './page/homepage/homepage.component'
import ShopPage from './page/shoppage/shoppage.component'
import Checkout from './page/checkout/checkout.component'
import { connect } from 'react-redux'
import { Route, Switch,Redirect } from 'react-router-dom'
import Header from './components/component/header/header.component'
import SigninAndSignup from './page/signin-and-signup/signin-and-signup'
import { auth } from './firebase/firebase.utils'
import { createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/userAction'



class App extends React.Component {
   unSubscribeFromAuth = null
   componentDidMount() { 
      const { setCurrentUser } = this.props
      this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
         if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth)
            userRef.onSnapshot(snapShot => {
               setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data(),
               })
            })
         }
         else {
            setCurrentUser(userAuth)
         }
 })  
}
   
   componentWillUnmount() {
      this.unSubscribeFromAuth()
   }
   
   render() {
      return (
         <div>
            <Header />
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route exact path='/shop' component={ShopPage} />
               <Route exact path="/sign" render={() => this.props.currentUser?<Redirect to ='/'/>:<SigninAndSignup/>}/>
               <Route exact path='/checkout' component={Checkout} />
            </Switch>
         </div>
      )
  }
  
}

const mapStateToProps = state => ({
   currentUser:state.user.CurrentUser
})
const mapDispatchToProps = dispatch => ({
      setCurrentUser: user =>dispatch(setCurrentUser(user))
   });

export default connect(
   mapStateToProps,
   mapDispatchToProps)(App);
