import React from 'react';
import { useTheme } from './context/ThemeContext';

// These components use the custom useTheme() hook to access the context values cleanly.
function ThemeSwitcher() {
  // Use the custom hook to get the action and current value 
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default ThemeSwitcher;
