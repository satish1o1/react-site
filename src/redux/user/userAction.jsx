import { userType } from "./userTypes"
export const setCurrentUser = user => (
   {  
   type: userType.SET_CURRENT_USER,
   payload: user
})
