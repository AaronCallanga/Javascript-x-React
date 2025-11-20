// =============================================================================================================
// Promise - represents a value that is not available yet. "I Promise a Result!"
const promise = new Promise((resolve, reject) => {
  const idk = true;
  if (idk) {
    setTimeout(() => resolve("Done"), 1000);
  } else {
    setTimeout(() => reject("Not Done"), 1000);
  }
});

// if promise is resolved = .then(callBack) is executed. Otherwise, rejected = catch()
promise
  .then((result) => console.log(result)) // Done
  .then((result2) => console.log(result2)) // undefined since console.log(result) does not return promise
  .catch((err) => console.log(err)); // only invoked when promise is rejected

//=============================================================================================================
// Async/Await - "async and await make promises easier to write"
// async - makes a function return a Promise      and     await - makes a function wait for a Promise

const fetchUser = async () => {
  return { name: "Aaron", age: 19 };
};
// You can directly consume the promise { name: 'Aaron', age: 19 } or to handle the returned Promise's value
fetchUser()
  .then((u) => console.log(u))
  .catch((err) => console.log(err));

// Or use await in another async function to get the value directly
async function fetchData() {
  const user = await fetchUser(); // waits for fetchUser promise function to be resolve and assign the value
  console.log(user); // { name: 'Aaron', age: 19 }
  return user; // returns the object wrapped in promise, however, the function returns a promise instead
}
// NOTE: Any value returned from an async function is automatically wrapped in a new Promise.

// Another method. Wrap in an Immediately Invoked Async Function Expression (IIAFE) to use await at the top level
(async () => {
  const user = await fetchData(); // Use await to get the resolved value
  console.log(user); // Output: { name: 'Aaron', age: 19 }
})();

const notAPromise = () => {};
notAPromise.then((err) => console.log(err)); // error, since notAPromise is does not return Promise

//=============================================================================================================
// Fetch - to retrieve data from a server and process it sequentially
const fetchUserData = async () => {
  // or   async function fetchUserData() {}
  try {
    // Await the response from the fetch call, and assign value to response(real response, not Promise)
    const response = await fetch("https://api.example.com/users/1");

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Await the JSON parsing of the response body
    const user = await response.json();

    console.log("User data:", user);
    return user;
  } catch (error) {
    // Catches any errors that occurred during the fetch or JSON parsing
    console.error("Error fetching user data:", error);
  }
};

fetchUserData();

//=============================================================================================================
// Promise.all() - When you need to perform multiple independent asynchronous (concurrent) operations and wait for all of them to complete
async function fetchParallelData() {
  try {
    const [userData, postsData] = await Promise.all([
      fetch("https://api.example.com/users/1").then((res) => res.json()),
      fetch("https://api.example.com/posts?userId=1").then((res) => res.json()),
    ]);

    console.log("User data:", userData);
    console.log("Posts data:", postsData);
  } catch (error) {
    console.error("Error fetching data in parallel:", error);
  }
}

fetchParallelData();

//=============================================================================================================
// React
/*
useEffect(() => {
  const data = await fetch('https://api.example.com/posts?userId=1'); // ❌ Can't use async directly
}, []);
*/
// Correct way - Wrap async inside the effect:
useEffect(() => {
  async function loadData() {
    // you can even declare this outside useEffect()
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  loadData();
}, []);

// Example: Full React component using everything
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Unable to load products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}
