import React, { useState } from "react";
// State updates in React are batched for performance and do not happen immediately. The variable you read right after calling setState will hold the old value until the next render cycle.
export const AsyncPitfall = () => {
  const [count, setCount] = useState(0);

  const handleClickWrong = () => {
    setCount(count + 1);
    // ❌ WRONG: `count` is still 0 here immediately after the call
    console.log("Logged immediately (Wrong):", count);
    alert(`The count is actually still ${count} right now in memory!`);
  };

  const handleClickCorrect = () => {
    // ✔ CORRECT: Use the functional form to get the latest `prev` value
    setCount((prevCount) => {
      const newValue = prevCount + 1;
      // This is the correct place to log or use the new value
      console.log("Logged inside functional update (Correct):", newValue);
      return newValue;
    });
    // `count` is still the old value here, but we don't rely on it
  };

  return (
    <>
      <h3>State Pitfall: State Updates Are Asynchronous</h3>
      <div style={{ padding: "20px", border: "1px solid red" }}>
        <h5>Wrong: State Updates are Async</h5>
        <p>Count: {count}</p>
        <button onClick={handleClickWrong}>Increment (Wrong)</button>
      </div>
      <div style={{ padding: "20px", border: "1px solid green" }}>
        <h5>Correct: Functional State Updates</h5>
        <p>Count: {count}</p>
        <button onClick={handleClickCorrect}>Increment (Correct)</button>
      </div>
    </>
  );
};
