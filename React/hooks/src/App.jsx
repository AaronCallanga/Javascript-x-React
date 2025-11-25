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
    </>
  );
}

export default App;
