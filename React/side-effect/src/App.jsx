import { AbortControllerExample } from "./lessons/AbortControllerExample";
import { Basics } from "./lessons/Basics";
import { CleanUp } from "./lessons/CleanUp";
import { CommonUses } from "./lessons/CommonUses";
import { DependencyRules } from "./lessons/DependencyRules";
import { StandardFetchingWithUseEffect } from "./lessons/StandardFetchingWithUseEffect";
import { UseEffectWithAsync } from "./lessons/UseEffectWithAsync";

// Think of useEffect as: “Run this side-effect whenever these dependencies change.”
function App() {
  return (
    <>
      {/* --- Section 1: Basics of useEffect --- */}
      <Basics />

      <hr />

      {/* --- Section 2: Correct way of using Async with useEffect --- */}
      <UseEffectWithAsync />

      <hr />

      {/* --- Section 3: Clean up Effect --- */}
      <CleanUp />

      <hr />

      {/* --- Section 4: UseEffect with Fetch (Standard Pattern) --- */}
      <StandardFetchingWithUseEffect />

      <hr />

      {/* --- Section 5: Dependency Rules --- */}
      <DependencyRules />

      <hr />

      {/* --- Section 6: Common Uses --- */}
      <CommonUses />

      <hr />

      {/* --- Section 7: AbortController (Cancel Fetches) --- */}
      <AbortControllerExample />

      <hr />
    </>
  );
}

export default App;
