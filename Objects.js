// Assigning object properties to variables
const m1 = () => {
  const person = {
    name: "Aaron",
    age: 19,
    isMarried: false,
  };
  const { name, isMarried, age } = person; // Object Destructing
  console.log(name);
  console.log(isMarried);
  console.log(age);

  // Assigning Object values to array
  const arrVal = Object.values(person);
  arrVal.forEach((v) => console.log(v));

  // Assigning Object keys to array
  const arrKey = Object.keys(person);
  arrKey.forEach((k) => console.log(k));

  // Key-Value pair of Object entries
  const arr = Object.entries(person)
  arr.forEach(([k, v]) => console.log(`${k} : ${v}`)) // Destructuring entry to k and v variable -> name : Aaron    age : 19    isMarried : false

  arr.forEach((k, v) => console.log(`${k} : ${v}`)) // with index (k = entry, v = index) -> name,Aaron : 0 age,19 : 1  isMarried,false : 2
};

// You want to make a copy of an object but change specific properties
const m2 = () => {
  const person = {
    name: "Aaron",
    age: 19,
    isMarried: false,
  };

  const person2 = { ...person, name: "Dave", age: 20, isRich: true }; // Spread (object spreading) can add properties
  console.log(person2); // { name: 'Dave', age: 20, isMarried: false }
  console.log(person); // { name: 'Aaron', age: 19, isMarried: false }
};

// You want to create an object using variables name (w/ same object properties' name)
const m3 = () => {
  const name = "Dave";
  const age = 20;
  const person = {
    name,       // instead of name: name   or   age: age
    age,
    isMarried: false,
  };

  console.log(person); // { name: 'Dave', age: 20, isMarried: false }
};

m1();
//m2();
//m3();
