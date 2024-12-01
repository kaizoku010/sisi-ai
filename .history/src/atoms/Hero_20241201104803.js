import React from "react";
import "./hero.css";
import Vid from "../media/arrow.svg"
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from "react-router-dom";


function Hero() {

const naviagte = use

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
        <p  className="hero-description">
         SISI AI: WE EMPOWER GROWTH, RESILIENCE, & SECURITY ACROSS THE CONTINENT
                </p>
        <p className="hero-heading">Empowering Africa to solve its toughest challenges with AI<br/><span className="seq-text">      
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '_innovative solutions',
        1000,
        '_enhance efficiency',
        1000,
        // '_security across the continents',
        // 1000
      ]}
      wrapper="span"
      speed={50}
      style={{display: 'inline-block' }}
      repeat={Infinity}
    /></span></p>

        <button className="hero-button">
          Get Started <span className="arrow-icon">→</span>
        </button>
        </div>

        {/* Extra Info Box */}
        <div className="hero-content-right">
        <p className="latest-news-title">off the shelf custom solutions</p>
        <p className="go-beyound-text">Go beyond the headlines and follow the conversation with SISI AI</p>
        <img src={Vid} className="arrow_ic"/>
        </div>
      </div>

    </div>
  );
}

export default Hero;
