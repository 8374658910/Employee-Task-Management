import React from 'react'
import Header from '../../Others/Header'
import Tasknumbers from '../../Others/Tasknumbers'
import TaskList from '../Tasklist/TaskList'

function EmployeeDashBoard(props) {
 
  return (
    <div className='Employee'>
        <div>
        <Header  changeUser={props.changeUser} data={props.data}/>
      <Tasknumbers data={props.data}/>
      <TaskList data={props.data} />
        </div>
    </div>
  )
}

export default EmployeeDashBoard