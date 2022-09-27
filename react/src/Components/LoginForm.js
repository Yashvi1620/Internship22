import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import reg from "../../src/Components/img/reg.png"

export const LoginForm = () => {
  var navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const emailChangeHandler = (e) => {
    setemail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setpassword(e.target.value);
  };

  const showtoast = async () => {
    await toast.success("Credentials valid", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showtoast1 = async () => {
    toast.error("Invalid Credentials!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    var logindata = {
      email: email,
      password: password,
    };

    await axios.post(`http://localhost:4000/login`, logindata).then((res) => {
      if (res.data.status == 200) {
        showtoast();
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("userId", res.data.data._id);
        localStorage.setItem("role", res.data.data.role.roleName);

        console.log(res.data);
        setTimeout(() => {
          // User-Task
          console.log(res);
          if (res.data.data.role.roleName === "admin") {
            navigate("/Dashboard");
          } else if (res.data.data.role.roleName === "developer") {
            navigate("/developerTask");
          }
        }, 2000);
      } else {
        showtoast1();
      }
    });
  };
  return (
    <div>
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={submit}>
                <h1>Please Sign into your Account</h1>
                <br></br>
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Email address"
                    onChange={(e) => {
                      emailChangeHandler(e);
                    }}
                  />
                </div>
                <div class="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Password"
                    onChange={(e) => {
                      passwordChangeHandler(e);
                    }}
                  />
                </div>
                <div class="text-center text-lg-start mt-8 pt-2">
                  <button
                    type="submit"
                    class="form-control btn btn-primary btn-lg"
                  >
                    Login
                  </button>
                  <br></br>
                  <br></br>
                  <ToastContainer
                    postition="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  />
                  <a href="#!" class="text-body">
                    Forgot password
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#!" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="#!" class="text-white">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
