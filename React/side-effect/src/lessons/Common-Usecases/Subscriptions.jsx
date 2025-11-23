import React, { useState, useEffect } from 'react';

// Using useEffect for Subscriptions
// This pattern sets up a persistent connection or listener when the component mounts and ensures it is properly disconnected when the component unmounts to prevent memory leaks.
//Example Use Case: Tracking the browser window size.
export const Subscriptions = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // The handler function needs to be stable across renders
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("Effect: Adding 'resize' event listener.");
    // 1. Add the event listener when mounting
    window.addEventListener("resize", handleResize);

    // 2. The cleanup function removes the listener on unmount
    return () => {
      console.log("Cleanup: Removing 'resize' event listener.");
      window.removeEventListener("resize", handleResize);
    };
    
    // The empty dependency array ensures this subscription logic runs only once
  }, []); 

  return (
    <div style={{ padding: '20px', border: '1px solid green' }}>
      <h2>useEffect for Subscriptions</h2>
      <p>Current Window Width: <strong>{windowWidth}px</strong></p>
      <p>Try resizing your browser window.</p>
    </div>
  );
};
