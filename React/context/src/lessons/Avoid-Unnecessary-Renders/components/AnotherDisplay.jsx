// src/AnotherDisplay.js
import React from "react";
import { useCounterValue } from "../CounterContext";

function AnotherDisplay() {
  const count = useCounterValue();

  console.log("Rendering AnotherDisplay"); // Check your console!

  return (
    <div style={{ padding: "10px", border: "1px solid green" }}>
      Count * 2: <strong>{count * 2}</strong>
    </div>
  );
}

export default AnotherDisplay;
