import React, { useState } from "react";

// Approach A: Multiple Independent State Variables
//This approach is cleaner when your state variables are frequently updated independently of each other, in components with simple UI logic, or when they don't logically belong to a single "group" of data.
const MultipleStateVariablesExample = () => {
  // Use separate useState calls for independent values
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Approach A: Multiple States</h2>

      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <p>
        Price: ${price}
        <button onClick={() => setPrice((p) => p + 1)}>Increase Price</button>
      </p>

      <p>
        Available: {isAvailable ? "Yes" : "No"}
        <button onClick={() => setIsAvailable(!isAvailable)}>
          Toggle Availability
        </button>
      </p>

      <p>Current Title: {title}</p>
    </div>
  );
};

// Approach B: One State Object
//This approach is best when several fields logically belong together, such as in a complex form where you might update all fields simultaneously or when using a more complex state management system (like a reducer).
//Remember the rule: React does not merge objects automatically, so you must always use the spread operator (...) when updating a single field in the object.
const SingleStateObjectExample = () => {
  // Group related fields into a single state object
  const [form, setForm] = useState({
    title: "",
    price: 0,
    isAvailable: false,
  });

  // A generic update handler for text inputs
  const updateForm = (event) => {
    // Destructure event.target object to select specific component and value for update
    const { name, value } = event.target;

    // Always spread the previous state object first!
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value, // Use computed property names [name] to dynamically select the key
    }));
  };

  // A specific handler for toggling a boolean field
  const toggleAvailability = () => {
    setForm((prevForm) => ({
      ...prevForm,
      isAvailable: !prevForm.isAvailable, // Update just this one field
    }));
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Approach B: One State Object (Best for Forms)</h2>

      <label>
        Title:
        <input
          name="title"
          type="text"
          value={form.title}
          onChange={updateForm}
        />
      </label>

      <label style={{ marginLeft: "10px" }}>
        Price:
        <input
          name="price"
          type="number"
          value={form.price}
          onChange={updateForm}
        />
      </label>

      <p>
        Available: {form.isAvailable ? "Yes" : "No"}
        <button onClick={toggleAvailability}>Toggle Availability</button>
      </p>
      <p>Title: {form.title}</p>
      <p>Price {form.price}</p>
      <p>Available: {form.isAvailable ? "YES" : "NO"}</p>
    </div>
  );
};

export const MultipleVsSingleState = () => {
  return (
    <>
      <h1>🎯 3. Multiple State Variables vs One State Object</h1>
      <MultipleStateVariablesExample />
      <SingleStateObjectExample />
    </>
  );
};
