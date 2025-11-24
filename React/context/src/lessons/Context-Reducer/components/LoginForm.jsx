import React from 'react';
import { useAuth } from '../AuthContext';


// Dispatches actions
function LoginForm() {
  // Get state (for isAuthenticated check) and dispatch (for actions)
  const { state, dispatch } = useAuth();

  const handleLogin = () => {
    // Simulate a successful login API call
    const fakeUserObject = { 
        id: 1, 
        name: 'Alex Johnson', 
        token: 'fake-jwt-token-12345' 
    };

    // Dispatch the LOGIN action with the user data as payload
    dispatch({ type: 'LOGIN', payload: fakeUserObject });
  };

  const handleLogout = () => {
    // Dispatch the LOGOUT action
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div style={{ margin: '15px 0', padding: '15px', border: '1px solid #ccc' }}>
      {state.isAuthenticated ? (
        <button onClick={handleLogout}>Log Out</button>
      ) : (
        <button onClick={handleLogin}>Log In (Simulated)</button>
      )}
    </div>
  );
}

export default LoginForm;
