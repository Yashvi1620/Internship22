import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import DashboardSideBar from "./DashboardSideBar";
import DashboardTopbar from "./DashboardTopbar";
const AllProjectModule = () => {
  
  const [moduleData, setmoduleData] = useState([]);

  var data = [{}];
  const fetchmoduleData = async () => {
    await axios.get(`http://localhost:4000/project_module`).then((res) => {
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


  var rows = data.map(function (row) {
    return (
      <tbody>
        {moduleData.map((row) => {
          return (
            <tr>
              <td>
                {row.modulename}
              </td>
              <td><Link to ={`/ProjectModule/${row.project._id}`}> {row?.project?.projectName} </Link></td>
              <td>{row.startDate}</td>
              <td>{row.endDate}</td>
              <td>{row.estimatedHours}</td>
              {console.log(row)}
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
    fetchmoduleData();
  };

  return (
    <div>
      <div className="wrapper">
        <DashboardSideBar />
        <div class="main">
          <DashboardTopbar />
          <main class="content">
            <div class="container-fluid p-0">
            <h1 class="h3 mb-3">
                <strong>Project-Modules</strong>
              </h1>
              <Link to={`/Project`} class="tag" target="_self">
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
                            <th>ProjectName</th>
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

export default AllProjectModule;
