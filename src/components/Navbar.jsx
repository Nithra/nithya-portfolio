import React from "react";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import "./../../public/css/navbar.css"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">

        <a href="/" className="logo">
          <span>N</span>ithya
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="nav-right">
          <a href="mailto:nithyar.dev@gmail.com"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/nithya-r-589b3943b/"><FaLinkedinIn /></a>

          <button className="hire-btn">
            Hire Me
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;