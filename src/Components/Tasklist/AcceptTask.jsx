import React from 'react'

function AcceptTask({data}) {
  return (
    <div className='TaskList-1'>
            <div className='Task1-1'>
                <button>{data.category}</button>
                <h4>{data.date}</h4>

            </div>
            <div className='task2-1'>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                     <button className='status_button2'>Active in </button>

            </div>

        </div>
  )
}

export default AcceptTask