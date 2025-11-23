import { Basics } from "./lessons/Basics";
import { CleanUp } from "./lessons/CleanUp";
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
    </>
  );
}

export default App;
