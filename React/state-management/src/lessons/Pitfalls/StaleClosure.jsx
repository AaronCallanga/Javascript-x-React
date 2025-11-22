import React, { useState } from "react";

// This pitfall occurs when a function (often inside a setTimeout, event handler, or useEffect) "closes over" a value that is no longer current (stale).

export const StaleClosure = () => {
  const [count, setCount] = useState(0);

  const delayedIncrementWrong = () => {
    // When this function runs in 2 seconds, it uses the 'count' value that was captured
    // when 'delayedIncrementWrong' was first called (which was 0, for example)
    setTimeout(() => {
      // ❌ WRONG: Uses the STALE value of `count` captured 2 seconds ago
      setCount(count + 1);
    }, 2000);
  };

  const delayedIncrementCorrect = () => {
    setTimeout(() => {
      // ✔ CORRECT: The functional updater always receives the absolute latest `prev` state value
      setCount((prevCount) => prevCount + 1);
    }, 2000);
  };

  return (
    <>
      <h3>State Pitfall: Stale Closures</h3>
      <div style={{ padding: "20px", border: "1px solid red" }}>
        <h5>Wrong: Stale Closures (Wait 2s)</h5>
        <p>Count: {count}</p>
        {/* Click rapidly multiple times, you'll see it only increments by 1 total */}
        <button onClick={delayedIncrementWrong}>Add 1 after 2s (Wrong)</button>
      </div>
      <div style={{ padding: "20px", border: "1px solid green" }}>
        <h5>Correct: Functional Updates Prevent Stale Closures (Wait 2s)</h5>
        <p>Count: {count}</p>
        {/* Click rapidly multiple times, you'll see it correctly queues up multiple increments */}
        <button onClick={delayedIncrementCorrect}>
          Add 1 after 2s (Correct)
        </button>
      </div>
    </>
  );
};
