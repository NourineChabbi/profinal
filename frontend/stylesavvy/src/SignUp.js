import React, { useState } from "react";
import './SignUp.css';
import { Link } from 'react-router-dom';
import axios from "axios";

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false); // To show loading state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading state to true

        try {
            const res = await axios.post("http://127.0.0.1:5001/signup", formData);
            alert("Signup successful!");

            // Check if token exists in response and save it
            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            }

            setFormData({ name: '', email: '', password: '' });
            setIsLoading(false); // Set loading state to false

        } catch (error) {
            setIsLoading(false); // Set loading state to false in case of error

            // Handle backend error response
            if (error.response) {
                setErrorMessage("Signup failed: " + error.response.data.message);
            } else {
                // Handle frontend error (network, etc.)
                setErrorMessage("Signup failed: " + error.message);
            }
        }
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        value={formData.name}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={formData.password}
                        required
                    />

                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>

                <p className="login-link">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;




