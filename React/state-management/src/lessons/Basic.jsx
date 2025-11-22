import React, { useState } from "react";

// useState returns an array and we destructure it → [state, setState]
export const Basic = () => {
  const [count, setCount] = useState(0);

  // Use functional update if the previous values matters for the new value   () => setCount((c) => c + 1)}
  // Use direct update if the previous value doesn't really need              (e) => setTitle(e.target.value)
  return (
    <>
      <h1>🎯 1. Basic useState</h1>
      <h4>A. Primitive Values</h4>
      <p>Count: {count}</p>
      {/* This works but doesn't support concurrent updates which can result to stale data (race condition)*/}
      <button onClick={() => setCount(count + 1)}>+</button>
      {/* Updating State Based on Previous Value. Use Functional update instead to handle concurrency*/}
      <button onClick={() => setCount((c) => c + 1)}>+</button>

      <h4>B. State for Objects</h4>
      <UserProfileEditor />
    </>
  );
};

const UserProfileEditor = () => {
  const [user, setUser] = useState({
    name: "Aaron",
    age: 21,
    location: "Quezon City",
  });

  // --- Correct Update Functions ---

  // ✔ Update just ONE field (Age)
  const incrementAge = () => {
    // We use the functional update form (prev => ...) for safety,and critically, we SPREAD the previous object's properties into the new object first, overwrite just the 'age' field, then implicitly return it
    setUser((prevUser) => ({
      ...prevUser, // <-- Copy all existing fields first
      age: prevUser.age + 1, // <-- ONLY update the age field in the new object
    }));
  };
  // Without the parentheses, the interpreter would see the opening curly brace { as the start of the function body (a code block), not an object literal to be returned
  // prev => { ... }: This is a code block. You would need a explicit return statement inside it: prev => { return { ... }; }.
  // prev => ({ ... }): This uses the parentheses to indicate that the curly braces contain an expression (an object literal) which should be implicitly returned by the function [1].

  // ✔ Update another field (Location)
  const changeLocation = () => {
    setUser((prevUser) => ({
      ...prevUser,
      location: "Metro Manila",
    }));
  };

  // ❌ INCORRECT: Never mutate state directly like this (React won't detect the change and won't rerender)
  const attemptBadUpdate = (prevUser) => {
    user.age = prevUser.age + 1; // ❌ This is a side effect and will not trigger a re-render!
    console.log("Did not work!");
  };

  return (
    <div
      style={{ padding: "20px", maxWidth: "400px", border: "1px solid #ccc" }}
    >
      <h2>User Profile</h2>
      <p>
        Name: <strong>{user.name}</strong>
      </p>
      <p>
        Age: <strong>{user.age}</strong>
      </p>
      <p>
        Location: <strong>{user.location}</strong>
      </p>

      <hr />

      <button onClick={incrementAge} style={{ marginRight: "10px" }}>
        Increment Age
      </button>

      <button onClick={changeLocation}>Change Location to Metro Manila</button>
      {/*If you will use a function and need to passed a argument, wrapped it in callback again */}
      <button
        onClick={() => attemptBadUpdate(user)}
        style={{ marginTop: "10px", backgroundColor: "red", color: "white" }}
      >
        Attempt BAD Update (Does nothing)
      </button>
    </div>
  );
};
