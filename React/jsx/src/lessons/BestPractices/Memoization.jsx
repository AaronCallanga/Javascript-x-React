// ✔ Beware of Re-Render Traps (Heavy Functions Inside JSX)

//Avoid putting complex or computationally expensive JavaScript functions directly inside the JSX return() block. Every time the component re-renders (which happens often), that expensive function runs again, potentially slowing down your app.
//Bad Practice (Expensive Calculation inside render):
const ExpensiveComponent1 = ({ data }) => {

  // A very heavy function that processes a large array
  const calculateExpensiveData = (inputData) => {
    // Imagine thousands of operations here...
    console.log("Expensive function ran!"); 
    return inputData.length * 100;
  };

  // This runs every single time the App component re-renders (e.g., if you update an unrelated piece of state)
  return (
    <div>
      <h1>Total Value: {calculateExpensiveData(data)}</h1>
      {/* ... other interactive UI here ... */}
    </div>
  );
};

// Good Practice (Memoization or calculated outside the render):
// Use useMemo from React to calculate the value once and only recalculate it if the input data actually changes. This prevents re-running the heavy logic on every simple re-render.
import React, { useMemo, useState } from 'react';

const ExpensiveComponent = ({ initialData }) => {
  const [count, setCount] = useState(0); // This state change causes re-renders

  const calculateExpensiveData = (inputData) => {
    // Imagine thousands of operations here...
    console.log("Expensive function ran!"); 
    return inputData * 100;
  };

  // Use useMemo: the calculation only runs when 'initialData' changes.
  // It won't run when 'count' changes.
  const memoizedValue = useMemo(() => {
    return calculateExpensiveData(initialData);
  }, [initialData]); // Dependency array

  return (
    <div>
      <p>Total Value: {memoizedValue}</p>
      <p>Unrelated Counter: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Re-render App (cheaply)</button>
    </div>
  );
};

export const Memoization = () => {
  return (
    <>
      <h3>✔ Beware of Re-Render Traps (Heavy Functions Inside JSX)</h3>
      <ExpensiveComponent initialData={10000000000} />
    </>
  );
};
