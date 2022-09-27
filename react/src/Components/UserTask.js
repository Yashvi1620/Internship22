import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DashboardTopbar from "./DashboardTopbar";
import DevloperSideBar from "./DevloperSidebar";
export const UserTask = () => {
  var id = useParams().id;
  var navigate = useNavigate();
  const [taskData, setTaskData] = useState([]);

  var data = [
    {
      TaskName: "Login",
      Description: "hey",
      StartDate: "02-02-2022",
      Enddate: "22-04-2022",
      TotalHours: "22",
      UtilizedHours: "10",
      Project: "FashioNova",
      Module: "hsh",
      Priority: "kkk",
      Status: "shsh",
      Users: "shsh",
    },
  ];
  const fetchDeveloperData = () => {
    axios.get("http://localhost:4000/user_task").then((res) => {
      setTaskData(res.data.data);
    });
  };
  useEffect(() => {
    fetchDeveloperData();
    return () => {};
  }, []);
  const Logout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("email");
    localStorage.removeItem("firstName");
    localStorage.removeItem("role");
    await navigate("/");
  };
  // var rows = data.map(function (row) {
  //   return (

  //   );
  // });

  return (
    <div>
      <div className="wrapper">
       <DevloperSideBar/>
        <div class="main">
         <DashboardTopbar/>
          <main class="content">
            <div class="container-fluid p-0">
              <div class="row">
                <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                  <div class="card flex-fill">
                    <table class="table table-hover my-0" id="table">
                      <thead>
                        <tr>
                          <th>TaskName</th>
                          <th>Description</th>
                          <th>StartDate</th>
                          <th>EndDate</th>
                          <th>TotalHours</th>
                          <th>UtilizedHours</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {taskData.map((row, index) => {
                          if (row)
                            return (
                              <tr key={index}>
                                {console.log("ss", row)}
                                <td>{row?.task?.taskName}</td>
                                <td>{row.task.description} </td>
                                <td>{row.task.startDate} </td>
                                <td>{row.task.endDate} </td>
                                <td>{row.task.totalHours} </td>
                                <td>{row.task.utilizedHours} </td>
                                <td>
                                  <p>
                                    <button class="btn btn-danger">
                                      Pending
                                    </button>
                                    <button class="btn btn-primary">
                                      In Progress
                                    </button>
                                    <button class="btn btn-success">
                                      Done
                                    </button>
                                  </p>
                                </td>
                              </tr>
                            );
                        })}
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
