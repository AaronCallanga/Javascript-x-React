// src/UserDashboard.js
import React from 'react';
import { useAuth } from '../AuthContext';

// Reads state
function UserDashboard() {
  // Get the state object to read current user status
  const { state } = useAuth();

  return (
    <div style={{ padding: '15px', backgroundColor: '#eef' }}>
      <h2>Dashboard Status</h2>
      {state.isAuthenticated && state.user ? (
        <p>Welcome back, <strong>{state.user.name}</strong>! You are logged in.</p>
      ) : (
        <p>You are currently logged out. Please log in.</p>
      )}
    </div>
  );
}

export default UserDashboard;
