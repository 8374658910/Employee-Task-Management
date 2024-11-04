import React from 'react'
import "./CreateTask.css"
import {useState} from "react";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';


function CreateTask() {

  
  const [userdata,setUserdata]=useContext(AuthContext)
 
const [formdata,setFormdata]=useState({
  title:' ',
  category:' ',
  date:' ',
  description:' ',
  accepted:true,
  newtask:true,
  completed:true,
  failed:false,

});
const [assign,setAssign]=useState('');
const [Task,setTask]=useState({});
const handleChange=(e)=>
{
  const {name,value}=e.target;

  setFormdata((prevFormData)=>(
    {
      ...prevFormData,[name]:value
    }
  ))
}


  const submitHandler=(e)=>
  {
    e.preventDefault();

    console.log("form Submitted ",formdata);

    setTask(formdata);
    
    setAssign(" ");

    const data=userdata;

   
   data.forEach((element) => {
    if(assign==element.firstName)
    {
      
      element.tasks.push(Task);

      element.taskNumber.newTask+=1;
      
      


    }
   
   }); 
  

   setUserdata(data);

   console.log(data)


   resetForm();
   setAssign('')
  }



  const resetForm=  ()=>
  {
    setFormdata({
      title:' ',
      category:' ',
      date:' ',
      assign:' ',
      description:' ',
    })
  }
  
  
  return (
    <div className='CreateTask'>
           
            <form  onSubmit={submitHandler}>
            <div className='Task_part'>
            <div>
              <div className='Task_part1-1'>
              <h4>Task Title</h4>
              <input type="text" placeholder='Make A Ui Design' value={formdata.title} name='title' onChange={handleChange} />
              </div>
              <div  className='Task_part1-1' >
              <h4>Date</h4>
              <input type="date"  value={formdata.date}  name='date' onChange={handleChange}/>
              </div>
              <div className='Task_part1-1'>
              <h4>Assign to</h4>
              <input type="text" placeholder='Employee Name'  value={assign} name="assign" onChange={(e)=>setAssign(e.target.value)}/>
              </div>
              <div className='Task_part1-1'>
              <h4>Category</h4>
              <input type="text" placeholder="design ,dev,etc"  value={formdata.category} name='category' onChange={handleChange}/>
              </div>


            </div>
            <div className='Task_part2'>
              <div className='Task_part2_1'>
              <h4>Description</h4>
              <textarea  id="" rows={15} cols={60}  value={formdata.description}  name="description" onChange={handleChange}></textarea>
              </div>
              <button>Create Task</button>

            </div>
            </div>
            </form>


     
    </div>
  )
}

export default CreateTask