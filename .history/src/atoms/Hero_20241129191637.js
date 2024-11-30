import React from "react";
import "./hero.css";
import Vid from "../media/vid.mp4"

function Hero() {
  return (
    <div className="hero-section">
      {/* Video Background */}
      <video className="hero-video" autoPlay loop muted>
        <source src="https://www.vecteezy.com/video/9167287-circuit-data-neural-network-ai-technology-cloud-computing-bits-internet-5g-blue-background-information-ai-talking-circuit-women" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>

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
