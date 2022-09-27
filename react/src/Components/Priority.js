import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DashboardSideBar from './DashboardSideBar'
import DashboardTopbar from './DashboardTopbar'


export const Priority = () => {
	const [prioritydata, setprioritydata] = useState([])
	  var navigate=useNavigate()

	  var Table = [
		  {
			  "TaskName": "timemanagement",
			  "ProjectName": "to track time",
			  "Priority":"high"
		
			  
		  }
  
	  ]

	 
	
	  const fetchprioritydata = () => {
		  axios.get('http://localhost:4000/priority').then(res => {

			  setprioritydata(res.data.data)
		  })
	  }
	  useEffect(() => {
		  fetchprioritydata()
  
		  return () => {
  
		  }
	  })
  
	  const logout= async(e)=>{
		  e.preventDefault()
		  
		  localStorage.removeItem("email")
		  localStorage.removeItem("firstname")
		  localStorage.removeItem("role")
		
		  await navigate("/")  
		}
  
	  var Project = Table.map(function (row) {
		  return <tbody>{
              
			  prioritydata.map((row) => {
				  const getcolor=(priorityName)=>{
					  if(priorityName=="High")return'red';
					  if(priorityName=="Medium")return'blue';
					  if(priorityName=="Low")return'green';
				  }
			 
				return (
  
					  <tr style={{color:getcolor(row?.priorityName)}}>
						  <td><button >{row?.task?.taskName}</button></td>
						  <td><button >{row?.project?.projectName}</button></td>
					    <td>{row?.priorityName}</td>
						
					  </tr>
  
				  )
			  })
		  }
  
		  </tbody>
	  })
	
	 
	
	
	return (
		<div>
			<div class="wrapper">
				<DashboardSideBar/>
				<div class="main">
        <DashboardTopbar />

					<main class="content">
						<div class="container-fluid p-0">


							<div class="row">
							<h2>Priority-List</h2>
								<div class="col-12 col-lg-12 col-xxl-12 d-flex">
								

									<div class="card flex-fill">

										<table class="table table-hover my-0" id='table'>
											<thead>
												<tr>
													<th>TaskName</th>
													<th>ProjectName</th>
													<th>Priority</th>
												</tr>
											</thead>
										   {Project}
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