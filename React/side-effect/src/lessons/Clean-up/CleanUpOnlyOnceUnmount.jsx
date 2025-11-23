import React, { useState, useEffect } from 'react';

//🧩 5. Cleanup Effect (Basic return () => {})
// Use the return function inside useEffect to clean up resources like intervals, subscriptions, or event listeners. This function runs when the component is unmounted.
// Example Use Case: Staring a simple interval counter.
const CleanUpOnlyOnceUnmount = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Effect: Component Mounted. Starting interval timer.");

    // Start a timer
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // ✔️ Cleanup function: this runs when the component UNMOUNTS (remove from the UI such as changing page)
    return () => {
      console.log("Cleanup: Component Unmounted. Stopping interval timer.");
      clearInterval(intervalId); // Stop the timer to prevent memory leaks
    };
    
  }, []); // Empty dependency array means cleanup runs only on unmount

  return (
    <div style={{ padding: '20px', border: '1px solid blue' }}>
      <h2>Cleanup Effect (Basic Unmount)</h2>
      <p>Timer: {seconds} seconds</p>
      <p>If this component were removed from the DOM, the cleanup function would stop the timer.</p>
    </div>
  );
};
