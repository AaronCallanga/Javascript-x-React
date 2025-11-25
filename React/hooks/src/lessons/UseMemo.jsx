import React, { useState, useMemo } from 'react';

/*
Prevents re-running heavy computations unless dependencies change.
⚠️ Only use when:
    Expensive CPU work (mapping huge arrays, sorting).
    Derived state you don’t want to recompute often.
*/
// A helper function that simulates a very slow, CPU-intensive calculation
const calculateExpensiveValue = (num) => {
  console.log('Calculating expensive value... (This takes a moment)');
  // Simulate heavy computation by looping millions of times
  for (let i = 0; i < 10; i++) { // try changing the condition to 1000000000
    num += 1;
  }
  return num;
};

export const UseMemo = () => {
  // State for the number used in the calculation
  const [number, setNumber] = useState(1);
  // State for the UI toggle (dark mode) that should NOT trigger the calculation
  const [dark, setDark] = useState(false);

  // --- useMemo Implementation ---
  // The 'useMemo' hook is used here. It will run 'calculateExpensiveValue' 
  // ONLY when the 'number' state changes.
  // It returns the memoized result of the function call.
  const expensiveResult = useMemo(() => {
    return calculateExpensiveValue(number);
  }, [number]); // Dependency Array: Only re-run the function if 'number' changes

  // Style for the dark mode toggle (purely cosmetic UI change)
  const themeStyles = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
    padding: '20px',
    minHeight: '100px'
  };

  return (
    <div style={themeStyles}>
      <h1>🎯 3. useMemo — Memoize Expensive Computations</h1>
      <p>Watch the console for "Calculating..." messages.</p>

      {/* Input controls the 'number' state */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        style={{ padding: '8px' }}
      />
      
      {/* Button controls the 'dark' state */}
      <button 
        onClick={() => setDark(!dark)} 
        style={{ marginLeft: '10px', padding: '8px' }}
      >
        Toggle Dark Mode (UI Re-render)
      </button>

      <hr />

      {/* The memoized result is displayed here */}
      <h2>Computed Value: {expensiveResult}</h2>
      
      <p>
        **How to test:** 
        1. Type a new number in the input field. The console logs "Calculating..." (expected).
        2. Click "Toggle Dark Mode". The UI changes color, but the console does NOT log "Calculating..." again because `useMemo` is using the cached result instead of recalculate. Without useMemo, it will always recalculate every render despite having the same value
      </p>
    </div>
  );
}
