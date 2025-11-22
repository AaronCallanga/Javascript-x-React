import React from "react";
import { Basic } from "./lessons/Basic";
import { Function } from "./lessons/Function";
import { ConditionalRendering } from "./lessons/ConditionalRendering";
import { ListAndMapping } from "./lessons/ListAndMapping";
import { PassingProps } from "./lessons/PassingProps";
import { PassingUIProps } from "./lessons/PassingUIProps";

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

      {/* --- Section 5: Passing Props in JSX --- */}
      <PassingProps />

      {/* --- Section 6: Passing UI as Props in - JSX Children --- */}
      <PassingUIProps />

      {/* --- Section 6: JSX Best Practices --- */}
      
    </>
  );
};

export default App;
