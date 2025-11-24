import React from "react";
import { CounterProvider } from "./Avoid-Unnecessary-Renders/CounterContext";
import IncrementButton from "./Avoid-Unnecessary-Renders/components/IncrementButton";
import DisplayCounter from "./Avoid-Unnecessary-Renders/components/DisplayCounter";
import AnotherDisplay from "./Avoid-Unnecessary-Renders/components/AnotherDisplay";

// Context re-renders EVERY consumer when value changes.
// This advanced pattern is used to optimize performance by splitting the static "setter" functions (which rarely change)
// from the dynamic "state" values (which change often) into two separate contexts.
// Components that only need to dispatch an action or set a value won't re-render when the value itself changes elsewhere in the app.
export const AvoidUnnecessaryRerenders = () => {
  return (
    <CounterProvider>
      <h1> 🎯 4. Optimized Context (Avoiding Unnecessary Renders)</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <IncrementButton />
        <DisplayCounter />  
        <AnotherDisplay />
      </div>
    </CounterProvider>
  );
};
