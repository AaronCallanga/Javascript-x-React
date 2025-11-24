import React from 'react'
import { AuthProvider } from './Context-Reducer/AuthContext';
import LoginForm from './Context-Reducer/components/LoginForm';
import UserDashboard from './Context-Reducer/components/UserDashboard';

export const ContextAndReducer = () => {
  return (
    <AuthProvider>
      <div style={{ padding: '20px' }}>
        <h1>Context + useReducer Authentication Example</h1>
        {/* Components below this line can access the auth context */}
        <LoginForm />
        <UserDashboard />
      </div>
    </AuthProvider>
  );
}
