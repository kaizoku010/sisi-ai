import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./animatedtextarea.css";

function AnimatedTextArea() {
  const [currentHighlight, setCurrentHighlight] = useState(0);

  const ourTextSubText =
    "Our team of AI experts partners with organizations to deliver off the shelf & custom solutions that unlock insights, enhance efficiency, and drive impact. From data structuring to predictive analytics, we empower growth, resilience, and security across the continent";

  const highlightWords = [
    { word: "AI experts partners", color: "green" },
    { word: "enhance efficiency", color: "yellow" },
    { word: "data structuring to predictive analytics", color: "orange" },
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

    highlightWords.forEach((highlight, index) => {
      const highlightIndex = remainingText.indexOf(highlight.word);

      if (highlightIndex >= 0) {
        // Add text before the highlight
        if (highlightIndex > 0) {
          textParts.push({
            text: remainingText.slice(0, highlightIndex),
            isHighlighted: false,
          });
        }

        // Add the highlighted text
        textParts.push({
          text: highlight.word,
          isHighlighted: true,
          color: highlight.color,
          isActive: index === currentHighlight,
        });

        // Remove the processed part from remainingText
        remainingText = remainingText.slice(
          highlightIndex + highlight.word.length
        );
      }
    });

    // Add any remaining text
    if (remainingText) {
      textParts.push({ text: remainingText, isHighlighted: false });
    }

    return textParts.map((part, index) => {
      return part.isHighlighted ? (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={part.isActive ? { opacity: 1 } : { opacity: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundColor: part.color,
            color:"white"
            fontWeight: part.isActive ? "bold" : "normal",
            marginRight: "5px",
          }}
        >
          {part.text}
        </motion.span>
      ) : (
        <span key={index} style={{ marginRight: "5px" }}>
          {part.text}
        </span>
      );
    });
  };

  return (
    <div className="ata-section">
      <div className="ata-section-left">
        <p className="ot_subtitle">OUR TEAM</p>
        <p className="ot_subs">{ourTextSubText}</p>
      </div>
      <div className="ata-section-right">
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
  );
}

export default AnimatedTextArea;
