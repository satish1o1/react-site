import FormInput from '../form-input/form-input.component';
import React from 'react'
import CustomButton from '../custom-button/custom-button.component';
import { auth,signWithGoogle } from '../../../firebase/firebase.utils';
import './signin.styles.scss'
class SignIn extends React.Component {
   constructor(props) {
      super(props); 
      this.state = {
         email:'',
         password: '',
      }
   }
   handleSubmit = async (event) => {
      event.preventDefault()
      const { email, password } = this.state
      try {
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({ email: '', password: '' })
      } catch (error) {
         console.log(error.message)
      }
        
   }

   handleChange = (event) => {
      const {name, value } = event.target
      this.setState({[name]:value})
   }

   render() {
      return (
         <div className="sign-in">
            <h1 className ='title'>I already have account</h1>
            <span>create account with email and password</span>
            <form onSubmit ={this.handleSubmit}>
               <FormInput
                  name="email"
                  type="email"
                  value={this.state.email}
                  handleChange={this.handleChange}
                  label = 'email'
                  required />
               <FormInput
                  name="password"
                  type="password"
                  value={this.state.password}
                  handleChange={this.handleChange}
                  label = 'password'
                  required />
               <div className='buttons'>
                  <CustomButton type="submit">Sigin</CustomButton>
                  <CustomButton type ='button' onClick={signWithGoogle} isGoogle>SIGN WITH GOOGLE</CustomButton>
               </div>
              

            </form>
         </div>
      )
   }
}

export default SignIn