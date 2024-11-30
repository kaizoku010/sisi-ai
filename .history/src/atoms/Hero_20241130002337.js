import React from "react";
import "./hero.css";
import Vid from "../media/arrow.svg"

function Hero() {
  return (
    <div className="hero-section">
      {/* Video Background */}
      <video className="hero-video" autoPlay loop muted>
        <source src="https://res.cloudinary.com/dnko3bvt0/video/upload/v1732912934/vid_ozlaav.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="gradient-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-content-left">
        <p className="hero-description">
        VANTAGE: THE AI TOOL SUPERCHARGING RESEARCH AND ANALYSIS
        </p>
        <p className="hero-heading">Deeper insight. Greater foresight. Less risk. Information intelligence solutions for...</p>
        <button className="hero-button">
          Get Started <span className="arrow-icon">→</span>
        </button>
        </div>

        {/* Extra Info Box */}
        <div className="hero-content-right">
        <p>LATEST NEWS</p>
        <p>Go beyond the headlines and follow the conversation with Adarga Panoptic</p>
        <img src={Vid} src=""/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
