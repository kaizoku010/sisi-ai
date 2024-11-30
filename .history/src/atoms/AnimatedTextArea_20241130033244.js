import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./animatedtextarea.css";
import Cut from "../media/cut.gif"

function AnimatedTextArea() {
  const [currentHighlight, setCurrentHighlight] = useState(0);
const text="Our team of AI experts partners with organizations to deliver off the shelf & custom solutions that unlock insights, enhance efficiency, and drive impact. From data structuring to predictiveanalytics, we empower growth, resilience, and security across the continent"

//   const ourTextSubText =
//     "Local police in Kampala and Masaka have warned that criminal gangs are taking advantage of technology to steal cars by redirecting wireless signals from key fobs. Inspectors believe, due to a request pattern of offending, that this activity could be the work of two organized criminal groups who operate in the area, MUTINY. Over the last 5 years, 125 cars manufactured between 2010 and 2020 have been stolen using this method.";

//   const highlightWords = [
//     { word: "Local police", color: "green" },
//     { word: "Kampala", color: "yellow" },
//     { word: "criminal gangs", color: "orange" },
//     { word: "cars", color: "blue" },
//     { word: "key fobs", color: "purple" },
//     { word: "Inspectors", color: "orange" },
//     { word: "MUTINY", color: "orange" },
//     { word: "last 5 years", color: "teal" },
//     { word: "125 cars", color: "orange" },
//     { word: "2010", color: "green" },
//     { word: "2020", color: "orange" },
//     { word: "stolen", color: "red" },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHighlight((prev) => (prev + 1) % highlightWords.length);
//     }, 1500); // Shorter interval for faster sequencing
//     return () => clearInterval(interval);
//   }, []);

//   const getHighlightedText = () => {
//     const textParts = [];
//     let remainingText = ourTextSubText;

//     highlightWords.forEach((highlight, index) => {
//       const highlightIndex = remainingText.indexOf(highlight.word);

//       if (highlightIndex >= 0) {
//         if (highlightIndex > 0) {
//           textParts.push({
//             text: remainingText.slice(0, highlightIndex),
//             isHighlighted: false,
//           });
//         }

//         textParts.push({
//           text: highlight.word,
//           isHighlighted: true,
//           color: highlight.color,
//           isActive: index === currentHighlight,
//         });

//         remainingText = remainingText.slice(
//           highlightIndex + highlight.word.length
//         );
//       }
//     });

//     if (remainingText) {
//       textParts.push({ text: remainingText, isHighlighted: false });
//     }

//     return textParts.map((part, index) => {
//       return part.isHighlighted ? (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{
//             opacity: part.isActive ? 1 : 0.5, // Quick fade and dim for inactive highlights
//             scale: part.isActive ? 1 : 0.95, // Slight scaling for active highlights
//           }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.4 }} // Shorter transition for quicker updates
//           style={{
//             backgroundColor: part.color,
//             color: "white",
//             fontWeight: part.isActive ? "bold" : "normal",
//             marginRight: "5px",
//             padding: "1%",
//             borderRadius: "3px",
//           }}
//         >
//           {part.text}
//         </motion.span>
//       ) : (
//         <span key={index} style={{ marginRight: "5px" }}>
//           {part.text}
//         </span>
//       );
//     });
//   };

  return (
    <div className="ata-section">
      <div className="ata-section-left">
        <p className="ot_subtitle">Meet Our Team</p>
        <p className="ot_subs">{text}</p>
      </div>
      <div className="ata-section-right">
        <div
          style={{
            color: "#ffffff",
            padding: "20px",
          }}
        >
<img src={Cut}/>
        </div>
      </div>
    </div>
  );
}

export default AnimatedTextArea;
