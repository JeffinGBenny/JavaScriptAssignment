function colorizeText(text: string, colorCode: string): string {
    // ANSI escape codes for text formatting
    const reset = "\x1b[0m"; // Reset all formatting
    return `${colorCode}${text}${reset}`;
  }
  
  // Usage example
  const redText = colorizeText("This text is red", "\x1b[31m"); // Red color
  const greenText = colorizeText("This text is green", "\x1b[32m"); // Green color
  
  console.log(redText);
  console.log(greenText);