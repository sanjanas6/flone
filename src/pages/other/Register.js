import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom"; 
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Register = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
       <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Register", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ms-auto me-auto">
                <div className="login-register-wrapper">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <input
                                type="number"
                                name="mobile-number"
                                placeholder="Mobile Number"
                              />
                               <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                              />
                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
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

export default Register;
