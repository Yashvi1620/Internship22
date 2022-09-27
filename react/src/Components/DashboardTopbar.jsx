import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardTopbar = () => {
  var navigate = useNavigate()
    const Logout = async(e) => {
        e.preventDefault()
        localStorage.removeItem("email")
        localStorage.removeItem("firstName")
        localStorage.removeItem("role")
        await navigate ("/login")
      }
  return (
    <nav class="navbar navbar-expand navbar-light navbar-bg">
    <a class="sidebar-toggle js-sidebar-toggle">
      <i class="hamburger align-self-center"></i>
    </a>
    <div class="navbar-collapse collapse">
    <ul class ="navbar-nav navbar-align">
      <button class="logout-button" type='button' onClick={Logout}>
          LOGOUT
      </button>
    </ul>
    </div>
  </nav>

  )
}

export default DashboardTopbar