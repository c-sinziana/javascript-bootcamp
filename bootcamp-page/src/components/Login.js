import React from "react";

import "../styles/styles.css";

const Login = (props) => {
  return (
    <div className="siteLoginContainer">
      <div className="loginWrapper">
        <h1 className="titleLogin">Login</h1>
        <input placeholder="username" className="siteUsernameField"></input>
        <input placeholder="password" className="sitePasswordField"></input>
        <p className="loginDescription">{props.loginDescription}</p>
        <button className="siteButton">Log in </button>
      </div>
    </div>
  );
};

export default Login;
