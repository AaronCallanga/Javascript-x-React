import React from "react";

export const ListAndMapping = () => {
  // --- 4. Lists & Mapping ---
  // To render a list of items, we map over an array.
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
    <>
      {/* --- Section 4: Lists & Mapping --- */}
      <section>
        <h2>4. Lists (Mapping Data)</h2>
        <ul>
          {fruits.map((fruit, index) => (
            // The 'key' prop is crucial for React performance and tracking items
            <li key={index}>I love {fruit}</li>
          ))}
        </ul>
      </section>
    </>
  );
};
