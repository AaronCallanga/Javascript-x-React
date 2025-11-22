import React, { useState } from 'react';
//1. useState (For UI-Driven Data & Re-Renders)
//Use useState when changing a value must trigger a UI update (a re-render).
export const UseStateExample = () => {
  // Changing `count` re-renders the component and updates the UI
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '10px', border: '1px solid blue' }}>
      <h3>useState: Triggers Re-renders</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
};
