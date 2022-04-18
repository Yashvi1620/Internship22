import axios from 'axios';
import React, { useEffect ,useState} from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'
import DashboardSideBar from './DashboardSideBar';

export const User = () => {
  var id = useParams().id;
  var navigate = useNavigate()
  const[developerdata,setdeveloperdata]=useState([])
  var data =[
    {
      "FirstName":"Yashvi",
      "Email":"To track time"
    }
  ]
  const fetchDeveloperData =() =>{
    axios.get("http://localhost:4000/users").then(res=>{
      setdeveloperdata(res.data.data)
    })
  }
  useEffect(()=>{
    fetchDeveloperData()
    return() =>{

    }
  },[])
  const Logout = async(e) => {
    e.preventDefault()
    localStorage.removeItem("email")
    localStorage.removeItem("firstName")
    localStorage.removeItem("role")
    await navigate ("/")
  }
  var rows = data.map(function(row){
    return<tbody>
      {
        developerdata.map((row)=>{
          const addtask=(e)=>{
            e.preventDefault()
            var data={
              user:row._id,
              task:id
            }
            
            axios.post(`http://localhost:4000/user_task`,data).then(res=>{
              
            })
          }
          if(row.role._id==="6253fc347b6f4e198a0e90c3"){
            return(
              <tr>
                <td> {row.firstName}</td>
                <td>{row.email}</td>
                <td><Link to=""onClick={addtask}>Add Task</Link></td>
              </tr>
            )
          }
        })
      }
    </tbody>
  })
  return (
    <div><div className="wrapper"> 
    <DashboardSideBar/>
    <div class="main">


      <nav class="navbar navbar-expand navbar-light navbar-bg">
        <a class="sidebar-toggle js-sidebar-toggle">
          <i class="hamburger align-self-center"></i>
        </a>
        <div class="navbar-collapse collapse">
            <ul class ="navbar-nav navbar-align">
              <button class="logout-button" type='button' onClick={Logout}>
                <h4>
                  LOGOUT
                </h4>
              </button>
            </ul>
            </div>
      </nav>
      <main class="content">
        <div class="container-fluid p-0">
          
          
          <div class="row">
            <div class="col-12 col-lg-8 col-xxl-9 d-flex">
              <div class="card flex-fill">
                <table class ="table table-hover my-0" id='table'>
                  <thead>
                    <tr>
                      <th>FirstName</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {rows}
                </table>
              </div>
            </div>
            <div class="col-12 col-lg-4 col-xxl-3 d-flex">
             
            </div>
          </div>
        </div>
      </main>
      <footer class="footer">
        <div class="container-fluid">
          <div class="row text-muted">
            <div class="col-6 text-start">
              <p class="mb-0">
                <a class="text-muted" href="https://adminkit.io/"
                  target="_blank"><strong>TimeTracking</strong></a> &copy;
              </p>
            </div>
            <div class="col-6 text-end">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="text-muted" href="https://adminkit.io/" target="_blank">Support</a>
                </li>
                <li class="list-inline-item">
                  <a class="text-muted" href="https://adminkit.io/" target="_blank">Help Center</a>
                </li>
                <li class="list-inline-item">
                  <a class="text-muted" href="https://adminkit.io/" target="_blank">Privacy</a>
                </li>
                <li class="list-inline-item">
                  <a class="text-muted" href="https://adminkit.io/" target="_blank">Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
    </div>
  )
}
