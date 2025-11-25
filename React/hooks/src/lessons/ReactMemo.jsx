import React, { useState, useCallback } from 'react';
/*
📌 When to use:
    Functional components that receive props.
    When props do NOT change frequently.
    Works best with useCallback & useMemo.
*/


// --- Child Component (Memoized using React.memo) ---

// We wrap the functional component definition in React.memo.
// This tells React: "Only re-render this component if its props actually change 
// via a shallow comparison."
const MemoizedChild = React.memo(({ count, onIncrement }) => {
  // The console log makes it easy to track exactly when the component renders
  console.log("-> Child component rendered (only should happen when count updates)");

  return (
    <div style={{ border: '1px solid green', padding: '10px', marginTop: '10px' }}>
      <h3>Memoized Child Component</h3>
      <p>Current Count Prop: <strong>{count}</strong></p>
      <button onClick={onIncrement}>Increment Count from Child Button</button>
    </div>
  );
});

// Setting a display name helps in React DevTools
MemoizedChild.displayName = 'MemoizedChild';


// --- Parent Component (Uses the Memoized Child) ---

export const ReactMemo = () => {
  // State for the counter (passed to the child)
  const [count, setCount] = useState(0);
  // State for the theme (only affects the parent UI)
  const [darkTheme, setDarkTheme] = useState(false);

  // Use useCallback to stabilize the function passed to the child.
  // This ensures the 'onIncrement' prop reference remains constant across 
  // parent re-renders that aren't related to 'count'.
  const incrementCallback = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty dependency array: this function is created once on mount

  // Style for the theme toggle
  const themeStyles = {
    padding: '20px',
    backgroundColor: darkTheme ? '#333' : '#FFF',
    color: darkTheme ? '#FFF' : '#333',
    minHeight: '200px'
  };

  console.log("Parent component rendered");

  return (
    <div style={themeStyles}>
      <h1>🎯 4. React.memo — Prevent Useless Re-renders</h1>

      <p>Parent Theme State: {darkTheme ? 'Dark' : 'Light'}</p>
      
      {/* Button to change the theme (forces parent re-render) */}
      <button onClick={() => setDarkTheme(!darkTheme)}>
        Toggle Theme (Triggers Parent Re-render Only)
      </button>

      <div style={{ marginTop: '15px' }}>
        <p>Parent Count State: <strong>{count}</strong></p>
      </div>
      
      {/* The memoized child component */}
      <MemoizedChild 
        count={count} 
        onIncrement={incrementCallback} 
      />
    </div>
  );
}

/*
Demonstration
1. Initial Load: Both Parent and Child components render.
2. Click "Toggle Theme":
    - The ParentComponent re-renders (its style changes).
    - The count prop passed to MemoizedChild is still 0.
    - The onIncrement prop (incrementCallback) is still the exact same function reference (thanks to useCallback).
    - Result: React.memo sees no prop changes and prevents the child from re-rendering (the child's console log does not appear).
3. Click "Increment Count from Child Button":
    - The state updates setCount in the parent.
    - The ParentComponent re-renders.
    - The count prop passed to MemoizedChild is now 1 (a different value).
    - Result: React.memo detects the count prop changed and allows the child to re-render.
*/