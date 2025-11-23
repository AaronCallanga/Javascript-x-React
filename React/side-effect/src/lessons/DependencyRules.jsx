import React from "react";
import { Primitive } from "./Dependency-rules/Primitive";
import { ObjectAndArrays } from "./Dependency-rules/ObjectAndArrays";
import { Functions } from "./Dependency-rules/Functions";

export const DependencyRules = () => {
  return (
    <>
      <h1>🎯 5. Dependency Rules</h1>
      <Primitive />
      <ObjectAndArrays />
      <Functions />
    </>
  );
};
