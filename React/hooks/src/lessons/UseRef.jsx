import React, { useRef, useEffect, useState } from "react";

/*
📌 What it can do:
    Holds mutable values without causing re-renders.
    Access DOM elements directly.
    Store previous values, timeouts, interval IDs, counters, etc.
    Useful for debouncing, throttling, focus.
*/

export function UseRef() {
  // --- Example 1: Accessing DOM Elements ---
  const inputRef = useRef(null);

  const focusInput = () => {
    // We can access the actual DOM node using the .current property
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.borderColor = "blue";
    }
  };
  // ==========================================================================================================
  // --- Example 2: Storing Mutable Values Without Re-render ---
  const clickCountRef = useRef(0);

  const handleManualCounterClick = () => {
    // Increment the .current value directly.
    // This value persists across renders but does NOT cause the component to re-render.
    clickCountRef.current = clickCountRef.current + 1;
    console.log("Example 2: Ref count is now:", clickCountRef.current);
    alert(`Count updated to ${clickCountRef.current}. Check the console.`);
    // Note: The UI won't update automatically here until something else triggers a re-render.
  };

  // ==========================================================================================================
  // --- Example 3: Saving Previous Value using useEffect ---
  // State for the third example (Previous Value Tracker) to trigger re-renders
  const [currentValue, setCurrentValue] = useState(0);
  const previousValueRef = useRef();

  useEffect(() => {
    // This runs AFTER the component renders with the new 'currentValue' state.
    // We save the *current* value into the ref, so on the *next* render, the ref holds the "previous" value.
    previousValueRef.current = currentValue;
    // it will show the updated UI with the updated state first before useEffect runs (changing the ref value) making ref only shows the previous value despite having the latest value behind the scene
  }); // No dependency array means it runs after every render

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1>🎯 1. useRef — For Changing State Without Re-renders</h1>

      {/* Demonstration 1: Accessing DOM Elements */}
      <div style={{ border: "1px solid #ccc", padding: "15px" }}>
        <h2>1. Accessing DOM Elements (Focus Input)</h2>
        <input ref={inputRef} type="text" placeholder="I can be focused" />
        <button onClick={focusInput} style={{ marginLeft: "10px" }}>
          Focus the Input
        </button>
      </div>

      {/* Demonstration 2: Storing Values Without Re-render */}
      <div style={{ border: "1px solid #ccc", padding: "15px" }}>
        <h2>2. Storing Mutable Values Without Re-render (Manual Counter)</h2>
        <button onClick={handleManualCounterClick}>
          Click Me (Count updates internally, check console)
        </button>
        {/* We can display the ref value, but it won't update in real-time until a re-render happens */}
        <p>
          Current ref value (UI does not update dynamically). It will only show after re-renders:
          {clickCountRef.current}
        </p>
      </div>

      {/* Demonstration 3: Save Previous Value */}
      <div style={{ border: "1px solid #ccc", padding: "15px" }}>
        <h2>3. Tracking Previous State Value</h2>
        <p>
          Current Value (State): <strong>{currentValue}</strong>
        </p>
        <p>
          Previous Value (Ref):{" "}
          <strong>{previousValueRef.current ?? "N/A"}</strong>
        </p>
        <button onClick={() => setCurrentValue((currentValue) => currentValue + 1)}>
          Increment Value (This triggers re-render)
        </button>
      </div>
    </div>
  );
}
