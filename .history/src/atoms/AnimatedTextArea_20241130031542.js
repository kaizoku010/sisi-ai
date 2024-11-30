const getHighlightedText = () => {
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
  