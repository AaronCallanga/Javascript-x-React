import React, { useState, useEffect } from "react";

// 3. Functions in Dependencies
//Functions defined inside a component are also new references on every render. Putting them in the dependency array causes the effect to run every time.

//❌ Wrong Example (Function Causes Loop/Excessive Runs):
const FunctionDependencyWrong = () => {
  const [count, setCount] = useState(0);

  // ❌ DANGER: `myCallback` is a new function reference every time App renders
  const myCallback = () => {
    console.log(`Count is currently ${count}`);
  };

  useEffect(() => {
    // This effect runs every single time you click the button because
    // `myCallback` is new every time the component re-renders.
    console.log("useEffect running due to new function reference!");
    myCallback();
  }, [myCallback]); // Watching the function reference

  return (
    <div style={{ padding: "20px", border: "1px solid red" }}>
      <h2>Function Dependencies (Wrong)</h2>
      <button onClick={() => setCount((c) => c + 1)}>
        Change Count (Check Console)
      </button>
    </div>
  );
};

// ✔ Correct Example (Use useCallback to stabilize the function):
//Use useCallback to memoize the function definition itself, ensuring its reference is stable across renders.
import React, { useState, useEffect, useCallback } from "react";

const FunctionDependencyCorrect = () => {
  const [count, setCount] = useState(0);

  // Use useCallback: the function reference is stable until the `count` dependency changes
  const myCallback = useCallback(() => {
    console.log(`Count is currently ${count}`);
  }, [count]); // Only recreate `myCallback` if `count` changes

  useEffect(() => {
    // ✔️ This effect only runs when `count` changes, because `myCallback` is stable otherwise.
    console.log("useEffect running.");
    myCallback();
  }, [myCallback]); // Safe to use the stable function here

  return (
    <div style={{ padding: "20px", border: "1px solid green" }}>
      <h2>Function Dependencies (Corrected)</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Change Count (Effect runs only when count changes)
      </button>
    </div>
  );
};

import React from "react";

export const Functions = () => {
  return (
    <>
      <h2>Functions</h2>
      <FunctionDependencyWrong />
      <FunctionDependencyCorrect />
    </>
  );
};
