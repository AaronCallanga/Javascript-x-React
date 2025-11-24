// ThemeToggleButton.js
import React from 'react';
import { useTheme } from './ThemeContext'; // Import the custom hook

// The component below will function correctly even if it's rendered outside of the ThemeProvider.
function ThemeToggleButton() {
  // Access the theme and toggle function from the context
  // if wrapped in provider, use the real context, otherwise, use only the default values
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        backgroundColor: theme === 'dark' ? '#333' : '#FFF',
        color: theme === 'dark' ? '#FFF' : '#333',
        border: '1px solid #ccc',
        cursor: 'pointer',
      }}
    >
      Current Theme: {theme} (Click to Toggle)
    </button>
  );
}

export default ThemeToggleButton;
