import React from 'react'

function CompleteTask({data}) {
  return (
    <div className='TaskList-2'>
    <div className='Task1-2'>
        <button>{data.category}</button>
        <h4>{data.date}</h4>

    </div>
    <div className='task2-2'>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
             <button  className='status_button'>Completed</button>

    </div>

</div>
   
  )
}

export default CompleteTask