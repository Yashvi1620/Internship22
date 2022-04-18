import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import DashboardTopbar from './DashboardTopbar';
import DevloperSideBar from './DevloperSidebar';

const DevloperDashboard = () => {
    var navigate = useNavigate();
    useEffect(() => {
        const email = localStorage.getItem("email");
        console.log(email);
        if(!email){
          navigate("/login");
        }
      }, []);
  return (
    <div className='wrapper'>
          <DevloperSideBar />
          <div class="main">
          <DashboardTopbar />
          <main class="content">
           
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
  )
}

export default DevloperDashboard