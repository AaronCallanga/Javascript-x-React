import React, { useState } from 'react';
// In this example, we simulate a "heavy computation" (like processing a large array or fetching data synchronously) that we only want to run once when the component first mounts.


// This function simulates a very slow, expensive calculation
const performHeavyComputation = () => {
  console.log("Running heavy initial computation...");
  let sum = 0;
  // Imagine a massive loop or data processing here
  for (let i = 0; i < 1000000000; i++) {
    sum += Math.sqrt(i);
  }
  console.log("Computation finished.");
  return Math.floor(sum / 1000000);
};


export const FunctionAsState = () => {
  // ❌ Bad Practice: Calling the function directly
  // This function would run on every single re-render of this component.
  //const [badValue] = useState(performHeavyComputation()); // uncomment to test

  // ✔ Good Practice: Passing a function (lazy initialization)
  // The function wrapped in `() => ...` is only executed once: 
  // during the very first render cycle when the component mounts.
  const [computedValue] = useState(() => performHeavyComputation());

  // We add this counter to prove that updating state (causing a re-render) 
  // does *not* re-run the expensive calculation above.
  const [count, setCount] = useState(0);


  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h1>🎯 4. State Initialization with Function</h1>
      
      <p>The "heavy computation" ran **only once** on load.</p>
      <p>Computed Initial Value: <strong>{computedValue}</strong></p>

      <hr />

      <p>Current Counter Value: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Re-render Component (See console: computation won't run again)
      </button>
    </div>
  );
};

