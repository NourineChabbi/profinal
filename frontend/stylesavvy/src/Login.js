import React, { useState, useContext } from "react";
import './Login.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from "./UserContext"; // ✅ import UserContext

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { setUser } = useContext(UserContext); // ✅ useContext here only
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5001/login", formData);

      localStorage.setItem("token", response.data.token);

      setUser(response.data.user); // ✅ this updates the Navbar
      alert("Login successful!");

      setFormData({ email: "", password: "" });
      setErrorMessage("");
      navigate("/shop"); // ✅ navigate to shop
    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage("Wrong Email or Password");
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button type="submit">Continue</button>
        </form>

        <p className="loginsignup-login">
          Don’t have an account? <Link to="/signup"><span>Sign up here</span></Link>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
