import React, { useContext } from 'react'
// import { useUser } from '../Context/UserContextProvider'
import UserContext from '../Context/UserContext'

function  Profile() {
  const {user}  = useContext(UserContext)
 if (!user) {
   return <div>Please Login</div>
 } else {
   return <div>Welcome {user.Username}</div>
 }
}

export default Profile