import React from "react";

export const Basic = () => {
  // --- 1. Embedding Expressions & Variables ---
  // We can inject JavaScript values directly into the HTML-like structure.
  const userName = "Aaron";
  const userGreeting = <span>Welcome!</span>;
  const numericValue = 5 * 2;
  return (
    <>
      {/* --- Section 1: Variables & Expressions --- */}
      <section>
        <h2>1. Variables & Expressions</h2>
        <p>
          <strong>Variable injection:</strong> {userName}
        </p>
        <p>
          <strong>Element injection:</strong> {userGreeting}
        </p>
        <p>
          <strong>Expression evaluation:</strong> {numericValue}
        </p>
      </section>
    </>
  );
};
