import React, { useRef, useState } from 'react';
// 2. useRef (For Mutable Values & DOM Access, NO Re-renders)
// Use useRef when you need to store a value that can change without forcing the component to re-render, or to access DOM elements directly. The value is accessed via the .current property.
const UseRefExample = () => {
  // This value can change, but the component won't re-render when it does.
  const mutableValueRef = useRef(0);
  
  // Use useState just to show the final result visually
  const [renders, setRenders] = useState(0);

  const updateValueNoRender = () => {
    mutableValueRef.current = mutableValueRef.current + 1;
    // Log the immediate new value of the ref
    console.log("Ref value is now:", mutableValueRef.current); 
    
    // Increment the state to *manually* trigger a render only for demonstration purposes
    setRenders(r => r + 1); 
  };

  return (
    <div style={{ padding: '10px', border: '1px solid gray' }}>
      <h3>useRef: Value updates without re-render</h3>
      <p>Current Ref Value: {mutableValueRef.current}</p>
      <p>Times this *component* actually rendered: {renders}</p>
      <button onClick={updateValueNoRender}>
        Increment Ref Value (Doesn't re-render UI until I force it)
      </button>
    </div>
  );
};
