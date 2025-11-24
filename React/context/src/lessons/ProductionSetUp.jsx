// src/App.js
import React from 'react';
// Import the Provider to wrap the entire app
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import ContentArea from './ContentArea';

// The main application wrapper
export const ProductionSetup = () => {
  return (
    // Wrap the components with the ThemeProvider
    <ThemeProvider>
      <div style={{ minHeight: '100vh', transition: 'background-color 0.3s' }}>
        <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <h1>Context API Production Setup</h1>
          <ThemeSwitcher />
        </header>
        <ContentArea />
      </div>
    </ThemeProvider>
  );
}

