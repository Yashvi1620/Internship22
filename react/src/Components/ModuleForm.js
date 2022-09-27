import React,{ useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

export const ModuleForm = () =>{
    var {moduleId}= useParams()
    var navigate= useNavigate()
    const [project,setproject]=useState([])
    const [moduleName, setmoduleName] = useState('')
    
    const [startDate,setstartDate] = useState('')
    const [endDate,setendDate] =useState()
    const [estimatedHours,setestimatedHours]=useState()
    const [utilizedHours,setutilizedHours]=useState()
    
    const moduleNameChangeHandler=(e)=>{
        setmoduleName(e.target.value)
    }
    
    const startDateChangeHandler=(e)=>{
        setstartDate(e.target.value)
    }
    const endDateChangeHandler=(e)=>{
        setendDate(e.target.value)
    }
    const estimatedHoursChangeHandler=(e)=>{
        setestimatedHours(e.target.value)
    }
    const utilizedHoursChangeHandler=(e)=>{
        setutilizedHours(e.target.value)
    }
    const projectChangeHandler=(e)=>{
        setproject(e.target.value)
    }
    console.log(moduleId)
    const submit =(e)=>{
        e.preventDefault()
        
        
        axios.post(`http://localhost:4000/project_module/`,data).then(res=>{
            window.location.href=`http://localhost:3000/ProjectModule/${moduleId}`
        })
    }
    var data={
        modulename:moduleName,
       
        startDate:startDate,
        endDate:endDate,
        estimatedHours:estimatedHours,
        utilizedHours:utilizedHours,
        project:moduleId
    }
return(
    <div>
        <form onSubmit={submit}>
        <div class="form-group">
    <label ><b>Module Name</b></label>
    <input type="text" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter ModuleName' onChange={(e)=>{moduleNameChangeHandler(e)}}/>
   
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
    <label ><b>EstimatedHours</b></label>
    <input type="number" class="form-control"  id="exampleInputPassword1" placeholder="Enter EstimatedHours" onChange={(e)=>{estimatedHoursChangeHandler(e)}}/>
  </div>
  <div class="form-group">
    <label ><b>UtilizedHours</b></label>
    <input type="number" class="form-control"  id="exampleInputPassword1" placeholder="Enter UtilizedHours" onChange={(e)=>{utilizedHoursChangeHandler(e)}}/>
  </div>
  
  <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>
)

}