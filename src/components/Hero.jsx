import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./../../public/css/hero.css";
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-subtitle">👋 Hello, I'm</p>

          <h1>
            Nithya <span>Raja</span>
          </h1>

          <h2>Frontend / Web Developer</h2>

          <p className="hero-description">
            UI Developer with 10+ years of experience creating responsive,
            modern, and user-friendly websites using HTML, CSS, JavaScript,
            React, and WordPress.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Hire Me</button>

            <button className="secondary-btn">
              Download Resume
            </button>
          </div>

          <div className="social-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaEnvelope /></a>
          </div>

        </div>

        <div className="hero-image">

          <div className="profile-circle">
            NR
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;