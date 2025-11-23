import React, { useState, useEffect } from "react";
import { useMemo } from "react";

// 2. Objects & Arrays (Reference Equality Issue)
// Objects and arrays are compared by their reference (their location in memory). If you create a new object inline during render, the reference changes every single time the component re-renders, causing an infinite loop.

// ❌ Wrong Example (Infinite Loop):
const ObjectDependencyWrong = () => {
  const [data, setData] = useState(null);
  const test = { username: "test" };

  useEffect(() => {
    // ❌ DANGER: This object `{ username: "test" }` is created FRESH on EVERY RENDER.
    // The reference changes every time, causing useEffect to run,
    // which updates state (setData), causing a re-render, creating a new object... loop forever.
    console.log("Effect is running in a loop!");
    // Imagine this was used to fetch data based on the object
    // fetchData(userCriteria);
  }, [test]);

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
  ); // Only recalculate if userId changes or Only recreate the object if `userId` changes

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

export const ObjectAndArrays = () => {
  return (
    <>
      <h2>Object and Arrays</h2>
      <ObjectDependencyWrong />
      <ObjectDependencyCorrect />
    </>
  );
};

/* 
Here's a breakdown of why this happens:
Initial Render:
1. The ObjectDependencyWrong component renders for the first time.
2. The test object ({ username: "test" }) is created.
3. The useEffect hook runs. React stores the reference to the current test object in memory.
4. Inside the effect, setData is called (though not explicitly shown in the effect itself, this is implied by the infinite loop warning), which updates the component's state.

Re-render Triggered:
1. The state update from setData causes the ObjectDependencyWrong component to re-render.

Subsequent Renders (The Loop):
1. During the re-render, a brand new test object is created.
2. React checks the dependencies array of useEffect ([test]). It compares the new reference of test with the previous reference stored in memory.
3. Since JavaScript objects are compared by reference, the new object is considered "different" from the old one, even though they have the same content [1].
4. Because the dependency has "changed," useEffect runs again.
5. The effect calls setData again, triggering another re-render, and the cycle repeats indefinitely. 

In essence, placing a non-memoized object or array (which are reference types) directly in a useEffect dependency array, where that object is defined within the component's render scope, will lead to an infinite loop.

To fix this issue, you could:
1. Move the object definition outside the component if it never changes.
2. Use useMemo to memoize the object so its reference only changes when its internal dependencies change.
3. Use the specific properties of the object in the dependency array (e.g., [test.username]) instead of the whole object reference if only a specific value is needed
*/