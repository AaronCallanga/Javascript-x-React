import { UseCallback } from "./lessons/UseCallback";
import { UseMemo } from "./lessons/UseMemo";
import { UseReducer } from "./lessons/UseReducer";
import { UseRef } from "./lessons/UseRef";

function App() {
  return (
    <>
      {/* --- Section 1: useReducer — For Complex State Logic --- */}
      <UseReducer />

      <hr />

      {/* --- Section 2: useRef — For Changing State Without Re-renders --- */}
      <UseRef />

      <hr />
      {/* Performance Hooks (Memoization)*/}

      {/* --- Section 3: useMemo — Memoize Expensive Computations --- */}
      <UseMemo />

      <hr />

      {/* --- Section 4: useCallback — Memoize Functions --- */}
      <UseCallback />

      <hr />
    </>
  );
}

export default App;
