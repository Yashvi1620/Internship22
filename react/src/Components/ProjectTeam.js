import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DevloperSideBar from './DevloperSidebar';


export const ProjectTeam = () => {

	var id = useParams().id;
	var navigate = useNavigate()
	const [projectdata, setprojectdata] = useState([])

	var Table = [
		{
			"ProjectName": "timemanagement",
			"Description": "to track time",
			"Technology": "Python"


		}

	]
	const fetchprojectdata = () => {
		axios.get('http://localhost:4000/project').then(res => {
			setprojectdata(res.data.data)
			console.log(res.data.data);
		})
	}
	useEffect(() => {
		fetchprojectdata()

		return () => {

		}
	}, [])

	const logout = async (e) => {
		e.preventDefault()

		localStorage.removeItem("email")
		localStorage.removeItem("firstname")
		localStorage.removeItem("role")

		await navigate("/")
	}


	var Project = Table.map(function (row) {
		return <tbody>{

			projectdata.map((row) => {

                const button = (e)=>{
					e.preventDefault()
					navigate(`/Team/${row._id}`)
				}


				return (

					<tr>
						<td><button onClick={button} >{row.projectName}</button></td>
						<td><button onClick={button}>{row.description}</button></td>
						<td><button onClick={button}>{row.technology}</button></td>

					</tr>

				)


			})
		}

		</tbody>
	})


	return (
		<div>
			<div class="wrapper">
				<DevloperSideBar/>
				<div class="main">
        <nav class="navbar navbar-expand navbar-light navbar-bg">
        <a class="sidebar-toggle js-sidebar-toggle">
          <i class="hamburger align-self-center"></i>
        </a>
        <div class="navbar-collapse collapse">
            <ul class ="navbar-nav navbar-align">
              <button class="logout-button" type='button' onClick={logout}>
                <h4>
                  LOGOUT
                </h4>
              </button>
            </ul>
            </div>
      </nav>

					<main class="content">
						<div class="container-fluid p-0">
						<h1 class="h3 mb-3"><strong>Project-List</strong></h1> <br></br>

							<div class="row">
								<div class="col-12 col-lg-12 col-xxl-12 d-flex">
									<div class="card flex-fill">

										<table class="table table-hover my-0" id='table'>
											<thead>
												<tr>
													<th>ProjectName</th>
													<th>Description</th>
													<th>Technology</th>
													
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