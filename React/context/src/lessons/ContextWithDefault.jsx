import React from "react";
import { ThemeProvider } from "./Context-Default/ThemeContext";
import ThemeToggleButton from "./Context-Default/components/ThemeToggleButton";

export const ContextWithDefault = () => {
  return (
    <>
      <h1> 🎯 7. Context Default Value (Useful for Testing)</h1>
      <ThemeProvider>
        <div style={{ padding: "20px" }}>
          <h2>With Provider:</h2>
          <ThemeToggleButton />
        </div>
      </ThemeProvider>

      {/* This component will use the default value from ThemeContext.js */}
      <div style={{ padding: "20px" }}>
        <h2>Without Provider (Using Default Value):</h2>
        <ThemeToggleButton />
      </div>
    </>
  );
};
