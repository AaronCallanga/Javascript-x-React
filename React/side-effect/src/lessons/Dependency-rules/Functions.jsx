import React, { useState, useEffect, useCallback } from "react";

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
// Use useCallback to memoize(cache) the function definition itself, ensuring its reference is stable across renders.
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

export const Functions = () => {
  return (
    <>
      <h2>Functions</h2>
      <FunctionDependencyWrong />
      <FunctionDependencyCorrect />
    </>
  );
};

/*
In this second example, the useEffect hook runs excessively every time the component re-renders (which happens when the "Change Count" button is clicked), because the function myCallback is redefined on every render, creating a new function reference each time.

Here is a step-by-step explanation:
Initial Render:
1. FunctionDependencyWrong renders.
2. myCallback is created as a function in memory.
3. useEffect runs for the first time, and the current reference of myCallback is stored in its dependency array.

User Interaction/State Update:
1. The user clicks the "Change Count" button, which calls setCount, updating the state and triggering a re-render.

Subsequent Renders (Excessive Runs):
1. During the re-render, a brand new myCallback function is created in a new memory location.
2. React compares the dependency array ([myCallback]). The new function reference is different from the previous function reference.
3. Because the dependency has changed, useEffect executes again.
4. The console logs appear, and the cycle of re-rendering, creating a new function, and re-running the effect continues to happen every time the count changes, even if the effect's logic conceptually doesn't need to re-run that often.

The issue here is not an infinite loop like the object example (because useEffect does not update a state variable directly causing an immediate re-render within the effect itself), but rather an issue of excessive executions of the effect, which can lead to performance problems, unnecessary data fetching, or unexpected behavior.

How to Fix This:
To handle functions as dependencies correctly, you should wrap the function definition with the useCallback hook. This guarantees the function's reference remains stable across re-renders unless its own dependencies change.
*/