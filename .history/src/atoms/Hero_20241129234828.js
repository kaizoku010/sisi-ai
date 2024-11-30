import React from "react";
import "./hero.css";
// import Vid from "../media/test1.mp4"

function Hero() {
  return (
    <div className="hero-section">
      {/* Video Background */}
      <div className="hero-section">
  <h1>Component Loaded</h1>
  <video className="hero-video" autoPlay loop muted>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
  </video>
</div>


      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-heading">Welcome to Our Platform</h1>
        <p className="hero-description">
          Discover amazing features and seamless experiences tailored for you.
        </p>
        <button className="hero-button">
          Get Started <span className="arrow-icon">→</span>
        </button>

        {/* Extra Info Box */}
        <div className="info-box">
          <p>Extra Info</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
