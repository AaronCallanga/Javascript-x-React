
import React, { createContext, useContext, useState, useEffect } from 'react';

// This file centralizes all authentication logic.

// 9a. Create the Auth Context
const AuthContext = createContext(null);

// 9b. Create the Auth Provider Component
export function AuthProvider({ children }) {
  // Initialize state by checking local storage for an existing token
  const [token, setToken] = useState(localStorage.getItem("authToken"));

  // Define login function
  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("authToken", newToken);
  };

  // Define logout function
  const logout = () => {
    setToken(null);
    localStorage.removeItem("authToken");
  };

  // The value provided to consumers
  const contextValue = {
    token,
    isAuthenticated: !!token, // Derived state for convenience
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// 9c. Create the Custom Hook for Consumption
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
