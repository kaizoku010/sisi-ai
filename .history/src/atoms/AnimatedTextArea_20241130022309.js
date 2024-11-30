import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import "./animatedtextarea.css"

function AnimatedTextArea() {
    const [currentHighlight, setCurrentHighlight] = useState(0);
    const ourTextSubText = "Our team of AI experts partners with organizations to deliver off the shelf & custom solutions that unlock insights, enhance efficiency, and drive impact. From data structuring to predictive analytics, we empower growth, resilience, and security across the continent"
 
    const highlightWords = [
        { word: "enhance efficiency", color: "green" },
        { word: "predictive analytics", color: "yellow" },
        { word: "security across the continent", color: "orange" },
      ];

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentHighlight((prev) => (prev + 1) % highlightWords.length);
        }, 2000); // Change highlight every 2 seconds
        return () => clearInterval(interval);
      }, []);
    
      const getHighlightedText = () => {
        return ourTextSubText.split(" ").map((word, index) => {
          const highlight = highlightWords.find((h) => h.word === word);
          const isActive = highlight && highlightWords.indexOf(highlight) === currentHighlight;
    
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0.3 }}
              transition={{ duration: 0.8 }}
              style={{
                color: isActive ? highlight.color : "#ffffff",
                fontWeight: isActive ? "bold" : "normal",
                marginRight: "5px",
              }}
            >
              {word}
            </motion.span>
          );
        });
      };
    
      
    return (
    <div className='ata-section'>
        <div className='ata-section-right'>
<p>OUR TEAM</p>
<p>{ourTextSubText}</p>
        </div>
<div className='ata-section-left'>
<div
      style={{
        backgroundColor: "#2e2e2e",
        color: "#ffffff",
        padding: "20px",
        fontFamily: "Arial",
        lineHeight: "1.6",
        fontSize: "18px",
      }}
    >
      <AnimatePresence>{getHighlightedText()}</AnimatePresence>
    </div>
</div>
    </div>
  )
}

export default AnimatedTextArea