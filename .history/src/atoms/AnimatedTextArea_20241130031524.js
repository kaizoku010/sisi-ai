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

    highlightWords.forEach((highlight, index) => {
      const highlightIndex = remainingText.indexOf(highlight.word);

      if (highlightIndex >= 0) {const getHighlightedText = () => {
        const textParts = [];
        let remainingText = ourTextSubText;
      
        // Sort highlight words by their position in the text
        const sortedHighlights = highlightWords
          .map((highlight) => ({
            ...highlight,
            position: ourTextSubText.indexOf(highlight.word),
          }))
          .filter((highlight) => highlight.position !== -1) // Ensure the word exists in the text
          .sort((a, b) => a.position - b.position); // Sort by position
      
        let lastPosition = 0;
      
        sortedHighlights.forEach((highlight, index) => {
          // Add text before the highlight
          if (highlight.position > lastPosition) {
            textParts.push({
              text: remainingText.slice(lastPosition, highlight.position),
              isHighlighted: false,
            });
          }
      
          // Add the highlighted word
          textParts.push({
            text: highlight.word,
            isHighlighted: true,
            color: highlight.color,
            isActive: index === currentHighlight,
          });
      
          // Update lastPosition to the end of the current highlight
          lastPosition = highlight.position + highlight.word.length;
        });
      
        // Add any remaining text after the last highlight
        if (lastPosition < ourTextSubText.length) {
          textParts.push({
            text: ourTextSubText.slice(lastPosition),
            isHighlighted: false,
          });
        }
      
        // Map textParts to JSX
        return textParts.map((part, index) => {
          if (part.isHighlighted) {
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: part.isActive ? 1 : 0, // Fade the background in/out
                  backgroundColor: part.isActive ? part.color : "transparent", // Highlight background when active
                }}
                transition={{ duration: 0.5 }}
                style={{
                  color: "inherit",
                  fontWeight: part.isActive ? "bold" : "normal",
                  marginRight: "5px",
                  padding: "0.2em 0.4em",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
              >
                {part.text}
              </motion.span>
            );
          }
      
          // Render non-highlighted parts
          return (
            <span key={index} style={{ marginRight: "5px" }}>
              {part.text}
            </span>
          );
        });
      };
      
        // Add text before the highlight
        if (highlightIndex > 0) {
          textParts.push({
            text: remainingText.slice(0, highlightIndex),
            isHighlighted: false,
          });
        }

        // Add the highlighted word
        textParts.push({
          text: highlight.word,
          isHighlighted: true,
          color: highlight.color,
          isActive: index === currentHighlight,
        });

        // Update the remaining text
        remainingText = remainingText.slice(
          highlightIndex + highlight.word.length
        );
      }
    });

    // Add any remaining text after the last highlight
    if (remainingText) {
      textParts.push({ text: remainingText, isHighlighted: false });
    }

    return textParts.map((part, index) => {
      if (part.isHighlighted) {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: part.isActive ? 1 : 0, // Fade the background in/out
              backgroundColor: part.isActive ? part.color : "transparent", // Highlight the background only when active
            }}
            transition={{ duration: 0.5 }} // Increased speed of transition
            style={{
              color: "inherit", // Ensure text color doesn't change
              fontWeight: part.isActive ? "bold" : "normal",
              marginRight: "5px",
              padding: "0.2em 0.4em",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            {part.text}
          </motion.span>
        );
      }

      // Render non-highlighted parts with no animation
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
