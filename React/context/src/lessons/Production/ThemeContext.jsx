import { createContext, useContext, useState }  from "react";

// 1. The Context Definition and Logic File
// This file centralizes all theme management logic. It uses a custom hook useTheme() for clean consumption.

// Create the Context
const ThemeContext = createContext(null); // Default value is often set to null in this pattern

// Create the Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Add Multiple Values (and actions)
  const toggleTheme = () => {
    setTheme(t => (t === "light" ? "dark" : "light"));
  };

  // Add Derived State (computed value)
  const isDark = theme === "dark";

  // The final value object provided to all children
  const value = {
    theme,
    setTheme, // Optional: for direct setting
    toggleTheme, // The action
    isDark, // The derived state
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create the Custom Hook for Consumption
// This is best practice for clean usage
// Components will just call this function to get the context object and destructure its value
export const useTheme = () => {
  // Instead of destructuring it, we will return the whole context/state object
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
