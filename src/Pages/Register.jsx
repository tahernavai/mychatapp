import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { Link } from "react-router-dom";

const Register = () => {

  const getFormValues = () => {
    const initialData = JSON.parse(localStorage.getItem("userData"));
    return initialData || [];
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    const existingData = getFormValues();
    const newData = [...existingData, formData];
    localStorage.setItem("userData", JSON.stringify(newData));
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">AppinApps Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleRegister}>
          <input
            required
            type="text"
            placeholder="display name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            required
            type="email"
            placeholder="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            required
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button type="submit">Sign up</button>
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
