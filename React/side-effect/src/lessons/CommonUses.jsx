import React from "react";
import { Subscriptions } from "./Common-Uses/Subscriptions";
import { Debouncing } from "./Common-Uses/Debouncing";
import { LocalStorageSync } from "./Common-Uses/LocalStorageSync";

export const CommonUses = () => {
  return (
    <>
      <h1> 🎯 6. Common uses of useEffect</h1>
      <Subscriptions />
      <Debouncing />
      <LocalStorageSync />
    </>
  );
};
