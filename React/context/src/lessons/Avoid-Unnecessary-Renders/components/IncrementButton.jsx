// src/IncrementButton.js
import React from 'react';
import { useCounterSetValue } from '../CounterContext';

// Only uses useCounterSetValue
function IncrementButton() {
  // This component ONLY consumes the SETTER function.
  // It will NOT re-render when the 'count' value changes.
  const setCount = useCounterSetValue();

  console.log('Rendering IncrementButton'); // Check your console!

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Increment Counter
    </button>
  );
}

export default IncrementButton;
