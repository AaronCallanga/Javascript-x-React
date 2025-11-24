
import React from 'react';
import { useAuth } from './AuthContext';


// Displays User Status and token
function ProfilePage() {
  // Use the custom hook to access the authentication token and status
  const { isAuthenticated, token } = useAuth();

  return (
    <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2>Profile Status</h2>
      {isAuthenticated ? (
        <>
          <p>Status: **Authenticated**</p>
          <p>API Token: <code style={{ wordBreak: 'break-all' }}>{token}</code></p>
        </>
      ) : (
        <p>Status: **Not Logged In**</p>
      )}
    </div>
  );
}

export default ProfilePage;
