import React, { useState, useEffect } from "react";

// 12. Using useEffect for Debouncing (Search Input)
// Debouncing delays an action (like making an API call for a search query) until the user has stopped typing for a specific duration (e.g., 300ms). This requires useEffect's cleanup function.
// Example Use Case: Only start searching 300ms after the user stops typing.
export const Debouncing = () => {
  // `query` updates immediately as the user types
  const [query, setQuery] = useState("");
  // `debouncedQuery` updates 300ms AFTER the user stops typing
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    // 1. Set a timeout: This action is scheduled for the future
    const handler = setTimeout(() => {
      console.log(`Setting debounced query to: "${query}"`);
      setDebouncedQuery(query); // Update the stable state after 300ms
    }, 300); // 300ms delay

    // 2. The cleanup function: runs *before* the next effect or on unmount
    return () => {
      console.log(
        "Cleanup: Clearing previous timeout (user typed again too soon)."
      );
      clearTimeout(handler); // Cancel the previous timeout if the user types again
    };

    // The effect runs every time the immediate 'query' state changes
  }, [query]);
  // We would use a separate useEffect([debouncedQuery]) to trigger the API call

  return (
    <div style={{ padding: "20px", border: "1px solid blue" }}>
      <h2>useEffect for Debouncing Input</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p>Immediate Input (query): {query}</p>
      <p>
        <strong>Debounced Input (API would use this): {debouncedQuery}</strong>
      </p>
    </div>
  );
};
