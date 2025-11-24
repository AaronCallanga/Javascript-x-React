// UserContext.js
import React, { createContext, useState, useEffect, useContext } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component
export function UserProvider({ children }) {
  // State to hold the user data
  const [user, setUser] = useState(null);
  // State to handle loading and error states (optional, but recommended)
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1"); // Fetch data from your API endpoint
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        setUser(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadUser();
  }, []); // Empty dependency array means this runs once on mount

  // The value provided to all consuming components
  const contextValue = {
    user,
    isLoading,
    error,
    setUser, // You can also provide update functions here
  };

  return (
    <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>
  );
}

// Custom hook to easily consume the context
export const useUser = () => useContext(UserContext);
