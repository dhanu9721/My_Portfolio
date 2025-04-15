import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">Dhananjay Maurya</div>
      <nav>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/experience" onClick={closeMenu}>Experience</Link>
          </li>
          <li>
            <Link to="/skills" onClick={closeMenu}>Skills</Link>
          </li>
          <li>
            <Link to="/education" onClick={closeMenu}>Education</Link>
          </li>
         
          <li>
            <Link to="/projects" onClick={closeMenu}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    
      {/* Hamburger button */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
