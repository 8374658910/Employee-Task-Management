import React from 'react'
import "./AllTask.css";
import { useContext } from 'react';
import {AuthContext } from "../Context/AuthProvider"

function AllTask() {

    const [userdata,setUserdata]=useContext(AuthContext)

    
  return (
    <div className='Alltask'>
        <div className='Alltask1'>
            <h3>Emp Name</h3>
            <h3>New Task</h3>
            <h3>Active</h3>
            <h3>Completed</h3> 
            <h3>Failed</h3>
          
        </div>


          <div className='Alltask_Auto'>
        {
            userdata.map((elem ,id)=>
            {
                return(
                <div className='Alltask2' key={id}>
            <h2 className='EmployeeName' >{elem.firstName}</h2>
            <h2 className="newTask">{elem.taskNumber.newTask}</h2>
            <h2 className='Accepted'>{elem.taskNumber.accepted}</h2>
            <h2 className='completed'>{elem.taskNumber.completed}</h2>
            <h2 className='Failed'>{elem.taskNumber.failed}</h2>
        
        </div>

              )  })

        }
        </div>
    
    </div>
  )
}

export default AllTask