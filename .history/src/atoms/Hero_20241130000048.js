import React from "react";
import "./hero.css";
// import Vid from "../media/test1.mp4"

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
        <div>

        </div>
   

        {/* Extra Info Box */}
        <div className="info-box">
   
        </div>
      </div>
    </div>
  );
}

export default Hero;
