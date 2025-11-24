import { AvoidUnnecessaryRerenders } from "./lessons/AvoidUnnecessaryRerenders";
import { Basics } from "./lessons/Basics";
import { ContextAndAuth } from "./lessons/ContextAndAuth";
import { ContextAndReducer } from "./lessons/ContextAndReducer";
import { ContextAndUseEffect } from "./lessons/ContextAndUseEffect";
import { ContextWithDefault } from "./lessons/ContextWithDefault";
import { ProductionSetup } from "./lessons/ProductionSetUp";

function App() {
  // Use Context when multiple components need the same state without prop-drilling through 5 parent/children levels.
  // Context = (Provider + Consumer + Value)
  // 1. Create Context → like defining a “global store”
  // 2. Wrap components with Provider → exposing values
  // 3. Consume using useContext → access data instantly

  /* 🟧 When NOT To Use Context
  Avoid Context for:
    -frequency updates (e.g., input typing)
    - large data objects (re-rerenders everywhere)
    - fetch-heavy data (use React Query or SWR)
  Use Context for:
    - auth
    - theme
    - user settings
    - small global config
  */
  return (
    <>
      {/* --- Section 1: Basics of useEffect --- */}
      <Basics />

      <hr />

      {/* --- Section 2: Production Setup (Separate Context File | Multiple Values | Derived State) --- */}
      <ProductionSetup />

      <hr />

      {/* --- Section 3: Context + useReducer Pattern (More Scalable) --- */}
      <ContextAndReducer />

      <hr />

      {/* --- Section 4: Avoiding Unnecessary Re-renders --- */}
      <AvoidUnnecessaryRerenders />

      <hr />

      {/* --- Section 5: Context for API Auth (Highly Used in React Apps) --- */}
      <ContextAndAuth />

      <hr />

      {/* --- Section 6: Fetching with Context + useEffect (Global Data Store) --- */}
      <ContextAndUseEffect />

      <hr />

      {/* --- Section 7: Context Default Value (Useful for Testing) --- */}
      <ContextWithDefault />

      <hr />
    </>
  );
}

export default App;
