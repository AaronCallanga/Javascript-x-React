import React from "react";
import { AsyncPitfall } from "./Pitfalls/AsyncPitfall";
import { MutationPitfall } from "./Pitfalls/MutationPitfall";

export const CommonPitfalls = () => {
  return (
    <>
      <h1>🎯 4. Common State Pitfalls</h1>
      <AsyncPitfall />
      <MutationPitfall />
    </>
  );
};
