import React, { Fragment, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Swal from "sweetalert2";
import axios from "axios";

const LoginRegister = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  let { pathname } = useLocation();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
        const response = await axios.post(`http://localhost:8080/api/v1/auth/login`, {
            phone: phone,
            password: password
        });
        if (response.data) {
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful',
                text: 'User Registered Successfully!',
            });
            navigate("/")
        } else {
            // Registration failed
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: response.data.message,
            });
        }
    } catch (error) {
        // Error during registration
        Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'An error occurred during registration',
        });

        console.error("Registration failed:", error);
    }
};
  return (
    <Fragment>
      <SEO
        titleTemplate="Login"
        description="Login page of Fascinatingly Dark react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path:  "/" },
            {label: "Login", path:  pathname }
          ]} 
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={handleSubmit}>
                            <input
                                type="number"
                                name="mobile-number"
                                placeholder="Mobile Number"
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                              />
                              <div className="button-box">
                                {/* <div className="login-toggle-btn"> */}
                                  {/* <input type="checkbox" /> */}
                                  {/* <label className="ml-10">Remember me</label>
                                  <Link to={ "/"}>
                                    Forgot Password?
                                  </Link> */}
                                {/* </div> */}
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                     </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default LoginRegister;
