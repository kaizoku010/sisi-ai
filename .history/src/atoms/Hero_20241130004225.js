import React from "react";
import "./hero.css";
import Vid from "../media/arrow.svg"
import { TypeAnimation } from 'react-type-animation';

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
        <p className="hero-heading">Deeper insight. Greater foresight. Less risk. Information intelligence solutions for...<span>        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    /></span></p>

        <button className="hero-button">
          Get Started <span className="arrow-icon">→</span>
        </button>
        </div>

        {/* Extra Info Box */}
        <div className="hero-content-right">
        <p className="latest-news-title">LATEST NEWS</p>
        <p className="go-beyound-text">Go beyond the headlines and follow the conversation with Adarga Panoptic</p>
        <img src={Vid} className="arrow_ic"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
