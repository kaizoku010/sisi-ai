import React, { useState, useEffect, useRef }  from 'react'
import { motion } from 'framer-motion';
import "./FramerAnimation.css"


function FramerAnimation({children, imageSrc, altText}) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);


    
  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const animationVariants = {
    hidden: { opacity: 0.2, y: 50 }, // Adjust these values as needed
    visible: { opacity: 1, y: 0 },
  };

  return (
<div ref={elementRef} className="pass-through">
      <img src={imageSrc} alt={altText} />
    </div>
    
    )
}

export default FramerAnimation