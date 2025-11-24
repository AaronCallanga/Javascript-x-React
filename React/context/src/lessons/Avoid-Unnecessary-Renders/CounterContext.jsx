// src/context/CounterContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';

// 8a. Create two separate Contexts
const CounterValueContext = createContext(0);
const CounterSetValueContext = createContext(() => {}); // Default is a no-op function

// 8b. Create the Split Provider
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  // Memoize the setter function value to ensure stability 
  // could also create another function that increments count then memoized instead of passing the setter directly
  const stableSetCount = useMemo(() => setCount, []);

  return (
    // The Value Provider wraps the Setter Provider
    <CounterValueContext.Provider value={count}>
      <CounterSetValueContext.Provider value={stableSetCount}>
        {children}
      </CounterSetValueContext.Provider>
    </CounterValueContext.Provider>
  );
}

// 8c. Create custom hooks for consumption
// Hook to read the value (causes re-renders when 'count' changes)
export function useCounterValue() {
  const context = useContext(CounterValueContext);
  if (context === undefined) {
    throw new Error('useCounterValue must be used within a CounterProvider');
  }
  return context;
}

// Hook to get the setter function (does NOT cause re-renders when 'count' changes)
export function useCounterSetValue() {
  const context = useContext(CounterSetValueContext);
  if (context === undefined) {
    throw new Error('useCounterSetValue must be used within a CounterProvider');
  }
  return context;
}
