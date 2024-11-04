import React from 'react'

function NewTask({data}) {
  return (
    <div className='TaskList'>
            <div className='Task1'>
                <button>{data.category}</button>
                <h4>{data.date}</h4>

            </div>
            <div className='task2'>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                         <div className='StatusB'>
                     <button className='status_button1'>Mark As Complete</button>
                     <button  className='status_button1-1'>Mark As Failed</button>
                     </div>

            </div>

        </div>
        
  )
}

export default NewTask