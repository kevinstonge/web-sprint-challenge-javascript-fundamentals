// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/*
    functions will first look for variables/methods inside of their own block (enclosed by the curly braces), if the information is not found there, they will then look up one level of scope (inside the curly braces that surround the function itself). However, they cannot see inside of neighboring functions, closure/scope is a one-way visibility pattern.
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation=(n)=>{
  let sum = 0;
  while (n>0) {
      sum += n--;
  }
  return sum;
}
console.log(summation(4))