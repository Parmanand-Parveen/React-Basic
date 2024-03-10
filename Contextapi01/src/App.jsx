import { useState } from 'react'

import Login from './Component/Login'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Component/Profile'

function App() {
  
  return (
    <>
     <UserContextProvider>
     <Login/>
     <Profile/>
     </UserContextProvider>
      
    </>
  )
}

export default App
