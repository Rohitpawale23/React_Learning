
// Context are purely written in javascript .js syntax
// It is used to store global varaibles 
// And State management 


// for each context - we must have to make an "Contex Provider" which provides the data

import React from 'react'
import { createContext } from 'react'

const UserContext = createContext()


export default UserContext;