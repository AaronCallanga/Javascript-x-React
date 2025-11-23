import React, { useState, useEffect } from 'react';

//🧩 3. Run When Dependencies Change ([count, name])
// This hook allows you to synchronize an effect with specific pieces of state or props. It runs on the initial mount and any time one of the values in the dependency array changes.

export const RunsWhenDependencyChange = () => {
  const [count, setCount] = useState(0);
  const [userId, setUserId] = useState(1);

  // ✔️ This useEffect runs when the component mounts AND whenever 'userId' changes.
  // It ignores changes to 'count'.
  useEffect(() => {
    console.log("-> useEffect ran because userId changed to:", userId);
    // This is where you might fetch new data for that specific userId
    // fetch(`/api/user/${userId}`).then(...)
    
  }, [userId]); // <--- Dependency Array: Only watch `userId`


  // This is a separate useEffect that only runs when 'count' changes.
  useEffect(() => {
      console.log("-> Count changed to:", count);
  }, [count]); // <--- Dependency Array: Only watch `count`


  return (
    <div style={{ padding: '20px', border: '1px solid blue' }}>
      <h3>Runs When Dependencies Change</h3>
      
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Change Count (Triggers count effect only)</button>
      
      <p>User ID: {userId}</p>
      <button onClick={() => setUserId(id => id + 1)}>Change User ID (Triggers userId effect only)</button>
    </div>
  );
};
