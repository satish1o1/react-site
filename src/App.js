import './App.css'
import React from 'react'
import HomePage from './components/page/homepage/homepage.component'
import ShopPage from './components/page/shoppage/shoppage.component'
import { Route, Switch } from 'react-router-dom'
import Header from './components/component/header/header.component'
import SigninAndSignup from './components/page/signin-and-signup/signin-and-signup'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
   constructor() {
      super()
      this.state = {
         CurrentUser: null
      }
   }
      unSubscribeFromAuth = null
      componentDidMount(){
         this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>
         (
            this.setState({ CurrentUser: user })
            ))
      
   
      }
   
   componentWillUnmount() {
      this.unSubscribeFromAuth()
   }
   
   render() {
      return (
         <div>
            <Header CurrentUser={this.state.CurrentUser}/>
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route exact path='/shop' component={ShopPage} />
               <Route exact path ="/sign" component = {SigninAndSignup}/>
            </Switch>
         </div>
      )
  }
  
}

export default App;
