import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";
import DashboardTopbar from "./DashboardTopbar";

export const Dashboard = () => {
  var navigate = useNavigate();
  const [projectsData, setprojectsData] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log(email);
    if(!email){
      navigate("/login");
    }
  }, []);

  var data = [
    {
      ProjectName: "TimeTracking",
      Description: "To track time",
      StartDate: "12-03-22",
      EndDate: "5-02-23",
      EstimatedHours: "22",
      Technology: "MERN",
    },
  ];
  const fetchProjectData = () => {
    axios.get("http://localhost:4000/project").then((res) => {
      setprojectsData(res.data.data);
    });
  };
  useEffect(() => {
    fetchProjectData();
    return () => {};
  });
  const Logout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("role");
    await navigate("/");
  };

  var rows = data.map(function (row) {
    return (
      <tbody>
        {projectsData.map((row) => {
          return (
            <tr>
              <td>
                <Link to={`/ProjectModule/${row._id}`}>{row.projectName}</Link>
              </td>
              <td>{row.description}</td>
              <td>{row.startDate}</td>
              <td>{row.endDate}</td>
              <td>{row.technology}</td>
              <td>{row.estimatedHours}</td>
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
                <Link to={`update/${row._id}`}>UPDATE</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  });
  const deleteData = (id) => {
    axios.delete(`http://localhost:4000/project/${id}`).then((res) => {
      if (res.status == 200) {
        alert(res.data.msg);
      }
    });
  };

  return (
    <div>
      <div className="wrapper">
        <DashboardSideBar />
        <div class="main">
          <DashboardTopbar />
          <main class="content">
            <div class="container-fluid p-0">
              <Link to="/Form" class="tag" target="_self">
                Add Project
              </Link>
              <h1 class="h3 mb-3">
                <strong>Projects-List</strong>
              </h1>

              <div class="row">
                <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                  <div class="card flex-fill">
                    <table class="table table-hover my=0" id="table">
                      <thead>
                        <tr>
                          <th>ProjectName</th>
                          <th>Description</th>
                          <th>StartDate</th>
                          <th>EndDate</th>
                          <th>EstimatedHours</th>
                          <th>Technology</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {rows}
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
