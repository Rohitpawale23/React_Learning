import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid} = useParams()
    return ( 
    <div className='text-2xl text-center m-3 bg-gray-300 p-4'>User : {userid}</div>
  )
}

export default User