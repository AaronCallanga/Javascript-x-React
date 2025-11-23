import React, { useEffect, useState } from "react";

// This code effectively demonstrates how to use the browser's native AbortController API within a React useEffect hook to safely fetch data. The primary purpose is to prevent potential memory leaks and errors that occur when a component tries to update its state after it has been unmounted.
// The primary purpose of adding the AbortController functionality is to handle the scenario where a user navigates away (changing the page) before the data fetch completes.
export const AbortControllerExample = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Create an instance of AbortController.
    // This provides a way to signal and cancel asynchronous operations.
    const controller = new AbortController();
    // 2. Get the signal object from the controller.
    // This signal is passed to the fetch request to link the two operations.
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        // 3. Perform the fetch request, passing the 'signal' in the options object.
        // If 'controller.abort()' is called while this request is pending,
        // the promise will reject with an 'AbortError'.
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
          { signal }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        // 4. Update the state with the fetched data only if the request wasn't aborted.
        // The signal.aborted check acts as an extra safeguard before updating React state.
        if (!signal.aborted) {
          // Optional: ensure no state update after abort
          setData(result);
        }
      } catch (err) {
        // 5. Handle potential errors
        // Check if the error is specifically because we aborted the request manually
        if (err.name === "AbortError") {
          console.log("Request aborted");
        } else {
          if (!signal.aborted) {
            // Optional: handle real errors
            setError(err);
          }
        }
      }
    };

    fetchData();

    // Cleanup function to abort the request
    return () => {
      controller.abort();
    };
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <h1>🎯 7. Fetching with AbortController</h1>
      <p>User Data: {data.length}</p>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </>
  );
};

/*
Why add AbortController? Does it make a difference?
  Yes, it makes a significant difference. It solves a common and problematic issue in React applications related to asynchronous operations.

  When you start an asynchronous operation (like fetch inside useEffect), React proceeds to render other parts of your app. If the component that initiated the fetch is removed from the screen (unmounted) before the network request finishes, the fetch promise will eventually resolve and try to call your state setter (setData or setError).

  This attempt to update the state of an unmounted component leads to a memory leak and often triggers an error in development mode (React shows a warning like: "Can't perform a React state update on an unmounted component").

  The AbortController makes a difference by ensuring the operation stops gracefully.
*/

/*
Here is the exact sequence of events that happens with the code provided:
Step	             Action	                                        Code Implementation
1. Mount	         The component appears on screen.	              useEffect runs for the first time.
2. Fetch	         The asynchronous network request begins.	      fetchData() is called, initiating 
                                                                  fetch(...) with the signal.
3. Unmount	       The user clicks a link and navigates away      The useEffect cleanup function runs.
                   (the component disappears).	
4. Abort	         The cleanup function stops the pending         controller.abort() is executed.
                   request immediately.	
5. Cleanup	       The fetch promise rejects with an AbortError.      catch (err) handles the "AbortError"
                   The catch block catches this specific error                                             
                   and does nothing further (no state updates occur).	
                  
By using AbortController, you ensure that resources are released, the browser isn't waiting for a response it no longer needs, and your React application remains stable and free of memory leaks.
*/
