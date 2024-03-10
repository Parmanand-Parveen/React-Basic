import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider=({children})=> {
    const [user, setUser] = useState(null)
        return(
            <UserContext.Provider value={{user,setUser}}>
            {children}
            </UserContext.Provider>
        )
};

// export function useUser(){useContext(UserContext)}

export default UserContextProvider