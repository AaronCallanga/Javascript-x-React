import { AvoidUnnecessaryRerenders } from "./lessons/AvoidUnnecessaryRerenders";
import { Basics } from "./lessons/Basics";
import { ContextAndReducer } from "./lessons/ContextAndReducer";
import { ProductionSetup } from "./lessons/ProductionSetUp";

function App() {
  // Use Context when multiple components need the same state without prop-drilling through 5 parent/children levels.
  // Context = (Provider + Consumer + Value)
  // 1. Create Context → like defining a “global store”
  // 2. Wrap components with Provider → exposing values
  // 3. Consume using useContext → access data instantly
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
    </>
  );
}

export default App;
