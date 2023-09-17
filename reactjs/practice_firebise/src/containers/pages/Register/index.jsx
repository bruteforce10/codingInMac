import React, { useState } from "react";
import "./Register.scss";
import Button from "../../../components/atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAPI } from "../../../config/redux/action";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.reducerAction);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUserAPI(user));
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <p className="auth-title">Register Page</p>
        <form onSubmit={handleRegister}>
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            name="email"
            value={user.email}
          />
          <input
            className="input"
            type="password"
            placeholder="Enter your Password"
            onChange={handleChange}
            name="password"
            value={user.password}
          />
          <Button loading={isLoading} title="Register" />
        </form>
      </div>
      {/* <button>Go to Dashboard</button> */}
    </div>
  );
};

export default Register;
