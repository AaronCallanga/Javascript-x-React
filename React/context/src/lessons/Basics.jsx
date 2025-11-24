import React, { createContext, useContext, useState } from "react";

// This example demonstrates the 3-step mental model for React's useContext.
// --- Step 1: Create Context (Define the "global store") ---
// We create a new context object.
// The default value (here 'Guest User') is used when a component doesn't have a matching Provider above it in the tree.
const UserContext = createContext("Guest User");

// A custom component for the Provider logic
const UserProvider = ({ children }) => {
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
        <h1>React Context Example</h1>
        <WelcomeMessage />
        <UserProfile />
      </UserProvider>
    </>
  );
};
