import React from "react";
import { AsyncPitfall } from "./Pitfalls/AsyncPitfall";
import { MutationPitfall } from "./Pitfalls/MutationPitfall";
import { StaleClosure } from "./Pitfalls/StaleClosure";

export const CommonPitfalls = () => {
  return (
    <>
      <h1>🎯 4. Common State Pitfalls</h1>
      <AsyncPitfall />
      <MutationPitfall />
      <StaleClosure />
    </>
  );
};
