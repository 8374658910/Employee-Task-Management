import React from 'react'
import "./Login.css"
import { useState } from 'react'

function Login({LoginHandler}) {

    const [mail,setmail]=useState("");
    const [password,setPassword] =useState("");

    const submitHandler=(e)=>
    {
        e.preventDefault();
        console.log("submitted");
        console.log("the mial is ",mail);
        console.log("the password is:", password);
        LoginHandler(mail,password);
        setmail("")
        setPassword("");


    }
  return (

        <div className='Login_1'>
            <div  className='Login_2'>
                <form  className='Login' onSubmit={submitHandler}>
                <input type="email" required placeholder='Enter the Mail' value={mail}  onChange={(e)=>setmail(e.target.value)}  />
                <input type="password" required placeholder='Enter the Password' value={password}   onChange={(e)=>{setPassword(e.target.value)}} />
                <button>Login</button>
                </form>
            </div>





        </div>


  )
}

export default Login