import React ,{useState,useContext} from "react";
import userContext from '../context/userContext';


function login(){const [username,setusername]=Usestate('')
   const [password,setpassword]=Usestate('')
   const {setUser}=useContext(userContext)


    const handleSubmit=()=>{
        e.preventDefault()
        setuser({username,password})
    }
    return(
        <div>
            <h1>Login</h1>
            <input type='text' value={username}  onChange={(e)=>setusername(e.target.value)}
             placeholder='username'/>
             <div>"     "</div>
            <input type='text' value={password}  onChange={(e)=>setpassword(e.target.value)}placeholder='password'/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default login;