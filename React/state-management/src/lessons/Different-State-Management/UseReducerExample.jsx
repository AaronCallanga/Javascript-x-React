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

export const UseReducerExample = () => {
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

/* 
Your Summary Point              	                       Confirmation
You need to create a reducer function                      Correct. This function contains all your state logic.
which commonly uses a switch statement.	

Per cases (based on action type) it would return the       Correct. The reducer returns the next state object/
new state object (like set function of useState).	       array, which replaces the previous state entirely.

Then use that reducer function for the useReducer          Correct. const [state, dispatch] = 
hook and also provide an initial value.	                   useReducer(reducerFunction, initialState);
To change the state, you have to invoke the dispatch       Correct. You pass an action object 
function and specify the action type to update the        (conventionally { type: 'ACTION_NAME' }) to dispatch().
data based on the switch logic.	

You can think of the flow like this:
UI Event -> Calls dispatch({ type: 'ACTION' })
React -> Passes (currentState, { type: 'ACTION' }) to the reducer function
Reducer -> Uses switch logic, calculates new state, and returns it.
React -> Replaces the old state with the new state and re-renders the component.
*/