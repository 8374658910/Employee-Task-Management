import React, { useEffect } from 'react'
import { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage';
export const AuthContext=createContext();
import { useState } from 'react';
function AuthProvider({children}) {
    const [userdata,setUserdata]=useState([]);


    useEffect(()=>
    {
         localStorage.clear();
      setLocalStorage();
     
          
       const {Employees}= getLocalStorage();
       setUserdata(Employees)


       
       

    },[])

  


   




    
    
  return (
    <div>
        <AuthContext.Provider value={[userdata,setUserdata]}>
        {children}

        </AuthContext.Provider>
      
    </div>

  
    

  )
}

export default AuthProvider