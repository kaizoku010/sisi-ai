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

  const getHighlightedText = () => {
    const textParts = [];
    let remainingText = ourTextSubText;
  
    console.log("Original Text:", ourTextSubText);
  
    highlightWords.forEach((highlight, index) => {
      const highlightIndex = remainingText.indexOf(highlight.word);
  
      if (highlightIndex >= 0) {
        // Add the text before the highlight
        if (highlightIndex > 0) {
          const beforeHighlight = remainingText.slice(0, highlightIndex);
          textParts.push({ text: beforeHighlight, isHighlighted: false });
          console.log("Text before highlight:", beforeHighlight);
        }
  
        // Add the highlighted text
        textParts.push({
          text: highlight.word,
          isHighlighted: true,
          color: highlight.color,
          isActive: index === currentHighlight,
        });
        console.log("Highlighted word:", highlight.word);
  
        // Update remainingText
        remainingText = remainingText.slice(
          highlightIndex + highlight.word.length
        );
      } else {
        console.warn("Highlight word not found:", highlight.word);
      }
    });
  
    // Add any remaining text after all highlights
    if (remainingText) {
      textParts.push({ text: remainingText, isHighlighted: false });
      console.log("Remaining text after highlights:", remainingText);
    }
  
    // Render the text parts
    return textParts.map((part, index) => {
      if (part.isHighlighted) {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: part.isActive ? 1 : 0,
              backgroundColor: part.isActive ? part.color : "transparent",
            }}
            transition={{ duration: 0.5 }}
            style={{
              color: "inherit",
              fontWeight: part.isActive ? "bold" : "normal",
              marginRight: "5px",
              padding: "0.2em 0.4em",
              borderRadius: "4px",
            }}
          >
            {part.text}
          </motion.span>
        );
      }
  
      return (
        <span key={index} style={{ marginRight: "5px" }}>
          {part.text}
        </span>
      );
    });
  };
  
  

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
