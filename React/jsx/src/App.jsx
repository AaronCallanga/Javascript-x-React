import React from "react";
import { Basic } from "./Basic";
import { Function } from "./Function";
import { ConditionalRendering } from "./ConditionalRendering";
import { ListAndMapping } from "./ListandMapping";

// This file demonstrates fundamental JSX concepts within a single App component.

const App = () => {
  // The main return block renders all the concepts together.
  return (
    // <>...</> is a React Fragment, allowing us to return multiple elements.
    <>
      <h1>JSX Concepts Overview</h1>

      {/* --- Section 1: Variables & Expressions --- */}
      <Basic />

      {/* --- Section 2: Function Calls --- */}
      <Function />

      {/* --- Section 3: Conditional Rendering --- */}
      <ConditionalRendering />

      {/* --- Section 4: Lists & Mapping --- */}
      <ListAndMapping />
    </>
  );
};

export default App;
