import React, { useState, useEffect } from "react";

export const StateWithFetch = () => {
  // 1. Initialize state for the data (starts empty/null)
  const [data, setData] = useState(null);

  // 2. Initialize state for loading status (starts as true/loading)
  const [loading, setLoading] = useState(true);

  // (Optional) Initialize state for errors
  const [error, setError] = useState(null);

  // 3. Use useEffect to handle the side effect (data fetching)
  useEffect(() => {
    // We define an async function inside useEffect - you can also define outside useEffect and just call it too
    async function loadData() {
      try {
        // Simulate a network request (replace with your actual API endpoint)
        console.log("Fetching data started...");
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        // change the api to see if it works https://api.example.com/products (error)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();

        // 4. Update the data state with the results
        setData(jsonData);
      } catch (err) {
        // Handle errors gracefully
        setError(err.message);
      } finally {
        // 5. Update the loading state once finished (in all cases)
        setLoading(false);
        console.log("Fetching finished.");
      }
    }

    // Call the async function immediately
    loadData();

    // The empty dependency array `[]` ensures this runs ONLY once when the component mounts
  }, []);

  // --- Rendering Logic --- If error/loading, return immediately

  // Derived UI - user sees based on the data state(loading/error/actual data)
  if (loading) {
    return <div style={{ padding: "20px" }}>Loading products...</div>;
  }

  if (error) {
    return <div style={{ padding: "20px", color: "red" }}>Error: {error}</div>;
  }

  // Make sure data is available before trying to map it
  if (data && data.length > 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>🎯 4. Using State with Fetch</h1>
        <h2>({data.length} Total Users)</h2>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <div style={{ padding: "20px" }}>No products found.</div>;
};
