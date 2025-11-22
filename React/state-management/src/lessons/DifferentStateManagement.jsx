import React from "react";
import { UseStateExample } from "./Different-State-Management/UseStateExample";
import { UseReducerExample } from "./Different-State-Management/UseReducerExample";
import { UseRefExample } from "./Different-State-Management/UseRefExample";

export default function DifferentStateManagement() {
  return (
    <>
      <h1>🎯 8. useState vs useRef vs useReducer</h1>
      <UseStateExample />
      <UseRefExample />
      <UseReducerExample />
    </>
  );
}
