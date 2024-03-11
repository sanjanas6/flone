import React, { Fragment , useState} from "react";
import { Link, useLocation, useNavigate} from "react-router-dom"; 
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axios from "axios";
import Swal from 'sweetalert2';

const Register = () => {
  let { pathname } = useLocation();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
            email: email,
            phone: phone,
            password: password
        });

        if (response.data.success) {
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
                            <form onSubmit={handleSubmit}>
                              <input
                                type="number"
                                name="mobile-number"
                                placeholder="Mobile Number"
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                              />
                               <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
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
