import React from 'react'
import "./Header.css";
import { useState } from 'react';

function Header(props) {
 
 

 
  

  const handler=()=>
  {
    localStorage.setItem("loggedinuser",'');
    // window.location.reload();
    props.changeUser('');
  }
  return ( 
    <div className='Header'>
        <div className='Header1'>
            <div>

             <h4>Hii</h4>
             <h3>username<span>👋</span> </h3>

            </div>
            <div className='login_button'>
                <button onClick={handler}>Log Out</button>

            </div>
        </div>




    </div>
  )
}

export default Header