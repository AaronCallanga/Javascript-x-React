import React from 'react';

// --- The Reusable Card Component ---
// This component expects to receive whatever UI is placed between its opening and closing tags
const Card = ({ children }) => {
  // `children` is a special prop that contains everything passed inside the Card tags in the parent component.
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      {/* This is where the passed-in content is rendered */}
      {children}
    </div>
  );
};



export const PassingUIProps = () => {
  return (
    <div>
      <h1>🎯 10. JSX Children: Passing UI as Props</h1>
      <p>The content wrapped by the `&lt;Card&gt;` tags below is automatically passed to the component via the special `children` prop.</p>
      
      {/* 
        We are passing a complex block of JSX (h2, p, button) 
        as a prop to the Card component.
      */}
      <Card>
        <h2>Welcome to the App!</h2>
        <p>This paragraph and the button below are nested inside the Card component's *children* prop.</p>
        <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          Click Here
        </button>
      </Card>

      {/* You can reuse the card component with totally different content */}
      <Card>
        <h3>A Second, Simpler Card</h3>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Card>
    </div>
  );
};
