import React from 'react'

function FailedTask({data}) {
  return (
    <div className='TaskList-3'>
            <div className='Task1-3'>
                <button>{data.category}</button>
                <h4>{data.date}</h4>

            </div>
            <div className='task2-3'>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                     <button  className='status_button-1'>Failed</button>

            </div>

        </div>

    
  )
}

export default FailedTask