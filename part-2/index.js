/* Complete the following greetPerson function so that it passes 
the tests in index.test.js. */

// `cd` into the [part-2](./part-2/) folder and read the tests already written in [index.test.js](./part-2/index.test.js).
// Write the code for the `greetPerson` function in [index.js](./part-2/index.js) without changing these tests 
//so that they all pass when you run them.

// You can use `npm run test` (or just `npm t`) to run the tests.

export function greetPerson(name) {
  // Write the code for this function based on what you see in the tests!
  
  if( typeof name === "string") {
    return "Greetings, " + name;
  } else {
    return "Please try again with a name!";
  }
}
