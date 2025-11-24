import React from "react";
import { AuthProvider } from "./Context-Reducer/AuthContext";
import LoginForm from "./Context-Reducer/components/LoginForm";
import UserDashboard from "./Context-Reducer/components/UserDashboard";

// Use this for complex global state like: auth, cart, notifications
export const ContextAndReducer = () => {
  return (
    <AuthProvider>
      <div style={{ padding: "20px" }}>
        <h1> 🎯 2. Context + useReducer</h1>
        {/* Components below this line can access the auth context through useAuth() custom hook */}
        <LoginForm />
        <UserDashboard />
      </div>
    </AuthProvider>
  );
};
