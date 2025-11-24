import React, { createContext, useContext, useState } from "react";

// This example demonstrates the 3-step mental model for React's useContext.
// --- Step 1: Create Context (Define the "global store") ---
// We create a new context object.
// The default value (here 'Guest User') is used when a component doesn't have a matching Provider above it in the tree.
export const UserContext = createContext("Guest User"); // just export it for other files to access and use the context 'UserContext'

// A custom component for the Provider logic
// you can export this too and put it in higher level tree to wrap children components
export const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState("Jane Doe");

  return (
    // Step 2: Wrap components with Provider (Exposing values)
    // The 'value' prop is where you pass the data down the tree.
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// --- Step 3: Consume using useContext (Access data instantly) ---

// A component that consumes the context value
const UserProfile = () => {
  // Use useContext to access the 'user' and 'setUser' values provided above
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => setUser("John Doe");
  const handleLogout = () => setUser("Guest User");

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "10px" }}>
      <h3>User Profile Component</h3>
      <p>
        Current User: <strong>{user}</strong>
      </p>
      <button onClick={handleLogin}>Log In as John</button>
      <button onClick={handleLogout} style={{ marginLeft: "10px" }}>
        Log Out
      </button>
    </div>
  );
};

// Another component that also consumes the context value
const WelcomeMessage = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ padding: "10px", backgroundColor: "#eef", margin: "10px" }}>
      <p>Welcome, {user}!</p>
    </div>
  );
};

// Main App component combining everything
export const Basics = () => {
  return (
    // Wrap the entire application (or just the necessary parts) with the Provider
    // to make the context available to all child components.'
    <>
      <h1> 🎯 1. Basics of useEffect</h1>
      <UserProvider>
        <WelcomeMessage />
        <UserProfile />
      </UserProvider>
    </>
  );
};

// Create Context: Define the UserContext with an optional default value.
// Provider Component: Create a wrapper component (like UserProvider) that uses UserContext.Provider to expose the values/state to its children.
// Wrap Components: Place the UserProvider component high up in your component tree so that any child component needing the data is wrapped by it.
