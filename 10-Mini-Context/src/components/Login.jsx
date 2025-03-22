
import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'


// How to fetch values from UserContext
// to fetch values from userContext : useContext is used



function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userage, setuserAge] = useState('')

    // to fetch the values
    // here we are fetching the value of user from userContext

    const {setUser} = useContext(UserContext)
    // const {setAge} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password, userage})
    }
  return (
    <div style={{backgroundColor: "lightblue",
        height: "40vh", display: "flex" ,
        width:"50vh",
        flexDirection: "column" , gap:"10px",
        justifyContent: "center" ,
        border:"2px solid green ", 
        boxShadow:"-moz-initial",
        // width:"50vw",
        padding:"20px",
        margin:"20px auto",
        borderRadius:"30px",
     }}>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='username'/>

        <input 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        type="text" placeholder='password'/>

        <input type="text"
        value={userage}
        placeholder='Enter your Age'
        onChange={(e)=> setuserAge(e.target.value)}
        />
        <button onClick={handleSubmit}>Subimt</button>
    </div>
  )
}

export default Login