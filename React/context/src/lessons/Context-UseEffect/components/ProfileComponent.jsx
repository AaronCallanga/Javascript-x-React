import React from 'react';
import { useUser } from '../UserContext'; // Import the custom hook

// Any component within the provider's tree can now access the user data using the custom useUser hook
function ProfileComponent() {
  const { user, isLoading, error } = useUser();

  if (isLoading) {
    return <div>Loading user profile...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user logged in.</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}

export default ProfileComponent;
