import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Ananya Gupta<span></span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#experience">Experience</a></li>
      </ul>

      <div className="menu-icon">
        <FaBars />
      </div>

    </nav>
  );
}

export default Navbar;