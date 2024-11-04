import React, { useContext, useEffect,useState } from 'react'
import Login from './Components/Login'
import Header from './Others/Header'
import Tasknumbers from './Others/Tasknumbers'
import TaskList from './Components/Tasklist/TaskList'
import "./App.css"
import EmployeeDashBoard from './Components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './Components/DashBoard/AdminDashBoard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {


  const [user,setUser] =useState(null);
  const[loggedinuser,setLoggedinuser]=useState(null);
  
 
  const [userdata,setUserdata]=useContext(AuthContext);


  useEffect(()=>
  {
    const loggedInuser=localStorage.getItem('loggedinuser')
    if(loggedInuser)
    {
      const userData1=JSON.parse(loggedInuser);
     
       setUser(userData1.role);

      setLoggedinuser(userData1.data)
    }
  },[])


  const LoginHandler=(mail,password)=>
  {
    
    
    if(mail=="admin@example.com" && password=="1234")
    {
      console.log("login ed successfully")
      setUser("Admin");
      localStorage.setItem("loggedinuser",JSON.stringify({role:"Admin"}))
    }
    else if(userdata)
      {
        const employee=userdata.find((e)=>e.email==mail && e.password==password)
        if(employee)
        {
          setUser("user");
          localStorage.setItem("loggedinuser",JSON.stringify({role:"Employee",data:employee}))
          setLoggedinuser(employee)
        }
     }
    
    else{
      alert("invalid Creditials");
    }
  }

 
  return (
    <div className='App'>
      {
       !user? <Login LoginHandler={LoginHandler}/>: " "}
      
      
           { user=='Admin'? <AdminDashBoard changeUser={setUser} /> : ( user=="user"? <EmployeeDashBoard changeUser={setUser} data={loggedinuser}/>: " ")}
      
       

      
      
       
        
      
       
     
     
      </div>
  )
}

export default App