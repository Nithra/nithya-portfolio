import React from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import "./../../public/css/hero.css";
import aboutright from "./../assets/about.png";
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
            {/* <a href="#"><FaGithub /></a> */}
           <a href="mailto:nithyar.dev@gmail.com"><FaEnvelope /></a>
           <a href="https://www.linkedin.com/in/nithya-r-589b3943b/"><FaLinkedinIn /></a>
          </div>

        </div>

        <div className="hero-image">

          <div className="profile-circle">
            <img
                        src={aboutright}
                        alt="Nithya Raja"
                      />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;