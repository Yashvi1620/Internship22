import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Form } from './ModuleForm'

export const UpdateProjectModule = () => {
    var {updateModuleId} = useParams();
    const[data,setdata] = useState('')
    const[modulename,setmodulename]=useState(data.modulename)
    const[startDate,setstartDate]=useState(data.startDate)
    const[endDate,setendDate]=useState(data.endDate)
    const[estimatedHours,setestimatedHours]=useState(data.estimatedHours)
    const[utilizedHours,setutilizedHours]=useState(data.utilizedHours)
    const updateData =() => {
        axios.get(`http://localhost:4000/project_module`).then(res =>{
            console.log('res',res.data.data.find((module)=> module._id===updateModuleId))
            setdata(res.data.data.find((module)=> module._id===updateModuleId))
        }).catch(err=> {console.log('err',err)})
    }

    useEffect(() =>{
        updateData()
    },[])
    const update =(e) =>{
        var updateData ={
            moduleid:data._id,
            project:data.project._id,
            modulename:modulename,
            startDate:startDate,
            endDate:endDate,
            estimatedHours: estimatedHours,
            utilizedHours:utilizedHours
        }
        e.preventDefault()
        window.location.href=`http://localhost:3000/ProjectModule/${data.project._id}`
        axios.put(`http://localhost:4000/project_module`,updateData).then(res =>{
            console.log(res.data.data);
        })
    }
  return (
    <div>
       <form onSubmit={update}>
            <div class="form-group">
                    <label ><b>Module Name</b></label>
                    <input type="text" class="form-control" id="exampleInputEmail1" defaultValue={data.modulename} 
                    onChange={(e) => setmodulename(e.target.value)} />

            </div>
           
            <div class="form-group">
                    <label ><b>StartDate</b></label>
                    <input type="date" class="form-control" id="exampleInputPassword1" defaultValue={data.startDate} onChange={(e) => setstartDate(e.target.value)} />
            </div>
            <div class="form-group">
                    <label><b>EndDate</b></label>
                    <input type="date" class="form-control" id="exampleInputPassword1" defaultValue={data.endDate} onChange={(e) => setendDate(e.target.value)} />
            </div>
            <div class="form-group">
                    <label ><b>EstimatedHours</b></label>
                    <input type="number" class="form-control" id="exampleInputPassword1" defaultValue={data.estimatedHours} onChange={(e) => setestimatedHours(e.target.value)} />
            </div>
            <div class="form-group">
                    <label ><b>UtilizedHours</b></label>
                    <input type="text" class="form-control" id="exampleInputPassword1" defaultValue ={data.utilizedHours} onChange={(e) => setutilizedHours(e.target.value)} />
            </div>
            <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
    </div>
  )
}
