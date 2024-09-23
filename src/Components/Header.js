import React from 'react';
import { Link } from 'react-router-dom';  // Import Link

function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="active">Home</Link> {/* Changed href="#home" to to="/" */}
      <Link to="/about">Why Web Development</Link> {/* Changed href="#about" to to="/about" */}
      <Link to="/contact">Contact</Link> {/* Changed href="#contact" to to="/contact" */}
    </nav>
  );
}

export default Header;
