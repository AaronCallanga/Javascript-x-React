import { Basic } from "./lessons/Basic";
import { StateForArrays } from "./lessons/StateForArrays";


function App() {
  return (
    <>
      <h1>State Management Concepts Overview</h1>
  
      {/* --- Section 1: Basic useState --- */}
      <Basic />

      {/* --- Section 2: State for Arrays --- */}
      <StateForArrays />
      
    </>
  );
}

export default App;
