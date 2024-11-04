import React from 'react'
import CreateTask from '../../Others/CreateTask'
import Header from '../../Others/Header'
import AllTask from"../../Others/AllTask"

function AdminDashBoard(props) {
  return (
    <div className='Admin'>
        <Header  changeUser={props.changeUser}/>
        <CreateTask/>
        <AllTask/>
        
    </div>
  )
}

export default AdminDashBoard