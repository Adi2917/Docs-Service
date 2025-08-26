import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import clock from "../assets/clock.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo + Company Name */}
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
        <span className="company-name">Docs Service</span>
      </div>

      {/* Menu Links */}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Hamburger / Close Button */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Clock Section */}
      <div className="clock">
        <img src={clock} alt="clock" className="clock-logo" />
        <span>24×7</span>
      </div>
    </nav>
  );
};

export default Navbar;
