import React from 'react'
import ProfilePage from './Authentication-example/ProfilePage';
import { AuthProvider } from './Authentication-example/AuthContext';
import Header from './Authentication-example/Header';

// These components demonstrate accessing the authentication status and functions.
export const ContextAndAuth = () => {
  return (
    <AuthProvider>
      <div style={{ padding: '20px' }}>
        <h1> 🎯 3. Context for API Auth (Highly Used in React Apps)</h1>
        <Header />
        <main>
          <ProfilePage />
        </main>
      </div>
    </AuthProvider>
  );
}
