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


/*
If they are only contained in one context provider and value/function change, all the children components rerenders?
Yes, that is correct. In the standard pattern where you provide everything in a single value object:

// Single Context: Bad for performance if values change often
<AuthContext.Provider value={{ user, dispatch }}> 

If user changes, React sees the entire value object as a new reference. 
Every single component that uses useAuth()—even those that only use dispatch—will re-render 
because React assumes the whole context value might be relevant to them.
This is the key performance bottleneck the optimized pattern solves.


But now we separate dispatch/setter and value to different context so if whether value/dispatch change 
only the one who use them will render, is this right?
Yes, that is also correct. By splitting them:

// Split Contexts: Optimized for performance
<ValueContext.Provider value={value}>
  <SetterContext.Provider value={setValue}>
    {children}
  </SetterContext.Provider>
</ValueContext.Provider>

1. A component using useSetValue() subscribes only to SetValueContext. The function setValue is stable (it doesn't change between renders), 
so that component never re-renders when the value changes.
2. A component using useValue() subscribes only to ValueContext. It re-renders only when the value changes.

This granular subscription is how the advanced pattern optimizes performance for contexts with frequently updated data.

In summary: The standard single-context pattern is fine for state that changes infrequently (e.g., initial user login status), 
but for state that updates constantly, the split-context pattern or combining context with useReducer and separating concerns 
becomes essential for maintaining application performance.
*/