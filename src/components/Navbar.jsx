import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo + Company Name */}
      <div className="logo-section">
        <img src="src/assets/logo.jpg" alt="Logo" className="logo" />
        <span className="company-name">Docs Service</span>
      </div>

      {/* Menu Links */}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        
      </div>

      {/* Hamburger / Close Button */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      <div className="clock">
        <img src="src/assets/clock.jpg"  alt="clock" className="clock-logo"/>
        <span > 24*7</span>
      </div>
    </nav>
  );
};

export default Navbar;
