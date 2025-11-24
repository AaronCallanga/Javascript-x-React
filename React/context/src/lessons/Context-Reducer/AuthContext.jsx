import React, { createContext, useContext, useReducer, useEffect } from "react";

// This file contains all the authentication logic, the context setup, the reducer, and the custom hook.

// Create Context
const AuthContext = createContext(null);

// 7a. Initial State
const initialState = {
  user: null,
  isAuthenticated: false,
};

// 7b. Define the Reducer Function
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      // Store user in local storage (simulated persistence)
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case "LOGOUT":
      // Clear user from local storage
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    // A case to check persistence on app load (after authenticated user open the site again)
    case "RESTORE_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// 7c. Create the AuthProvider Component
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Example of restoring session when the app loads (try refreshing after logged in/out)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch({ type: "RESTORE_USER", payload: storedUser });
    }
  }, []);

  return (
    // Provide both the state and the dispatch function to all children
    // Single Context: Bad for performance if values change often (set up two context both for value and setter/dispatch)
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

// 7d. Create the Custom Hook for Consumption
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
