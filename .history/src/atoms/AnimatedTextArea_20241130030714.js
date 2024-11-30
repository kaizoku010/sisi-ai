import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./animatedtextarea.css";

function AnimatedTextArea() {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  const ourTextSubText =
    "Local police in Kampala and Masaka have warned that criminal gangs are taking advantage of technology to steal cars by redirecting wireless signals from key fobs. Inspectors believe, due to a request pattern of offending, that this activity could be the work of two organized criminal groups who operate in the area, MUTINY. Over the last 5 years, 125 cars manufactured between 2010 and 2020 have been stolen using this method.";

  const highlightWords = [
    { word: "Local police", color: "green" },
    { word: "Kampala", color: "yellow" },
    { word: "criminal gangs", color: "orange" },
    { word: "cars", color: "blue" },
    { word: "key fobs", color: "purple" },
    { word: "Inspectors", color: "orange" },
    { word: "MUTINY", color: "orange" },
    { word: "last 5 years", color: "teal" },
    { word: "125 cars", color: "orange" },
    { word: "2010", color: "green" },
    { word: "2020", color: "orange" },
    { word: "stolen", color: "red" },

];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % highlightWords.length);
    }, 2000); // Change highlight every 2 seconds
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="ata-section">
      <div className="ata-section-left">
        <p className="ot_subtitle">Our Team</p>
        <p className="ot_subs">{ourTextSubText}</p>
      </div>
      <div className="ata-section-right">
        <div
          style={{
            color: "#ffffff",
            padding: "20px",
          }}
        >
          <AnimatePresence>{getHighlightedText()}</AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default AnimatedTextArea;
