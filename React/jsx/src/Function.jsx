import React from "react";

export const Function = () => {
  // --- 2. Function Calls (Helper Function) ---
  // Functions can be called to return dynamic content.
  const greetUser = (name) => {
    // This uses a template literal (backticks) for a clean string return.
    return `Hello, ${name}!`;
  };
  return (
    <>
      {/* --- Section 2: Function Calls --- */}
      <section>
        <h2>2. Function Calls</h2>
        {/* We call the function and its return value is rendered */}
        <p>
          <strong>Calling a helper function:</strong> {greetUser("Dave")}
        </p>
      </section>
    </>
  );
};
