// Spread - copying the array
const spread = () => {
  const nums = [1, 2, 3, 4, 5];
  const nums2 = [...nums, 6, 7, 8, 9, 10]; // Spreading -> copy then add elements
  console.log(nums2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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



//map()
//filter();
//spread();
reduce();
