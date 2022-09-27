import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate,NavLink } from "react-router-dom";
import axios from "axios";
import DashboardSideBar from "./DashboardSideBar";

export const ProjectModule = () => {
  var navigate = useNavigate()
  var id = useParams().id;
  const [moduleData, setmoduleData] = useState([]);

  var data = [{}];
  const fetchmoduleData = async () => {
    console.log(id);
    await axios
      .get(`http://localhost:4000/project_module/${id}`)
      .then((res) => {
        console.log("project_module ", res.data.data);
        setmoduleData(res.data.data);
        console.log("project", res.data.data[0].modulename);
        console.log("startDate", res.data.data[0].startDate);
        console.log("endDate", res.data.data[0].endDate);
        console.log("utlizedHours", res.data.data[0].project.project_id);
      });
  };
  useEffect(() => {
    fetchmoduleData();
    return () => {};
  }, []);
  const Logout = async(e) => {
    e.preventDefault()
    localStorage.removeItem("email")
    localStorage.removeItem("firstName")
    localStorage.removeItem("role")
    await navigate ("/")
  }

  var rows = data.map(function (row) {
    return (
      <tbody>
        {moduleData.map((row) => {
          if (id == row.project._id) {
            return (
              <tr>
                <td>
                  {row.modulename}
                </td>
                <td>{row.startDate}</td>
                <td>{row.endDate}</td>
                <td>{row.estimatedHours}</td>
                {/* <td>{row.project.projectName}</td> */}
                <td>{row.utilizedHours}</td>
                <td>
                  <Link
                    to=""
                    onClick={() => {
                      deleteData(row._id);
                    }}
                  >
                    DELETE
                  </Link>
                  <br></br>
                  <br></br>
                  <Link to={`/UpdateProjectModule/${row._id}`}>UPDATE</Link>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    );
  });
  const deleteData = (id) => {
    axios.delete(`http://localhost:4000/project_module/${id}`).then((res) => {
      if (res.status == 200) {
        alert(res.data.msg);
      }
    });
  };

  return (
    <div>
      <div className="wrapper">
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
              <Link to={`/ModuleForm/${id}`} class="tag" target="_self">
                Add Module
              </Link>
              

              <div class="row">
                <div class="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3"></div>
                <div class="row">
                  <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                    <div class="card flex-fill">
                      <table class="table table-hover my=0" id="table">
                        <thead>
                          <tr>
                            <th>ModuleName</th>

                            <th>StartDate</th>
                            <th>EndDate</th>
                            <th>EstimatedHours</th>
                            {/* <th>Project Name</th> */}
                            <th>UtilizedHours</th>
                            {<th>Action</th>}
                          </tr>
                        </thead>
                        {rows}
                      </table>
                    </div>
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
                    <a
                      class="text-muted"
                      href="https://adminkit.io/"
                      target="_blank"
                    >
                      <strong>TimeTracking</strong>
                    </a>{" "}
                    &copy;
                  </p>
                </div>
                <div class="col-6 text-end">
                  <ul class="list-inline">
                    <li class="list-inline-item">
                      <a
                        class="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Support
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Help Center
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Privacy
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="text-muted"
                        href="https://adminkit.io/"
                        target="_blank"
                      >
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
