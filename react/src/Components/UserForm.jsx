import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const UserForm = () => {
    var {id} =useParams()
    
    const [firstName,setfirstName]= useState([])
    const [email,setemail] = useState('')
    const[role,setrole] = useState('')
    const firstNameChangeHandler =(e)=>{
        setfirstName(e.target.value)
    }
    const emailChangeHandler =(e)=>{
        setemail(e.target.value)
    }
    const roleChangeHandler =(e)=>{
        setrole(e.target.value)
    }
    const submit =(e) =>{
        e.preventDefault()

        axios.post(`http://localhost:4000/users`,data).then(res =>{
            window.location.href=`http://localhost:3000/User`
        })
    }
    var data={
        firstName:firstName,
        email:email,
        password:role
    }
  return (
    <div>
        <form onSubmit={submit}>
        <div class="form-group">
    <label ><b>First Name</b></label>
    <input type="text" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter FirstName' onChange={(e)=>{firstNameChangeHandler(e)}}/>
   
  </div> 
  <div class="form-group">
    <label ><b>Email</b></label>
    <input type="text" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' onChange={(e)=>{emailChangeHandler(e)}}/>
   
  </div>
  <div class="form-group">
    <label ><b>Password</b></label>
    <input type="password" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Password' onChange={(e)=>{roleChangeHandler(e)}}/>
   
  </div> 
  <button type="submit" class="btn btn-primary" >Submit</button> 
        </form>
    </div>
  )
}

export default UserForm