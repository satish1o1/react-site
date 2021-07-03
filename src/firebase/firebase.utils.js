import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
   apiKey: "AIzaSyBjO5NhIrGIjGNwvHupJHjV9GanybnXRIA",
   authDomain: "react-ecom-4ce05.firebaseapp.com",
   projectId: "react-ecom-4ce05",
   storageBucket: "react-ecom-4ce05.appspot.com",
   messagingSenderId: "704404245852",
   appId: "1:704404245852:web:bca18dbe8fd58b05d10599",
   measurementId: "G-YKCDEQG7RZ"
};
 
firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signWithGoogle = () => auth.signInWithPopup(provider)

export default firebase