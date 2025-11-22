import React from "react";

export const ConditionalRendering = () => {
  // --- 3. Conditional Rendering ---
  // We use JavaScript logic (like the ternary operator or logical &&)
  // to decide what gets rendered.
  const isLoggedIn = true;
  const cartItemCount = 3;

  // --- Helper function for Guard Clause Style (often used for early exit) ---
  const renderAdminPanel = (role) => {
    // A Guard Clause: If the condition is not met, return early (usually null or a message).
    if (role !== "admin") {
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
  const userRole = "admin";

  return (
    <>
      {/* --- Section 3: Conditional Rendering --- */}
      <section>
        <h2>3. Conditional Rendering</h2>
        {/* Ternary Operator: if/else logic */}
        <h3>A. Ternary Operator</h3>
        <p>
          <strong>Status: </strong>
          {isLoggedIn ? <span>✅ Logged In</span> : <span>❌ Logged Out</span>}
        </p>
        {/* Logical && Operator: "only show if true" logic */}
        <h3>B. Logical && Operator</h3>
        {cartItemCount > 0 && (
          <p>You have {cartItemCount} items in your cart.</p>
        )}
        {/* Guard Clause Style: Using a separate function that returns early */}
        <h3>C. Guard Clause Style</h3>
        {/* Often used for early exits in complex component logic */}
        {renderAdminPanel(userRole)}
        {renderAdminPanel("user")} {/* This will render nothing */}
        {/* Inline Switch-like Rendering: Using an object map for multiple cases */}
        <h3>D. Inline Switch-like Rendering</h3>
        {/* A way to handle multiple possible outcomes more cleanly than many ternaries */}
        <p>Current Role: {userRole}</p>
        {
          // We define possible outcomes in an object (comment: maybe you could put this to a function too)
          // this is literally like a hashmap, and component renders based on key's (userRole) value
          {
            admin: <p style={{ color: "red" }}>Full Access Granted</p>,
            moderator: <p style={{ color: "orange" }}>Limited Access</p>,
            user: <p style={{ color: "green" }}>Standard Access</p>,
          }[userRole] // This looks up the key matching the 'userRole' variable value (accessing value using key)
        }
      </section>
    </>
  );
};
