import React, { useState, useEffect } from "react";

// This pattern is crucial because it includes a "cleanup" mechanism (ignore variable) to prevent setting state on a component that has already unmounted, which avoids a common React memory leak warning.
export const StandardFetchingWithUseEffect = () => {
  // 1. Setup state for data, loading status, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // A flag to ignore state updates if the component unmounts
    // before the fetch completes. This is the key part of this pattern.
    let ignore = false;

    // Define the async function internally
    async function fetchData() {
      try {
        setLoading(true); // Start loading

        // Use a reliable public API for the example
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }

        const json = await response.json();

        // Check `ignore` flag before setting state
        if (!ignore) {
          setData(json);
        }
      } catch (err) {
        // Check `ignore` flag before setting state
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        // Check `ignore` flag before setting state
        if (!ignore) {
          setLoading(false); // End loading
        }
      }
    }

    fetchData();

    // 2. The cleanup function runs on unmount or before the next effect run
    return () => {
      ignore = true; // Set the flag to ignore any pending state updates
      console.log("Cleanup: Setting ignore=true to prevent state update.");
    };
  }, []); // Empty dependency array: runs only once on mount

  // --- Derived UI Rendering Logic ---

  if (loading) {
    return <p>Loading users... 🔄</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error} ❌</p>;
  }

  return (
    <div style={{ padding: "20px", border: "1px solid green" }}>
      <h1>🎯 4. Standard Fetch Pattern (with Cleanup)</h1>
      <p>Loaded {data.length} users successfully.</p>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

/*
The ignore flag is not used to make useEffect run only once. That is the job of the empty dependency array [].

The ignore flag is used specifically to prevent a race condition and a common memory leak warning that happens when data fetching takes a long time.

Here is why it's necessary:
The Problem: State Updates on Unmounted Components
1. A user navigates to a page where a component immediately starts fetching data using useEffect with [].
2. The API call takes 5 seconds to complete.
3. After 2 seconds (before the fetch finishes), the user navigates away to a different page, causing the original component to unmount.
4. After 5 seconds, the API call finally finishes, and the code attempts to run setData(json) or setLoading(false) on a component that no longer exists in the UI.
5. React logs a warning in the console:
    "Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application."

The Solution: The ignore Flag Cleanup
The ignore flag is the standard solution to this problem:
1. Declare let ignore = false; at the top of your useEffect function.
2. Define a cleanup function that runs return () => { ignore = true; };. This function runs right as the component starts to unmount (or just before the effect runs again).
3. Check the flag before any state updates (if (!ignore) setData(json);).

By implementing the ignore flag, you ensure that if the component unmounts before the async operation finishes, the code politely stops and does not attempt the invalid state update.
*/
