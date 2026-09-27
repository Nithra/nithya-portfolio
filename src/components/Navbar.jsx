import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
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
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedinIn /></a>

          <button className="hire-btn">
            Hire Me
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;