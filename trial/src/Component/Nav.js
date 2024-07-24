// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    textDecoration: "none",
    color: "black",
    marginLeft:"38px",
    fontFamily:"15px",
    fontWeight:"bold",
  };
  return (
    <nav className="Navbar">
        <Link className="link" to="/" style={linkStyles}>Home</Link>
        <Link to="/about" style={linkStyles}>About</Link>
        <Link to="/courses" style={linkStyles}>Courses</Link>
        <Link to="/pages" style={linkStyles}>Pages</Link>
        <Link to="/login" style={linkStyles}>Login</Link>
        <Link to="/signup" style={linkStyles}>Signup</Link>  
    </nav>
  );
};

export default Navbar;




