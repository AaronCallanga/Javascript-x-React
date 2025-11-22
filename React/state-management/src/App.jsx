import { Basic } from "./lessons/Basic";
import { CommonPitfalls } from "./lessons/CommonPitfalls";
import { CustomHook } from "./lessons/CustomHook";
import { FunctionAsState } from "./lessons/FunctionAsState";
import { MultipleVsSingleState } from "./lessons/MultipleVsSingleState";
import { StateForArrays } from "./lessons/StateForArrays";
import { StateWithFetch } from "./lessons/StateWithFetch";
import { StateWithLocalStorage } from "./lessons/StateWithLocalStorage";

function App() {
  return (
    <>
      <h1>State Management Concepts Overview</h1>

      {/* --- Section 1: Basic useState --- */}
      <Basic />

      <hr />

      {/* --- Section 2: State for Arrays --- */}
      <StateForArrays />

      <hr />

      {/* --- Section 3: Multiple State Variables vs One State Object --- */}
      <MultipleVsSingleState />

      <hr />

      {/* --- Section 4: Initializing State with a Function --- */}
      <FunctionAsState />

      <hr />

      {/* --- Section 5: Common State Pitfalls --- */}
      <CommonPitfalls />

      <hr />

      {/* --- Section 6: Using State with Fetch --- */}
      <StateWithFetch />

      <hr />

      {/* --- Section 7: Custom Hook Wrapper (Reuse Logic) --- */}
      <CustomHook />

      <hr />

      {/* --- Section 8: Persist State in LocalStorage --- */}
      <StateWithLocalStorage />
    </>
  );
}

export default App;
