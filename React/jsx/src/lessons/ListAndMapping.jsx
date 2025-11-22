import React from "react";

export const ListAndMapping = () => {
  // --- 4. Lists & Mapping ---
  // To render a list of items, we map over an array.
  const fruits = ["Apple", "Banana", "Cherry"];

  const person1 = {
    id: 1,
    name: "Aaron",
    age: 19,
  };
  const person2 = { ...person1, id: 2, name: "Dave" };
  const person3 = { ...person1, id: 3, name: "Pogi", age: 20 };

  const peoples = [person1, person2, person3];

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
        <h2>A. Lists of Objects</h2>
        <ul>
          {peoples.map((p) => (
            // Better to use id as key for React to efficiently identify each element
            // Never use index when items can be reordered, removed, or inserted.
            <PersonCard key={p.id} data={p} />
            // <PersonCard key={p.id} name={p.name} age={p.age} />
          ))}
        </ul>
        <h2>B. Lists + Conditional Rendering</h2>
        <ul>
          {peoples.map((p) => (
            <div key={p.id}>
                <p>Name: {p.name}</p>
                {p.age > 19 ? <p>Still a kid</p> : <p>Too old</p>}
            </div>
          ))}
        </ul>
      </section>
    </>
  );
};

// Expect a prop and you can directly destructure its properties immediately or divide it {key, data}
const PersonCard = ({ key, data }) => {
  //{key, name, age} or received as object props - destructuring it is recommended
  return (
    <div key={key}>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
};
// const PersonCard = (props) => {
// const PersonCard = ({key, data}) => {
// const PersonCard = ({key, name, age}) => {
