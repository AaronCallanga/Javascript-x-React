import React from 'react';

// This file demonstrates fundamental JSX concepts within a single App component.

const App = () => {

  // --- 1. Embedding Expressions & Variables ---
  // We can inject JavaScript values directly into the HTML-like structure.
  const userName = "Aaron";
  const userGreeting = <span>Welcome!</span>;
  const numericValue = 5 * 2;

  // --- 2. Function Calls (Helper Function) ---
  // Functions can be called to return dynamic content.
  const greetUser = (name) => {
    // This uses a template literal (backticks) for a clean string return.
    return `Hello, ${name}!`;
  };

  // --- 3. Conditional Rendering ---
  // We use JavaScript logic (like the ternary operator or logical &&)
  // to decide what gets rendered.
  const isLoggedIn = true;
  const cartItemCount = 3;

  // --- Helper function for Guard Clause Style (often used for early exit) ---
  const renderAdminPanel = (role) => {
    // A Guard Clause: If the condition is not met, return early (usually null or a message).
    if (role !== 'admin') {
      return null; // Don't render anything if not an admin
    }
    // If the check passes, the rest of the function runs and returns the JSX
    return (
      <div className="admin-panel">
        <p>Welcome, Administrator!</p>
        <button>Manage Users</button>
      </div>
    );
  };

  // Inline Switch-like Rendering - A way to handle multiple possible outcomes more cleanly than many ternaries
  const userRole = 'admin';

  // --- 4. Lists & Mapping ---
  // To render a list of items, we map over an array.
  const fruits = ['Apple', 'Banana', 'Cherry'];


  // The main return block renders all the concepts together.
  return (
    // <>...</> is a React Fragment, allowing us to return multiple elements.
    <>
      <h1>JSX Concepts Overview</h1>

      {/* --- Section 1: Variables & Expressions --- */}
      <section>
        <h2>1. Variables & Expressions</h2>
        <p><strong>Variable injection:</strong> {userName}</p>
        <p><strong>Element injection:</strong> {userGreeting}</p>
        <p><strong>Expression evaluation:</strong> {numericValue}</p>
      </section>

      {/* --- Section 2: Function Calls --- */}
      <section>
        <h2>2. Function Calls</h2>
        {/* We call the function and its return value is rendered */}
        <p><strong>Calling a helper function:</strong> {greetUser("Dave")}</p>
      </section>

      {/* --- Section 3: Conditional Rendering --- */}
      <section>
        <h2>3. Conditional Rendering</h2>
        {/* Ternary Operator: if/else logic */}
        <p>
          <strong>Status: </strong>
          {isLoggedIn ? (<span>✅ Logged In</span>) : (<span>❌ Logged Out</span>)}
        </p>

        {/* Logical && Operator: "only show if true" logic */}
        {cartItemCount > 0 && (
          <p>You have {cartItemCount} items in your cart.</p>
        )}

        {/* Guard Clause Style: Using a separate function that returns early */}
        <h3>Guard Clause Style</h3>
        {/* Often used for early exits in complex component logic */}
        {renderAdminPanel(userRole)}
        {renderAdminPanel('user')} {/* This will render nothing */}

        {/* Inline Switch-like Rendering: Using an object map for multiple cases */}
        <h3>Inline Switch-like Rendering</h3>
        {/* A way to handle multiple possible outcomes more cleanly than many ternaries */}
        <p>
          Current Role: {userRole}
        </p>
        {
          // We define possible outcomes in an object (comment: maybe you could put this to a function too)
          {
            'admin': <p style={{ color: 'red' }}>Full Access Granted</p>,
            'moderator': <p style={{ color: 'orange' }}>Limited Access</p>,
            'user': <p style={{ color: 'green' }}>Standard Access</p>,
          }[userRole] // This looks up the key matching the 'userRole' variable value
        }
      </section>

      {/* --- Section 4: Lists & Mapping --- */}
      <section>
        <h2>4. Lists (Mapping Data)</h2>
        <ul>
          {fruits.map((fruit, index) => (
            // The 'key' prop is crucial for React performance and tracking items
            <li key={index}>I love {fruit}</li>
          ))}
        </ul>
      </section>

    </>
  );
};

export default App;
