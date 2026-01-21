import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <span className="logo">JOHN DOE</span>

        <nav>
          <NavLink to="/" end>HOME</NavLink>
          <NavLink to="/services">SERVICES</NavLink>
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/mentions-legales">MENTIONS LÉGALES</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;