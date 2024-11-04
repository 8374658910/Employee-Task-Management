import React from 'react'
import "./TaskList.css"
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  
  return (
   <div>
    <div className='TaskBar'>
        {
            data.tasks.map((elem , id)=>
            {
                    
                if(elem.active)
                {
                   return <NewTask key={id} data={elem}/>
                }
                if(elem.completed)
                {
                   return <CompleteTask key={id} data={elem}/>
                }
                if(elem.accepted)
                {
                    return <AcceptTask key={id} data={elem}/>
                }
                if(elem.failed)
                {
                   return  <FailedTask key={id} data={elem}/>
                }

             }) }
                
                   
                
              

        
        
        

        
    </div>
   </div>
  )
}

export default TaskList