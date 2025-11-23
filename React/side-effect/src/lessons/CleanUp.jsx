import React from "react";
import { CleanUpOnlyOnceUnmount } from "./Clean-up/CleanUpOnlyOnceUnmount";
import { CleanUpWhenDependencyChange } from "./Clean-up/CleanUpWhenDependencyChange";
/*
React calls cleanup WHEN:
    - component unmounts
    - dependencies change
    - before next effect runs
*/
export const CleanUp = () => {
  return (
    <>
      <h1>🎯 3. Clean up Effect</h1>
      <CleanUpOnlyOnceUnmount />
      <CleanUpWhenDependencyChange />
    </>
  );
};
