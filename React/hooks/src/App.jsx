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

      {/* --- Section 5: React.memo — Prevent Useless Re-renders To Child Components --- */}
      <UseCallback />

      <hr />
    </>
  );
}

export default App;

/*
🔥 Summary Table (Super Useful)
Hook	              Purpose	                          When to Use	                           Common Pair
useReducer	        Complex state	                    multi-step updates	                   useContext
useRef	            Mutable values, DOM	              timers, prev values, focus	           useEffect
useMemo	            Memoize expensive calculations	  derived values	                       useCallback
useCallback	        Memoize functions	                child props, stable fns	               React.memo
React.memo	        Skip unnecessary renders	        props unchanged	                   useCallback + useMemo
*/