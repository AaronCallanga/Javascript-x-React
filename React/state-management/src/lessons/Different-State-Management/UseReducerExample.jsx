import React, { useReducer } from 'react';
//3. useReducer (For Complex State Logic & Transitions)
//Use useReducer when your state changes involve complex logic, depend on the previous state in intricate ways, or have multiple related actions (e.g., FETCH_START, FETCH_SUCCESS, FETCH_ERROR).

// The Reducer Function: Determines how state changes based on an 'action'
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

const UseReducerExample = () => {
  // useReducer returns the current state and a 'dispatch' function to send actions
  const [state, dispatch] = useReducer(reducer, { count: 0 }); // Initial state is { count: 0 }

  return (
    <div style={{ padding: '10px', border: '1px solid purple' }}>
      <h3>useReducer: Complex state management</h3>
      <p>Count: {state.count}</p>
      
      {/* Dispatch actions by type string */}
      <button onClick={() => dispatch({ type: 'increment' })}>
        + Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })} style={{ margin: '0 10px' }}>
        - Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  );
};
