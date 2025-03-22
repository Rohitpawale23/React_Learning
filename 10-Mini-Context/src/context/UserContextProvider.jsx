
// Creation of user contex provider
import react from 'react'
import UserContext from './UserContext'
import { useState } from 'react'


const UserContextProvider = ({children})=>{

    const [user, setUser] = useState('')
    // const [age, setAge] = useState('')
    return(
        // <UserContext.Provider value={{user, setUser, age, setAge}}>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;