import React, { useState } from 'react';
import axios from 'axios';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = currState === "Login"
      ? "http://localhost:5000/api/auth/login"
      : "http://localhost:5000/api/auth/signup";

    const payload = currState === "Login"
      ? { email: formData.email, password: formData.password }
      : { name: formData.name, email: formData.email, password: formData.password };

    try {
      const res = await axios.post(url, payload);

      if (res.data.success) {
        alert(`✅ ${currState === "Sign Up" ? "Account created" : "Logged in"} successfully!`);

        // Save token and user name in localStorage
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }

        // Save name if available after login/signup
        if (res.data.name) {
          localStorage.setItem("name", res.data.name); // Store name
        }

        // If account just created, also login
        if (currState === "Sign Up") {
          const loginRes = await axios.post("http://localhost:5000/api/auth/login", {
            email: formData.email,
            password: formData.password
          });

          if (loginRes.data.success && loginRes.data.token) {
            localStorage.setItem("token", loginRes.data.token);
            localStorage.setItem("name", loginRes.data.name); // Save name
            alert("✅ Logged in successfully!");
          } else {
            alert("⚠️ Account created, but login failed.");
          }
        }

        setShowLogin(false); // Close the login popup
      } else {
        alert(res.data.message || "❌ Something went wrong!");
      }

    } catch (err) {
      console.error("❌ Error:", err);
      const message = err.response?.data?.message || "❌ Something went wrong!";
      alert(message);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src="path/to/close-icon" alt="Close" />
        </div>

        <div className="login-popup-input">
          {currState === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
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

        <button type="submit">
          {currState === "Sign Up" ? 'Create account' : 'Login'}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
