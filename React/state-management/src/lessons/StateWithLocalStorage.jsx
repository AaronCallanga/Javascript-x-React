import React, { useState, useEffect } from "react";

// Define styles based on a theme (purely for visual demonstration)
const getThemeStyles = (theme) => ({
  backgroundColor: theme === "dark" ? "#333" : "#FFF",
  color: theme === "dark" ? "#FFF" : "#333",
  padding: "20px",
  minHeight: "100vh",
  transition: "background-color 0.3s, color 0.3s",
});

export const StateWithLocalStorage = () => {
  // --- 1. Initialize state LAZILY from LocalStorage ---
  const [theme, setTheme] = useState(() => {
    try {
      // Use the function form `useState(() => ...)` so this code only runs ONCE on initial load.
      const savedTheme = localStorage.getItem("appTheme");
      // If a theme is saved, use it; otherwise, default to 'light'.
      return savedTheme || "light";
    } catch (error) {
      // Handle potential errors if localStorage isn't available (e.g., incognito mode)
      console.error("Could not access localStorage", error);
      return "light"; // Fallback to default
    }
  });

  // --- 2. Update LocalStorage whenever the state CHANGES ---
  useEffect(() => {
    // This runs AFTER the component renders and `theme` has a new value.
    try {
      localStorage.setItem("appTheme", theme);
      console.log(`Saved theme preference to localStorage: ${theme}`);
    } catch (error) {
      console.error("Could not save to localStorage", error);
    }

    // The dependency array ensures this effect runs ONLY when the 'theme' state changes.
  }, [theme]);

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // Apply the visual styles based on the current state
    <div style={getThemeStyles(theme)}>
      <h1>🎯 8. Persist with LocalStorage</h1>
      <p>
        Your current theme is: <strong>{theme}</strong>
      </p>

      <button
        onClick={toggleTheme}
        style={{
          padding: "10px",
          backgroundColor: theme === "dark" ? "#FFF" : "#333",
          color: theme === "dark" ? "#333" : "#FFF",
          border: "none",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>

      <p>
        Try changing the theme and then refreshing your browser page. The
        preference will be remembered!
      </p>
    </div>
  );
};
