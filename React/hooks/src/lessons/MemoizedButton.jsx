import React from "react";

/* If parent rerenders, does it make its children rerenders even its props passed is the same?
Yes, without React.memo, the child component will always re-render whenever its parent component re-renders, regardless of whether you use useCallback for the function prop or if the other props are technically "the same."
React.memo is the critical piece that enables the optimization. It acts as the switch that tells React, "Hey, only update this component if the props fail a shallow comparison."
*/
// Wrap the child component with React.memo to prevent unnecessary re-renders.
// This tells React: "Only re-render this component if its props actually change via a shallow comparison."
const MemoizedButton = React.memo(({ onClick, children }) => {
  // This console log makes it easy to see when this component actually renders
  console.log(`Rendering MemoizedButton for: ${children}`);

  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 15px",
        background: "#007bff",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
});

export default MemoizedButton;
