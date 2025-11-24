// src/Header.js
import React from 'react';
import { useAuth } from './context/AuthContext';

// Handles Login/Logout UI
function Header() {
  // Use the custom hook to access the state and actions
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ccc' }}>
      <span>My App</span>
      {isAuthenticated ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        // Simulate a successful login with a fake token
        <button onClick={() => login('mock-api-jwt-token-xyz-789')}>
          Log In
        </button>
      )}
    </header>
  );
}

export default Header;
