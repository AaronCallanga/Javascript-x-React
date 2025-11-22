// ✔ Extract UI into Small Components (Composition)

// Instead of creating large, monolithic components, break down complex interfaces into small, reusable, focused components. This improves readability, reusability, and testability.
//Bad Practice (Monolithic):
const UserList1 = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong>
          <span>Age: {user.age}</span>
          <button>View Profile</button>
        </li>
      ))}
    </ul>
  );
};


// Good Practice (Extracted Components):
// 1. A tiny component responsible ONLY for displaying one user row
const UserRow = ({ user }) => {
  return (
    <li>
      <strong>{user.name}</strong>
      <span>Age: {user.age}</span>
      <button>View Profile</button>
    </li>
  );
};

// 2. The main component just manages the list structure and data mapping
const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        // Use the extracted component, passing the necessary data as props
        <UserRow key={user.id} user={user} />
      ))}
    </ul>
  );
};

export const SmallComponent = () => {

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
      <h3>✔ Extract UI into Small Components (Composition)</h3>
      <UserList users={peoples}/>
    </>
  );
};
