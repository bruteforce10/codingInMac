import React, { useState } from "react";
import Button from "../../../components/atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAPI, registerUserAPI } from "../../../config/redux/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.reducerAction);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const userResult = await dispatch(loginUserAPI(user)).catch((err) => {
      console.log(err);
    });
    if (userResult) {
      console.log("success");
      localStorage.setItem("userData", JSON.stringify(userResult));
      setUser({
        email: "",
        password: "",
      });
      navigate("/");
    } else {
      console.log("error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <p className="auth-title">Login Page</p>
        <form onSubmit={handleLogin}>
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
          <Button loading={isLoading} title="Login" />
        </form>
      </div>
      {/* <button>Go to Dashboard</button> */}
    </div>
  );
};

export default Login;
