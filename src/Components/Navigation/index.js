import React from "react";
import "./styles.css";
import logo from "../../Images/logo.png";

export default function Navigation() {
  return (
    <div className="navbar">
      <img src={logo} alt="no-logo" />
      <h3>Need Help?</h3>
    </div>
  );
}
