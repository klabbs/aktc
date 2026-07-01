import './loginPage.css';
import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

import { loginUser } from "../api/auth";
import {
  setCredentials,
  setAuthInitialized,
} from "../store/slices/authSlice"

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      const response = await loginUser(formData)
      const data = response.data;

      // Store JWT
      localStorage.setItem("token", data.token);

      // Optional: Store user info
      /*localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );*/

      //dispatch to update Redux directly
      dispatch(
        setCredentials({
          user: data.user,
          token: data.token,
        })
      );
      dispatch(setAuthInitialized());
      navigate("/"+data.user?.role);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <div>
      <div>
        <div className="floating-card top-card">
          <i className="fa-solid fa-rocket"></i>
          <small>SEMESTER 2</small>
          <h4>Registration Open</h4>
      </div>

      {/* <!-- LOGIN SECTION --> */}

      <div className="login-wrapper">

          <div className="logo-box">

              <div className="logo-circle">
                  <i className="fa-solid fa-cube"></i>
              </div>

              <h1>APTECH COURSE PORTAL</h1>
              <h2>KUBWA</h2>

              <p>Mastering UI/UX Design</p>

          </div>

          <div className="login-card">

              <form onSubmit={handleSubmit}>
                
          {error && (
            <div className="mb-4 rounded bg-red-100 p-3 text-red-600">
              {error}
            </div>
          )}

                  <label> Email</label>

                  <div className="input-group">
                      <i className="fa-regular fa-user"></i>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      placeholder="Enter your Email"
                      required/>
                  </div>

                  <div className="password-row">
                      <label>Password </label>
                      
                  </div>

                  <div className="input-group">
                      <i className="fa-solid fa-lock"></i>
                      <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      required/>
                  </div>

                  <div className="remember">
                      <input type="checkbox"/>
                      <span>Remember device</span>
                  </div>

                  <button type="submit" className="login-btn">
                      Enter →
                  </button>

              </form>

              <div className="social">

                  <p>SOCIAL SIGN-IN</p>

                  <div className="social-buttons">

                      <button>
                          <i className="fa-brands fa-google"></i>
                      </button>

                      <button>
                          <i className="fa-brands fa-microsoft"></i>
                      </button>

                  </div>

              </div>

          </div>

          <div className="signup">
              New User?
              <a href="#">Request account</a>
          </div>

          <div className="footer-links">
              <a href="#">Support</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
          </div>

      </div>

      {/* <!-- LIVE HELP --> */}

      <div className="assistant-card">

          <div className="assistant-avatar">
              👨‍💼
          </div>

          <div>
              <small>LIVEHELP</small>
              <h4>Ask Assistant</h4>
          </div>

      </div>
      </div>
    </div>
  );
};

export default LoginPage;