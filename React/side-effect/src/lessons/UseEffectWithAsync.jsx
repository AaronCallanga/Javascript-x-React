import React, { useState, useEffect } from "react";

// 🧩 4. useEffect with Async (Correct Pattern)
// You cannot make the useEffect function itself async. The correct pattern is to define an asynchronous function inside the effect and then call it immediately.
// Example Use Case: Fetching user data when the component mounts.
export const UseEffectWithAsync = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ❌ WRONG PATTERN
  //   useEffect(async () => {
  //     const res = await fetch();
  //   });

  // ✔️ CORRECT PATTERN
  useEffect(() => {
    // 1. Define an async function inside the effect
    async function fetchUserData() {
      console.log("Fetching data started...");
      try {
        // Simulate fetch delay
        const response = await new Promise((resolve) =>
          setTimeout(
            () => resolve({ id: 1, name: "Aaron", location: "QC" }),
            1500
          )
        );

        // 2. Process the data
        setUser(response);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    }

    // 3. Call the async function immediately
    fetchUserData();
  }, []); // Empty dependency array ensures it runs once

  if (loading) return <p>Loading user profile...</p>;
  if (!user) return <p>No user found.</p>;

  return (
    <>
      <h1> 🎯 2. UseEffect Wtih Async</h1>
      <div style={{ padding: "20px", border: "1px solid green" }}>
        <h3>Async Effect (Correct Pattern)</h3>
        <p>
          Welcome, {user.name} from {user.location}!
        </p>
      </div>
    </>
  );
};
