import React from "react";

import "../styles/styles.css";

const Footer = (props) => {
  return (
    <div className="siteFooter">
      <h1 className="siteLogo">{props.siteLogo}</h1>
      <h2 className="footerDescription"> {props.description}</h2>
      <div className="footerContact">
        Newsletter:
        <input type="text" placeholder="email" className="newsletterBox" />
      </div>
    </div>
  );
};

export default Footer;
