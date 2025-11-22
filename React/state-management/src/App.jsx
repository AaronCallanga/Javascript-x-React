import { Basic } from "./lessons/Basic";
import { MultipleVsSingleState } from "./lessons/MultipleVsSingleState";
import { StateForArrays } from "./lessons/StateForArrays";


function App() {
  return (
    <>
      <h1>State Management Concepts Overview</h1>
  
      {/* --- Section 1: Basic useState --- */}
      <Basic />

      {/* --- Section 2: State for Arrays --- */}
      <StateForArrays />

      {/* --- Section 3: Multiple State Variables vs One State Object --- */}
      <MultipleVsSingleState />
      
    </>
  );
}

export default App;
