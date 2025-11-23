import React, { useState, useEffect } from 'react';

// Using useEffect with LocalStorage Sync
// This pattern synchronizes a piece of React state with an external system (the browser's localStorage) every time the state changes.
// Example Use Case: Saving dark/light mode preference.
export const LocalStorageSync = () => {
  // Initialize state lazily from localStorage (runs once)
  // The syntax useState(() => ...) is known as the "lazy initial state" pattern. For subsequent renders, the function is completely ignored. React uses the current state value without calling the function again.
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("appThemePreference") || "light";
  });

  // --- Synchronize state to localStorage ---
  useEffect(() => {
    console.log(`Saving theme "${theme}" to localStorage.`);
    // The side effect: interact with the browser API
    localStorage.setItem("appThemePreference", theme);

  }, [theme]); // <--- Dependency array: runs every time 'theme' state changes


  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ padding: '20px', border: '1px solid purple' }}>
      <h2>useEffect with LocalStorage Sync</h2>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Toggle Theme & Save to Storage
      </button>
      <p>Refresh the page to see the saved theme load.</p>
    </div>
  );
};
