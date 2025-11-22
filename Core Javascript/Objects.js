// Destructuring - Assigning object properties to variables
const destructuring = () => {
  const person = {
    name: "Aaron",
    age: 19,
    isMarried: false,
  };
  const { name, isMarried, age } = person; // Object Destructing, variables should have the same name
  console.log(name);
  console.log(isMarried);
  console.log(age);

  // Set a default value for 'fontSize' if it doesn't exist
  const settings = { theme: "Dark" };
  const { theme, fontSize = 16 } = settings;

  // Assigning Object values to array
  const arrVal = Object.values(person);
  arrVal.forEach((v) => console.log(v));

  // Assigning Object keys to array
  const arrKey = Object.keys(person);
  arrKey.forEach((k) => console.log(k));

  // Key-Value pair of Object entries
  const arr = Object.entries(person);
  arr.forEach(([k, v]) => console.log(`${k} : ${v}`)); // Destructuring entry to k and v variable -> name : Aaron    age : 19    isMarried : false

  arr.forEach((k, v) => console.log(`${k} : ${v}`)); // with index (k = entry, v = index) -> name,Aaron : 0 age,19 : 1  isMarried,false : 2
};

// Spread - You want to make a copy of an object but change specific properties
const spread = () => {
  const person = {
    name: "Aaron",
    age: 19,
    isMarried: false,
  };

  const person2 = { ...person, name: "Dave", age: 20, isRich: true }; // Spread (object spreading) can add properties
  console.log(person2); // { name: 'Dave', age: 20, isMarried: false }
  console.log(person); // { name: 'Aaron', age: 19, isMarried: false }

  // Shallow copy - New object. Even you modify its values, the original will remain the same
  const copy = { ...person };
  console.log(copy); // { name: 'Aaron', age: 19, isMarried: false }

  // Combine defaults with user preferences
  const defaults = { theme: "Dark", notifications: true };
  const userPreferences = { theme: "Light", fontSize: 18 };
  const mergedSettings = { ...defaults, ...userPreferences }; // (Light overwrites Dark)
  console.log(mergedSettings);
  // Output: { theme: 'Light', notifications: true, fontSize: 18 }
};

// Rest - collecting remaining properties into a new object
const rest = () => {
  const product = {
    id: "p12",
    name: "Laptop",
    price: 999,
    category: "Electronics",
  };

  // Destructure the 'id' and 'name', collect the rest into a 'details' object
  const { id, name, ...details } = product;

  console.log(id); // Output: p12
  console.log(name); // Output: Laptop
  console.log(details); // Output: { price: 999, category: 'Electronics' }
};

// You want to create an object using variables name (w/ same object properties' name)
const creation = () => {
  const name = "Dave";
  const age = 20;
  const person = {
    name, // instead of name: name   or   age: age
    age,
    isMarried: false,
  };

  console.log(person); // { name: 'Dave', age: 20, isMarried: false }
};

destructuring();
spread();
creation();
