import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/styles.css";

const Navbar = (props) => {
  let navigate = useNavigate();

  return (
    <nav className="siteNavbar">
      <h1
        className="siteLogo"
        onClick={() => {
          navigate("/");
        }}
      >
        {props.siteLogo}
      </h1>
      <input
        type="text"
        placeholder={props.searchbarContent}
        className="searchingBar"
      />
      <div className="commandsNavbar">
        <p className="siteMenu"> Menu </p>
        <p
          className="siteLoginButton"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </p>
        <p className="siteSignup"> Sign up</p>
      </div>
    </nav>
  );
};

export default Navbar;
