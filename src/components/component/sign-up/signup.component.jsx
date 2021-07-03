import React from 'react'
import './sign-up.styles.scss'
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import  CustomButton from '../custom-button/custom-button.component'
class SignUp extends React.Component{
   constructor() {
      super()
      this.state = {
         displayName: '',
         email:'',
         password: '',
         confirmpassword:''
         
      }
   }

   handleSubmit = async event => {
      event.preventDefault()
      const { displayName, email, password, confirmpassword } = this.state;
      if (password !== confirmpassword) {
         alert('password not match');
         return;
      }

      try {
         const { user } = await  auth.createUserWithEmailAndPassword(email, password)
         createUserProfileDocument(user,{displayName})
         
      } catch (error) {
         console.log(error.message)
         
      }
      this.setState({
         displayName: '',
         email: '',
         password: '',
         confirmpassword: ''
      })
   }


   handleChange = (event) => {
      const { name, value } = event.target
      this.setState({[name]:value})
   
   }
   render() {
      return (
         <div className="sign-up">
            <h2 class= 'title'>I dont have account</h2>
            <span>signup with email and password</span>
            <form className = 'sign-up-form' onSubmit= {this.handleSubmit}>
            <FormInput
               type = 'text'
               name="displayName"
               value= {this.state.displayName}
               onChange = {this.handleChange}
                  label='Name'
                  required
               />
               <FormInput
               type = 'email'
               name="email"
               value= {this.state.email}
               onChange = { this.handleChange}
               label='email'
               required
               />
               <FormInput
               type = 'password'
               name="password"
               value= {this.state.password}
               onChange = {this.handleChange}
               label='password'
               required
               />
               <FormInput
               type = 'password'
               name="confirmpassword"
               value= {this.state.confirmpassword}
               onChange = {this.handleChange}
               label='confirmpassword'
               required
               />
              <CustomButton type = 'submit'> SIGNUP</CustomButton> 
            </form>       
         </div>
      )
   }
}


export default SignUp