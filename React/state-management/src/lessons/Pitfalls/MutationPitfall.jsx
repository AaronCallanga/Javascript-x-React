import React, { useState } from "react";

// State must be treated as immutable. You must always create a new object or array and pass that to the setter function.

export const MutationPitfall = () => {
  const [user, setUser] = useState({ name: "Aaron", age: 21 });

  const birthdayWrong = () => {
    // ❌ WRONG: We changed the original object reference in memory
    user.age = 30;

    // We pass the same old reference back to setUser. React sees no change.
    setUser(user); // No re-render will occur, UI remains at age 21
    console.log("Did not trigger a re-render!");
  };

  const birthdayCorrect = () => {
    // ✔ CORRECT: Create a BRAND NEW object with a new age
    setUser((prevUser) => ({
      ...prevUser, // Copy all existing properties
      age: 30, // Overwrite the specific property
    }));
    console.log("Triggered a re-render correctly!");
  };

  return (
    <>
      <h3>State Pitfall: Mutating State Directly</h3>
      <div style={{ padding: "20px", border: "1px solid red" }}>
        <h5>Wrong: Mutating State Directly</h5>
        <p>
          Name: {user.name}, Age: {user.age}
        </p>
        <button onClick={birthdayWrong}>Set Age to 30 (Wrong)</button>
      </div>
      <div style={{ padding: "20px", border: "1px solid green" }}>
        <h5>Correct: Immutable State Updates</h5>
        <p>
          Name: {user.name}, Age: {user.age}
        </p>
        <button onClick={birthdayCorrect}>Set Age to 30 (Correct)</button>
      </div>
    </>
  );
};
