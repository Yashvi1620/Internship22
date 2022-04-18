import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";
import DashboardTopbar from "./DashboardTopbar";
import DevloperSideBar from "./DevloperSidebar";

const DeveloperTask = () => {
  const [taskData, settaskData] = useState([]);
  const userId = localStorage.getItem("userId");
  console.log(userId);
  var data = [{}];
  const fetchtaskData = async () => {
    await axios.get(`http://localhost:4000/user_task`).then((res) => {
      settaskData(res.data.data);
    });
  };
  useEffect(() => {
    fetchtaskData();
    return () => {};
  }, []);
  console.log("task", taskData);

  var rows = data.map(function (row) {
    return (
      <tbody>
        {console.log(
          "taskData",
          taskData.filter((data) => data?.user?._id === userId)
        )}
        {taskData
          .filter((data) => data?.user?._id === userId)
          ?.map((row) => {
            return (
              <tr>
               <td>{row?.project?.projectName}</td>
               <td>{row?.module?.modulename}</td>

                <td>{row?.task?.taskName}</td>
                <td>{row.user.firstName} </td>
                <td>{row.task?.description}</td>
                <td>{row.task?.task?.startDate}</td>
                <td>{row.task?.endDate}</td>
                <td>{row.task?.totalHours}</td>
                <td>{row.task?.utilizedHours}</td>

                <td>{row?.status?.statusname}</td>
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
                  <Link to={`/UpdateTask/${row._id}`}>UPDATE</Link>
                  <br></br>
                  <br></br>
                  <Link to={`/Users/${row._id}`}>ASSIGN</Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    );
  });
  const deleteData = (id) => {
    axios.delete(`http://localhost:4000/user_task/${id}`).then((res) => {
      if (res.status == 200) {
        alert(res.data.msg);
      }
    });
  };

  return (
    <div>
      <div className="wrapper">
        <DevloperSideBar />
        <div class="main">
          <DashboardTopbar />
          <main class="content">
            <div class="container-fluid p-0">
              <Link to={`/TaskForm`} class="tag" target="_self">
                Add Task
              </Link>
              <div class="row">
                <div class="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3"></div>
                <div class="row">
                  <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                    <div class="card flex-fill">
                      <table class="table table-hover my=0" id="table">
                        <thead>
                          <tr>
                            <th>Project Name</th>
                            <th>Module Name</th>

                            <th>TaskName</th>
                            <th>User</th>
                            
                            <th>Description</th>
                            <th>StartDate</th>
                            <th>EndDate</th>
                            <th>TotalHours</th>

                            <th>UtilizedHours</th>
                            
                            <th>Status</th>
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
                      href="https:adminkit.io/"
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
                        href="https:adminkit.io/"
                        target="_blank"
                      >
                        Support
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="text-muted"
                        href="https:adminkit.io/"
                        target="_blank"
                      >
                        Help Center
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="text-muted"
                        href="https:adminkit.io/"
                        target="_blank"
                      >
                        Privacy
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        class="text-muted"
                        href="https:adminkit.io/"
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

export default DeveloperTask;
