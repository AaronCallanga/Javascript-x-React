import React, { useState, useEffect } from 'react';

//🧩 2. Run Once on Mount ([] - Empty Dependency Array)
// This hook runs only a single time after the component initially renders. This is ideal for initial data fetching, setting up subscriptions, or starting timers.

export const RunsOnceOnMount = () => {
  const [timer, setTimer] = useState(0);

  // ✔️ This useEffect has an EMPTY dependency array `[]`.
  // It runs exactly once when the component first appears.
  useEffect(() => {
    console.log("-> useEffect ran (Component mounted once). Starting timer.");

    // Start an interval timer (runs every 1000 ms asynchronously outside useEffect)
    // useEffect only allows it to start like a trigger or setup mechanism
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    // This return function is the "cleanup" phase (like componentWillUnmount)
    return () => {
      console.log("-> useEffect cleanup ran (Component unmounted). Stopping timer.");
      clearInterval(intervalId);
    };
  }, []); // <--- The empty array is key

  return (
    <div style={{ padding: '20px', border: '1px solid green' }}>
      <h3>Runs Once on Mount/Unmount</h3>
      <p>Timer: {timer} seconds</p>
      <p>Refresh the page to see the "Mounted!" log run just once.</p>
      <p>If this component were removed from the UI, the cleanup log would run.</p>
    </div>
  );
};

/*
Here is a breakdown of why your timer logic behaves this way:
    - useEffect runs once: Because of the empty dependency array ([]), the "setup" code inside your useEffect block runs exactly one time when the component first appears on the screen.

    - setInterval starts an asynchronous process: When the setup code runs, it calls setInterval. This is a built-in browser function that schedules another function (setTimer(prevTimer => prevTimer + 1)) to run every 1000 milliseconds (every second), outside the scope of the useEffect function call itself.

    - The interval runs continuously: The browser's timer mechanism takes over and calls your update function repeatedly. This causes your component to re-render every second as the timer state changes.

    - The cleanup stops the interval: The return function inside your useEffect is crucial. It contains the clearInterval(intervalId) logic. This code doesn't run until the component is removed from the DOM (unmounted). The cleanup function ensures that the continuous, asynchronous process you started is properly shut down when no longer needed.
*/