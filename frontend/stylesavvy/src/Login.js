import React, { useState } from "react";
import './Login.css';
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/login", formData);

      alert("Login successful!");
      localStorage.setItem("token", response.data.token);

      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setErrorMessage("");
    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage("Wrong Email or Password");
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
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
          Don’t have an account? <span>Sign up here</span>
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


