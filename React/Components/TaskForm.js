import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios  from 'axios'

export const TaskForm = () => {
    var {taskId} = useParams()
    var navigate = useNavigate()
    const[taskName,settaskName] = useState([])
    const [description,setdescription] = useState('')
    const [startDate,setstartDate] =useState('')
    const [endDate,setendDate] =useState()
    const [totalHours,settotalHours] = useState()
    const [utilizedHours,setutilizedHours] =useState()

    const taskNameChangeHandler =(e) =>{
        settaskName(e.target.value)
    }
    const descriptionChangeHandler=(e) =>{
        setdescription(e.target.value)
    }
    const startDateChangeHandler =(e) =>{
        setstartDate(e.target.value)
    }
    const endDateChangeHandler =(e) =>{
        setendDate(e.target.value)
    }
    const totalHoursChangeHander =(e) =>{
        settotalHours(e.target.value)
    }
    const utilizedHoursChangeHandler =(e) =>{
        setutilizedHours(e.target.value)
    }
    const submit =(e) =>{
        e.preventDefault()

        axios.post(`http://localhost:4000/task/`,data).then(res=>{
            window.location.href=`http://localhost:3000/Tasks`
    })
}
var data ={
    taskName:taskName,
    description:description,
    startDate:startDate,
    endDate:endDate,
    totalHours:totalHours,
    utilizedHours:utilizedHours,
     module:taskId
}
  return (
    <div>
          <form onSubmit={submit}>
        <div class="form-group">
    <label ><b>Task Name</b></label>
    <input type="text" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter TaskName' onChange={(e)=>{taskNameChangeHandler(e)}}/>
   
  </div> 
  
  <div class="form-group">
    <label ><b>StartDate</b></label>
    <input type="date" class="form-control"  id="exampleInputPassword1" placeholder="" onChange={(e)=>{startDateChangeHandler(e)}}/>
  </div>
  <div class="form-group">
    <label><b>EndDate</b></label>
    <input type="date" class="form-control"  id="exampleInputPassword1" placeholder="" onChange={(e)=>{endDateChangeHandler(e)}}/>
  </div>
  <div class="form-group">
    <label ><b>TotalHours</b></label>
    <input type="number" class="form-control"  id="exampleInputPassword1" placeholder="Enter TotalHours" onChange={(e)=>{totalHoursChangeHander(e)}}/>
  </div>
  <div class="form-group">
    <label ><b>UtilizedHours</b></label>
    <input type="number" class="form-control"  id="exampleInputPassword1" placeholder="Enter UtilizedHours" onChange={(e)=>{utilizedHoursChangeHandler(e)}}/>
  </div>
  <div class="form-group">
    <label ><b>Description</b></label>
    <input type="text" class="form-control"  id="exampleInputPassword1" placeholder="Enter Description" onChange={(e)=>{descriptionChangeHandler(e)}}/>
  </div>
  
  <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}
