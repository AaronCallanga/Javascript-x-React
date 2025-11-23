import React, { useState, useEffect } from "react";

// 2. Objects & Arrays (Reference Equality Issue)
// Objects and arrays are compared by their reference (their location in memory). If you create a new object inline during render, the reference changes every single time the component re-renders, causing an infinite loop.

// ❌ Wrong Example (Infinite Loop):
const ObjectDependencyWrong = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // ❌ DANGER: This object `{ username: "test" }` is created FRESH on EVERY RENDER.
    // The reference changes every time, causing useEffect to run,
    // which updates state (setData), causing a re-render, creating a new object... loop forever.
    console.log("Effect is running in a loop!");
    // Imagine this was used to fetch data based on the object
    // fetchData(userCriteria);
  }, [{ username: "test" }]);

  return <p>Check console for infinite loop warning.</p>;
};

// ✔ Correct Example (Use useMemo to stabilize the object):
// Use useMemo to ensure the object reference remains the same across renders unless a dependency of the memo changes.
const ObjectDependencyCorrect = () => {
  const [userId, setUserId] = useState(1);

  // Use useMemo to create a stable object reference
  const userCriteria = useMemo(
    () => ({
      id: userId,
      role: "user",
    }),
    [userId]
  ); // Only recalculate if userId changes

  useEffect(() => {
    // ✔️ This effect only runs when the 'userId' changes, because userCriteria is stable otherwise.
    console.log(`Fetching data for user ID: ${userCriteria.id}`);
  }, [userCriteria]); // Now safe to use the stable object here

  return (
    <div style={{ padding: "20px", border: "1px solid green" }}>
      <h2>Object Dependencies (Corrected)</h2>
      <p>Current Criteria ID: {userCriteria.id}</p>
      <button onClick={() => setUserId((id) => id + 1)}>
        Fetch Data for Next User
      </button>
    </div>
  );
};

const ObjectAndArrays = () => {
  return (
    <>
    <h2>Object and Arrays</h2>
      <ObjectDependencyWrong />
      <ObjectDependencyCorrect />
    </>
  );
};
