import React, { useState, useCallback } from "react";
import MemoizedButton from "./MemoizedButton";


export const UseCallback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [logs, setLogs] = useState([]);

  // --- useCallbacks Implementation ---

  // This function is memoized and will retain the SAME reference
  // across re-renders of the parent component, as its dependencies [] do not change.
  const incrementCount1 = useCallback(() => {
    setCount1((c) => c + 1);
    setLogs((l) => [...l, "Incrementing Count 1 (Memoized Callback)"]);
  }, []); // Empty dependency array means this function is created only once

  // This function is defined normally and gets a NEW reference
  // every single time the UseCallback(parent) component re-renders.
  const incrementCount2 = () => {
    setCount2((c) => c + 1);
    setLogs((l) => [...l, "Incrementing Count 2 (New Function Every Render)"]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🎯 4. useCallback — Memoize Functions</h1>
      <p>Watch the console/logs to see which button component re-renders.</p>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        {/* Child 1 receives a memoized callback */}
        <p>Current Count 1: <strong>{count1}</strong></p>
        <MemoizedButton onClick={incrementCount1}>
          Count 1: (Uses useCallback)
        </MemoizedButton>

        {/* 
          Child 2 receives a standard, inline function 
          This forces Child 2 to re-render every time the parent re-renders 
        */}
        <p>Current Count 2: <strong>{count2}</strong></p>
        <MemoizedButton onClick={incrementCount2}>
          Count 2: (No useCallback)
        </MemoizedButton>
      </div>

      <h2>Activity Log</h2>
      <ul
        style={{
          maxHeight: "150px",
          overflowY: "auto",
          background: "#f4f4f4",
          padding: "10px",
        }}
      >
        {logs.map((log, index) => (
          <li key={index} style={{ fontSize: "0.8em", color: "gray" }}>
            {log}
          </li>
        ))}
      </ul>
    </div>
  );
};

/*  Does the parent also creates the new function for both of increment 1 and 2 but useCallback caches the increment 1 so it prevents rerendering for the child component?

The Parent Always Re-runs the Code
The UseCallbackDemo function runs from top to bottom every time the state changes (when you click any button).
So, yes, the JavaScript engine does conceptually "create" both functions during every render pass:

The Role of useCallback (Caching/Memoization)
useCallback acts as the "gatekeeper" or "cache."

When React hits the useCallback line during a re-render, it doesn't just create a new function and use it immediately. It checks the dependency array ([] in this case):
1. First Render: React executes the inner function code (() => { ... }) and stores that function object in its internal memory (cache).
2. Second Render (and subsequent): React sees the dependency array is unchanged ([] is the same as []). Instead of using the newly defined function reference from the current render pass, it retrieves the cached function object from memory and uses that old, stable reference to pass down as a prop.
So, yes: The parent code runs the line, but useCallback intercepts the result and ensures that the same function reference is returned to the JSX during every stable render cycle.

The stability of that function reference is what allows React.memo in the child component to confidently skip its own re-render.

NOTE: When a component receives a new state (even passed as props), it rerenders
Flow:
1. Click "Count 1" / "Count2":
2. The UseCallbackDemo parent re-renders (because count1/count2 state changed).
3. The incrementCount1 function reference does not change because it's wrapped in useCallback([]).
4. The MemoizedButton for Count 1 receives the same props (function reference), so it does not re-render.
5. The MemoizedButton for Count 2 does re-render because the parent re-rendered, and its onClick handler (incrementCount2) was a brand new function reference.
*/