import React, { useState } from 'react';
// This example defines a custom hook once and uses it for managing the open/closed state of two independent UI elements: an alert message and a collapsible section.

// --- The Custom Hook Definition ---
/**
 * A custom hook to manage boolean (toggle) state.
 * @param {boolean} initialValue - The starting boolean value (defaults to false).
 * @returns {Array} [currentState, toggleFunction]
 */
const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);
  
  // The toggle function uses the functional update pattern for reliability
  const toggle = () => setValue(v => !v);
  
  // Expose the current value and the function to update it
  return [value, toggle];
};


// --- Usage in Components ---

export const CustomHook = () => {
  // Use the custom hook for the visibility of an alert
  const [isAlertVisible, toggleAlertVisibility] = useToggle(true);

  // Use the custom hook again for a collapsible section
  const [isSectionOpen, toggleSectionOpen] = useToggle(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎯8. Custom Hook Wrapper</h1>
      <p>Custom hooks let us reuse state logic (like toggling boolean values) easily.</p>

      {/* --- Example 1: Alert Message --- */}
      <section>
        <h2>Alert Visibility</h2>
        <button onClick={toggleAlertVisibility}>
          {isAlertVisible ? 'Hide Alert' : 'Show Alert'}
        </button>

        {isAlertVisible && (
          <div style={{ padding: '10px', backgroundColor: '#ffdddd', marginTop: '10px' }}>
            I am a visible alert managed by `useToggle`!
          </div>
        )}
      </section>

      <hr />

      {/* --- Example 2: Collapsible Section --- */}
      <section>
        <h2>Collapsible Section</h2>
        <button onClick={toggleSectionOpen}>
          {isSectionOpen ? 'Collapse Details' : 'Expand Details'}
        </button>

        {isSectionOpen && (
          <div style={{ padding: '10px', backgroundColor: '#e0e0e0', marginTop: '10px' }}>
            <p>More details are now visible.</p>
            <p>This state is entirely independent of the alert state above, but uses the same logic.</p>
          </div>
        )}
      </section>
    </div>
  );
};

