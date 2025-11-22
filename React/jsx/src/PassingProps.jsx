import React from 'react';

// --- Reusable Components (These receive the props) ---

// Component 1: Handles Basic Props and Spread Props
const User = (props) => {
  // We can access properties like props.name and props.age
  return (
    <div className="user-card" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>User Profile</h3>
      <p>Name: <strong>{props.name}</strong></p>
      <p>Age: <strong>{props.age}</strong></p>
    </div>
  );
};

// Component 2: Handles Function Props (Events)
// It accepts an 'onClick' function prop and attaches it to the native button event
const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '8px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none' }}>
      Click Me
    </button>
  );
};

// Component 3: Handles Object Props
const ProductCard = ({ product }) => {
  // It expects a single 'product' object prop and accesses its nested properties
  return (
    <div className="product-card" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h4>Product Details</h4>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
    </div>
  );
};

export const PassingProps = () => {

  // Data required for the examples
  const userData = { name: "Aaron", age: 21 };
  const productData = { id: 101, name: "React T-Shirt" };

  // A function we want to pass down to the Button component
  const handleButtonClick = () => {
    alert("Button in App component was clicked!");
  };

  return (
    <div>
      <h1>🎯 6. Passing Props in JSX</h1>
      <p>Props allow data flow from parent (App) to child components (User, Button, ProductCard).</p>
      <hr />

      <h2>✔ Basic Props</h2>
      {/* Passing simple string and number literals */}
      <User name="Aaron" age={21} />
      <hr />

      <h2>✔ Passing Functions (Event Handlers)</h2>
      {/* Passing a function defined above as a prop */}
      <Button onClick={handleButtonClick} />
      <hr />

      <h2>✔ Passing Objects</h2>
      {/* Passing an entire JavaScript object as a single prop */}
      <ProductCard product={productData} />
      <hr />

      <h2>✔ Spread Props (...)</h2>
      {/* Using the spread syntax to pass all key-value pairs from the `userData` object as individual props */}
      <User {...userData} />
      {/* This renders exactly the same as <User name="Aaron" age={21} /> */}
    </div>
  );
};

