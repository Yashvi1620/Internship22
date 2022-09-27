import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate,NavLink} from "react-router-dom";
import DashboardSideBar from "./DashboardSideBar";
import DashboardTopbar from "./DashboardTopbar";

export const Tasks = () => {
 
  var id = useParams().id;
  const [taskData, settaskData] = useState([]);
  var data = [{}];
  const fetchtaskData = async () => {
    await axios.get(`http://localhost:4000/task`).then((res) => {
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
        {taskData?.map((row) => {
            
          return (
            <tr>
              <td>{row?.project?.projectName}</td>
               <td>{row?.module?.modulename}</td>
             
              <td>{ row.taskName}</td>
              <td>{row.description}</td>
              <td>{row.startDate}</td>
              <td>{row.endDate}</td>
              <td>{row.totalHours}</td>
              <td>{row.utilizedHours}</td>
              
              
              
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
                  <Link to ={`User/${row._id}`}>
                    ASSIGN
                  </Link>
                </td>
              
            </tr>
          );
                                }
        )}
      </tbody>
    );
  });
  const deleteData = (id) => {
    axios.delete(`http://localhost:4000/task/${id}`).then((res) => {
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
