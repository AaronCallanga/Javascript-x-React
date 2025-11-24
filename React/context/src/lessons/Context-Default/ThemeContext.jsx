// ThemeContext.js
import { createContext, useContext, useState } from 'react';

// Define the shape of the context value for clarity and default values
const defaultContextValue = {
  theme: 'light', // Default theme is light
  // Default function does nothing, as a placeholder for when no provider is present
  toggleTheme: () => {
    console.warn("toggleTheme was called without a ThemeProvider. Using default context value.");
  },
};

// Create the context with the default value
const ThemeContext = createContext(defaultContextValue);

// Optional: Create a provider for actual application use
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const actualContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={actualContextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to consume the context
export const useTheme = () => useContext(ThemeContext);
