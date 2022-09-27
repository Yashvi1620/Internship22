import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardSideBar from './DashboardSideBar'
import DashboardTopbar from './DashboardTopbar'

export const Roles = () => {
  const [roleData,setRoleData] = useState();
  const fetchRoleData =() =>{
    axios.get("http://localhost:4000/roles").then((res)=>{
      setRoleData(res.data.data);
    })
  }
  useEffect(()=>{
    fetchRoleData();
  },[])
  return (
    <div>
      {console.log(roleData)}
        <div className="wrapper"> 
        <DashboardSideBar />
	  <div class="main">


    <DashboardTopbar />
        <main class="content">
        <div class=" w-full">
              <div className="flex justify-between items-center w-full">
                <h1 className="">Roles</h1>
                <Link
                  className="ml-4 font-bold tracking-widest px-4  bg-blue-400 "
                  to="/RoleForm"
                  class="tag"
                  target="_self"
                >
                  Add Role
                </Link>
              </div>
              <div class="row">
                <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                  <div class="card flex-fill">
                    <table class="table table-hover my=0" id="table">
                      <thead>
                        <tr>
                          
                         
                          <th>Role Name</th>
                          <th>Action</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        {roleData &&
                          roleData.map((role, index) => (
                            <tr key={index} className="py-4">
                              
                              <td>{role.roleName}</td>
                              <td className="gap-3">
                                <Link to="" className="font-semibold px-2">
                                  Update
                                </Link>
                                <Link to="">Delete</Link>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
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
