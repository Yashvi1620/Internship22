import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DevloperSideBar from "./DevloperSidebar";
import DashboardTopbar from "./DashboardTopbar";
import DashboardSideBar from "./DashboardSideBar";

const UserPage = () => {
  const role = localStorage.getItem("role");
  const [userData, setUserData] = useState();
  const fetchUserData = () => {
    axios.get("http://localhost:4000/users").then((res) => {
      setUserData(res.data.data);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  const deleteData = (id) => {
    axios.delete(`http://localhost:4000/users/${id}`).then((res) => {
      if (res.status == 200) {
        alert(res.data.msg);
        fetchUserData();
      }
    });
  };

  return (
    <div>
      {console.log(userData)}
      <div className="wrapper">
        {console.log(role)}
        {role === "developer" ? <DevloperSideBar /> : <DashboardSideBar />}
        <div class="main">
          <DashboardTopbar />
          <main class="content w-full">
            <div class=" w-full">
              <div className="flex justify-between items-center w-full">
                <h1 className="">User</h1>
                <Link
                  className="ml-4 font-bold tracking-widest px-4  bg-blue-400 "
                  to="/UserForm"
                  class="tag"
                  target="_self"
                >
                  Add User
                </Link>
              </div>
              <div class="row">
                <div class="col-12 col-lg-12 col-xxl-12 d-flex">
                  <div class="card flex-fill">
                    <table class="table table-hover my=0" id="table">
                      <thead>
                        <tr>
                          <th>FirstName</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {userData &&
                          userData.map((user, index) => (
                            <tr key={index} className="py-4">
                              <td>{user.firstName}</td>
                              <td>{user.email}</td>
                              <td>{user?.role?.roleName}</td>
                              <td className="gap-3">
                                <Link to="" className="font-semibold px-2">
                                  Update
                                </Link>
                                <Link
                                  to=""
                                  onClick={() => {
                                    deleteData(user._id);
                                  }}
                                >
                                  DELETE
                                </Link>
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

export default UserPage;
