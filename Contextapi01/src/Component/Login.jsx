import { useContext, useState } from "react"
import React from 'react'
import userContext from "../Context/UserContext"
// import { useUser } from "../Context/UserContextProvider"
import UserContext from "../Context/UserContext"


function Login() {
   
const [Username, setUsername] = useState('')
const [password, setPassword] = useState('')

const {setUser} = useContext(UserContext)
  
const handleSubmit= (e)=>{
  e.preventDefault()
  setUser({Username,password})
}


  return (
    <div>
    <input
     placeholder='Username'
     value={Username}
     onChange={(e)=> setUsername(e.target.value)}
     type="text"
    >
    </input>
    <input
     placeholder='password'
     value={password}
     onChange={(e)=> setPassword(e.target.value)}
     type="text"
    >
    </input>
    <button onClick={handleSubmit}>Submit</button>
    
    </div>
  )
}

export default Login