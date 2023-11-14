import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="lefSide">
        <img src={Logo} />
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
