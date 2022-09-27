import React, { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios  from 'axios'

export const RoleForm = () => {
    var {roleId} = useParams()
    var navigate = useNavigate()
    const[roleName,setroleName] = useState([])
   

    const roleNameChangeHandler =(e) =>{
        setroleName(e.target.value)
    }
    
    const submit =(e) =>{
        e.preventDefault()

        axios.post(`http://localhost:4000/roles/`,data).then(res=>{
            window.location.href=`http://localhost:3000/Roles`
    })
}
var data ={
    roleName:roleName,
   
}
  return (
    <div>
          <form onSubmit={submit}>
        <div class="form-group">
    <label ><b>Role Name</b></label>
    <input type="text" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter RoleName' onChange={(e)=>{roleNameChangeHandler(e)}}/>
   
  </div> 
  
  
 
  
  <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>
  )
}
