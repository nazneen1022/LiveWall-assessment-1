import React from "react";
import "./styles.css";
import logo from "../../Images/logo.png";

export default function Navigation() {
  return (
    <div className="navbar">
      <img src={logo} alt="no-logo" width="300px" />
      <h5>Need Help?</h5>
    </div>
  );
}
