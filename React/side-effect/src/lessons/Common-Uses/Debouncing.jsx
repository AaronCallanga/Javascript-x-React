import React, { useState, useEffect } from "react";

// Using useEffect for Debouncing (Search Input)
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
      clearTimeout(handler); // Cancel the previous timeout if the user types again (and useEffect runs again)
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

/*
Here is a simple confirmation of the sequence you described:
Step	               Action	                        Result in Code
1. Mount	           Component mounts	                useEffect runs. setTimeout starts the 300ms countdown.
2. User Types 'H'	   setQuery is called.	            query state changes. Component re-renders.
3. Clean Up	           useEffect prepares to re-run.	clearTimeout(handler) runs first, canceling the     
                                                        previous 300ms countdown instantly.
4. New Effect	       useEffect runs again.	        A new setTimeout starts a fresh 300ms countdown for the 
                                                        new input value.
5. User Types 'He'	   setQuery called again.	        Steps 3 and 4 repeat, canceling the second timer and 
                                                        starting a third timer.
6. User Stops	       300ms pass uninterrupted.	    The setTimeout callback finally executes and updates 
                                                        setDebouncedQuery.

This pattern effectively resets the timer every time the user types, ensuring the final action only fires after a 300ms pause in activity.
When it initially mounts, it set up the timeout 300 ms. When user type, it changes the query state which also runs side effect because it is the dependency of the useEffect, but, user continuously typing so it changes the query state and run clean up first then side effect which waits again for 300 and just repeat until user stop types for 300 second which set the debounced query
*/