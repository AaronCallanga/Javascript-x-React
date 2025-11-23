import React, { useState, useEffect } from 'react';

// 🧩 6. Effect Cleanup with Dependency Changes
// The cleanup function runs not just when the component unmounts, but also before the next time the effect runs due to a dependency change.
// Example Use Case: Toggling between users and showing connection status changes.
export const CleanUpWhenDependencyChange = () => {
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    // This part simulates 'connecting' or 'subscribing' to a resource
    console.log(`Effect: Connecting to user ID ${userId} database...`);

    // ✔️ Cleanup function: runs *before* the next effect run or unmount
    return () => {
      console.log(`Cleanup: Disconnecting from previous user ID ${userId}.`);
      // You might unsubscribe from a real-time listener here
    };

  }, [userId]); // Watch userId changes

  return (
    <div style={{ padding: '20px', border: '1px solid purple' }}>
      <h2>Effect Cleanup with Dependencies</h2>
      <p>Current User ID: {userId}</p>
      
      <button onClick={() => setUserId(1)}>Load User 1</button>
      <button onClick={() => setUserId(2)} style={{ marginLeft: '10px' }}>Load User 2</button>
      <button onClick={() => setUserId(3)} style={{ marginLeft: '10px' }}>Load User 3</button>
      
      <p>Check the console logs as you switch users to see the cleanup run first, then the new connection.</p>
    </div>
  );
};
