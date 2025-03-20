import { useState } from 'react'


import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (

    <UserContextProvider>
        <h1>Context API with Chai</h1>
        <Login/>
        <Profile/>
    </UserContextProvider>
  )
}

export default App


// Any component which is created inside <UserContextProvider> it will have the access of varibles delcared inside Context API


// Context API : Global variable contains all data
//  : is an container which stores global variables
// So we can able to access it within the different components  