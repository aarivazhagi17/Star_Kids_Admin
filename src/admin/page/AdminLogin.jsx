import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();

  axios
    .post(`${import.meta.env.VITE_API_URL}/admin/login`, {
      username,
      password,
    })
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      alert("Login Successful");
      navigate("/admin");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Admin Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;