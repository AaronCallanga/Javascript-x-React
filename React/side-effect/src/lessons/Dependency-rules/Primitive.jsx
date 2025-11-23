import React, { useState, useEffect } from 'react';

// 1. Primitives (string, number, boolean, null, undefined)
// Primitives are compared by their value. The effect only runs if the actual value changes.
export const Primitive = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // This runs only when the *value* of count or isActive changes
    console.log(`Count changed to ${count}, isActive is ${isActive}`);
  }, [count, isActive]); // Watch the primitive values

  const [unrelatedState, setUnrelatedState] = useState(0); // This change is ignored by the effect

  return (
    <div style={{ padding: '20px', border: '1px solid green' }}>
      <h2>Primitive Dependencies</h2>
      <button onClick={() => setCount(c => c + 1)}>Change Count (Effect runs)</button>
      <button onClick={() => setIsActive(!isActive)}>Toggle Active (Effect runs)</button>
      <button onClick={() => setUnrelatedState(u => u + 1)}>Unrelated State (Effect ignored)</button>
    </div>
  );
};
