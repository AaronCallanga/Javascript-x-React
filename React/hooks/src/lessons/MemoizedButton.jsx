import React from "react";

// Wrap the child component with React.memo to prevent unnecessary re-renders.
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
