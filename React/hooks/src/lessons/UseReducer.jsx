import React, { useReducer } from "react";

// --- 1. Define Initial State ---
const initialState = {
  items: [],
  cartCount: 0,
};

// --- 2. Define the Reducer Function ---
// The reducer function takes the current state and an action,
// and returns the new state based on the action type.
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // Logic for adding an item:
      // Check if the item already exists in the cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      let updatedItems;

      if (existingItem) {
        // If the product already in the cart, just increase its quantity
        updatedItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new, add the item with quantity 1
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        items: updatedItems,        // Update items
        cartCount: state.cartCount + 1,     // Update cartCount
      };

    case "REMOVE_ITEM":
      // Logic for removing an item:
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!itemToRemove) return state; // Safety check

      let itemsAfterRemoval;

      if (itemToRemove.quantity > 1) {
        // If quantity > 1, decrement quantity
        itemsAfterRemoval = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        // If quantity is 1, filter the item out completely
        itemsAfterRemoval = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }

      return {
        ...state,
        items: itemsAfterRemoval,
        cartCount: state.cartCount - 1,
      };

    case "CLEAR_CART":
      // Logic for clearing the entire cart:
      return initialState;

    default:
      // If an unknown action is dispatched, throw an error or return the current state
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

// --- 3. The React Component (Shopping Cart) ---
export function UseReducer() {
  // useReducer hook initialization:
  // It returns the current state and the 'dispatch' function used to trigger state changes.
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  // Helper function to dispatch the 'ADD_ITEM' action
  const addItemHandler = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  // Helper function to dispatch the 'REMOVE_ITEM' action
  const removeItemHandler = (itemId) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: itemId } });
  };

  // Helper function to dispatch the 'CLEAR_CART' action
  const clearCartHandler = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const availableProducts = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 50 },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>🎯 1. Basic useState</h1>
      <h3>Shopping Cart Demo (useReducer)</h3>

      {/* Display Total Count from the state */}
      <div style={{ borderBottom: "2px solid #ccc", paddingBottom: "10px" }}>
        <strong>Total Items in Cart: {cartState.cartCount}</strong>
        {cartState.cartCount > 0 && (
          <button onClick={clearCartHandler} style={{ marginLeft: "10px" }}>
            Clear Cart
          </button>
        )}
      </div>

      <h2>Available Products</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {availableProducts.map((product) => (
          <div
            key={product.id}
            style={{ border: "1px solid #ddd", padding: "10px" }}
          >
            {product.name} (${product.price})
            <button
              onClick={() => addItemHandler(product)}
              style={{ marginLeft: "10px" }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2>Your Cart Items</h2>
      {cartState.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartState.items.map((item) => (
            <li key={item.id}>
              {item.name} (Qty: {item.quantity})
              <button
                onClick={() => removeItemHandler(item.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove One
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
