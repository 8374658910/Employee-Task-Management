import React from 'react'
import "./Tasknumbers.css"
function Tasknumbers({data}) {

    console.log(data);

    
  return (
    <div>
        <div className='Task' >
            <div className='TaskNumber'>
                <h4>{data.taskNumber.newTask}</h4>
                <h2>NewTask</h2>


            </div>
            <div className='TaskNumber1'>
                <h4>{data.taskNumber.completed}</h4>
                <h2>Completed</h2>


            </div>
            <div className='TaskNumber2'>
                <h4>{data.taskNumber.accepted}</h4>
                <h2>Accepted</h2>


            </div>
            <div className='TaskNumber3'>
                <h4>{data.taskNumber.failed}</h4>
                <h2>Failed</h2>
                 </div>
        </div>
    </div>
  )
}

export default Tasknumbers