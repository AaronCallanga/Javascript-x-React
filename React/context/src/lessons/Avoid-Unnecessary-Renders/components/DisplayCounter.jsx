// src/DisplayCounter.js
import React from 'react';
import { useCounterValue } from '../CounterContext';

// Only uses useCounterValue
function DisplayCounter() {
  // This component consumes the VALUE.
  // It WILL re-render every time the 'count' changes.
  const count = useCounterValue();

  console.log('Rendering DisplayCounter'); // Check your console!

  return (
    <div style={{ padding: '10px', border: '1px solid blue' }}>
      Current Count: <strong>{count}</strong>
    </div>
  );
}

export default DisplayCounter;
