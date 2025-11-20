// Spread (...) - used to expand an array's elements into places where zero or more arguments or elements are expected

const rest = () => {
  const numbers = [10, 20, 30, 40, 50, 60];

  // Destructure the first two, and collect the rest into a 'rest' array
  const [a, b, ...rest] = numbers;

  console.log(a); // Output: 10
  console.log(b); // Output: 20
  console.log(rest); // Output: [30, 40, 50, 60]
};

const spread = () => {
  const nums = [1, 2, 3, 4, 5];
  const nums2 = [...nums, 6, 7, 8, 9, 10]; // Spreading -> copy then add elements
  console.log(nums2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // Combine into a new array
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const combinedArray = [...array1, ...array2];

  // Spread the array elements as function arguments
  function sum(a, b, c) {
    return a + b + c;
  }
  const numbers = [1, 2, 3];
  const result = sum(...numbers);
  console.log(result); // 6
};

// Destructuring - Array Destructuring (Essential for useState hook)
// Destructuring allows you to assign array elements to variables based on their position
const destructuring = () => {
  const fruits = ["apple", "banana", "mango"];
  const [first, second, third] = fruits;

  const colors = ["red", "green", "blue"];
  const [a, , c] = colors; // skips green (by comma + blank space)

  const user_info = ["John", 25];
  const [name, age, city = "London"] = user_info; // assign default values

  // Swap values using destructuring
  let lang1 = "C++";
  let lang2 = "Java";
  [lang1, lang2] = [lang2, lang1];

  // React
  const stateArray = [
    "active",
    () => {
      console.log("Inactive");
      //status = status === "Active" ? "Inactive" : "Active";
    },
  ];
  const [status, setStatus] = stateArray;
  // status is 'active', setStatus is the function

  setStatus(); // prints "Inactive"
};

// =============================================================================================================
// Map -> transforms each element and returnes the transformed array (requires callback function)
const map = () => {
  const products = [
    { id: 1, name: "iPhone 13", price: 999 },
    { id: 2, name: "MacBook Pro", price: 1299 },
    { id: 3, name: "AirPods", price: 199 },
  ];

  // Array of ids
  const ids = products.map((v) => {
    return v.id; // requires explicit return, since it is enclosed in curly braces
  });
  console.log(ids); // [ 1, 2, 3 ]

  const ids2 = products.map((v) => v.id); // single expression, value is implicitly returned
  console.log(ids2); // [ 1, 2, 3 ]

  // Discounted product
  const discounted = products.map((v) => v.price - v.price * 0.1);
  console.log(discounted); // [ 899.1, 1169.1, 179.1 ]

  // React
  /*
  products.map((p) => {
    return (
      // Must have one parent component, a container to wrap it all such as div
      <div>
        <h1 key={p.id}>{p.id}</h1>
        <p>{p.name}</p>
        <p>{p.price}</p>
      </div>
    );
  });
  */
};

// =============================================================================================================
const filter = () => {
  const products = [
    { id: 1, name: "iPhone 13", price: 999 },
    { id: 2, name: "MacBook Pro", price: 1299 },
    { id: 3, name: "AirPods", price: 199 },
  ];

  // Getting products whose price is > 500
  const expensiveProducts = products.filter((p) => p.price > 500);
  console.log(expensiveProducts);
  // [{ id: 1, name: 'iPhone 13', price: 999 }, { id: 2, name: 'MacBook Pro', price: 1299 }]

  // Getting only even numbers
  const nums = [1, 2, 3, 4, 5];
  const evens = nums.filter((i) => {
    return i % 2 === 0;
  });
  console.log(evens); // [ 2, 4 ]

  // React - Function to handle the search logic
  /*
  const [products, setProducts] = useState(initialProducts);
  const [searchVal, setSearchVal] = useState('');
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchVal(searchTerm);

    // Use the filter method on the original list (initialProducts)
    const filteredList = initialProducts.filter((product) => {
      // Return true for items that match the search term
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Update the state with the filtered list
    setProducts(filteredList);
  };
  */
};

// =============================================================================================================
// Reduce - executes a "reducer" callback function on each element of an array, resulting in a single output value. Used for calculating totals (like a shopping cart total), counting occurrences, or grouping data into a single object.
const reduce = () => {
  const products = [
    { id: 1, name: "iPhone 13", price: 999 },
    { id: 2, name: "MacBook Pro", price: 1299 },
    { id: 3, name: "AirPods", price: 199 },
  ];

  // The '0' is the initial value for the accumulator
  const sum = products.reduce(
    (accumulator, currentProduct) => accumulator + currentProduct.price,
    0
  );
  console.log(sum); // 2497

  // Grouping items by their score range (Grouping into a single object)
  const students = [
    { name: "Kingsley", score: 70 },
    { name: "Jack", score: 80 },
    { name: "Joe", score: 63 },
    { name: "Sarah", score: 93 },
  ];

  const grouped = students.reduce((acc, student) => {
    const range = student.score > 75 ? "highScore" : "lowScore";
    // Ensure the array for specific range exists, then push the student
    if (!acc[range]) {
      acc[range] = [];
    }
    acc[range].push(student);
    return acc;
  }, {}); // The '{}' is the initial value for the accumulator object. Object that has key(String) + value(Array)

  console.log(grouped);
  /* {
      lowScore: [ { name: 'Kingsley', score: 70 }, { name: 'Joe', score: 63 } ],
      highScore: [ { name: 'Jack', score: 80 }, { name: 'Sarah', score: 93 } ]
    }*/
};

//map()
//filter();
//spread();
//reduce();
//destructuring();
//rest()