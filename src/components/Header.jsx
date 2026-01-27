import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">JOHN DOE</div>

        <button
          className="burger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/mentions-legales">Mentions légales</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;