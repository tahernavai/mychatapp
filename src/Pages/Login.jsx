import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  let navigate = useNavigate();

  const handleLogin = (e) => {
    const email = e.target[0].value;
    const password = e.target[1].value;
    const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
    const userFound = storedUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (userFound) {
      navigate("home");
    } else {
      console.log("Invalid email or password");
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">AppinApps Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
