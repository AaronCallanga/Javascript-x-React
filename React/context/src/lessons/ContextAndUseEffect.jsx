import React from "react";
import { UserProvider } from "./Context-UseEffect/UserContext";
import ProfileComponent from "./Context-UseEffect/components/ProfileComponent";

export const ContextAndUseEffect = () => {
  return (
    <UserProvider>
      <h1> 🎯 6. Fetching with Context + useEffect (Global Data Store)</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <ProfileComponent />
      </div>
    </UserProvider>
  );
};
