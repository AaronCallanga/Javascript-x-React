import React, { useState, useEffect } from 'react';

// This hook fires every time the component finishes rendering, regardless of which piece of state or prop changed.
export const RunsEveryRender = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 🔴 This useEffect has NO dependency array.
  // It runs every time 'count' or 'name' changes. (it rerenders when state changed unless you use useRef)
  useEffect(() => {
    console.log("-> useEffect ran (Component just rendered).");
  });

  return (
    <div style={{ padding: '20px', border: '1px solid red' }}>
      <h3>Runs After Every Render</h3>
      
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment Count</button>
      
      <p>Name: {name}</p>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Type here..." />
      
      <p>Check your browser console to see the log message appear repeatedly.</p>
    </div>
  );
};
