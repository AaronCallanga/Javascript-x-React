fetchData()
//   .then((user) => console.log(user)) //{ name: 'Aaron', age: 19 }
//   .catch((err) => console.log(err));

// // Wrap in an Immediately Invoked Async Function Expression (IIAFE) to use await at the top level
// (async () => {
//   const user = await fetchData(); // Use await to get the resolved value
//   console.log(user); // Output: { name: 'Aaron', age: 19 }
// })();