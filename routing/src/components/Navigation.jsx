/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link style={linkStyle} to="/">
          Kalvium ❤️
        </Link>
      </div>
      <div className="navbar-buttons">
        <Link style={linkStyle} to="/contact">
          <button className="navbar-button">Contact</button>
        </Link>
        <Link style={linkStyle} to="/about">
          <button className="navbar-button">About</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
