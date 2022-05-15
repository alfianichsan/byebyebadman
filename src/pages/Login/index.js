import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Bg3, Logo2 } from "../../assets";
import classes from "./Login.module.css";

const Login = () => {
  const [isUsername, setIsUsername] = useState("");
  const [isPassword, setIsPassword] = useState("");
  let history = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();

    const response = await Axios({
      method: "post",
      url: "http://localhost:4000/v1/auth/login",
      data: {
        username: isUsername,
        password: isPassword,
      },
      headers: { "Content-Type": "application/json" },
    });
    // console.log(response);

    if (response.data.token) {
      alert(response.data.message);
      localStorage.setItem("token", response.data.token);
      history("/admin", { replace: true });
    } else {
      alert(response.data.message);
    }
  };
  const tokenHistory = localStorage.getItem("token");

  useEffect(() => {
    if (tokenHistory) {
      history("/admin", { replace: true });
    }
  }, [tokenHistory]);

  return (
    <div className={classes["login-container"]}>
      <div className={classes["left-container"]}>
        <img src={Bg3} alt="Background" />
      </div>
      <div className={classes["right-container"]}>
        <div className={classes["logo-container"]}>
          <img src={Logo2} alt="Logo" />
        </div>
        <form onSubmit={loginHandler}>
          <div className={classes["form-wrapper"]}>
            <p>Login</p>
            <label>Username</label>
            <input placeholder="Username" type="text" name="username" value={isUsername} onChange={(e) => setIsUsername(e.target.value)} />
            <label>Password</label>
            <input placeholder="Password" type="password" name="password" value={isPassword} onChange={(e) => setIsPassword(e.target.value)} />
            <button type="submit">Login</button>
            <Link className="text-center font-sans text-sm font-medium" to="/">
              Back to home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
