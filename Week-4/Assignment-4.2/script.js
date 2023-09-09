// Defining the counter function
function counter() {
  let count = 0;

  function increment() {
    // the inner function can access the count variable but no other block in the program can
    return (count += 1);
  }
  // creating a closure and returning a function
  return increment;
}

//initializing counter 1
const firstCounter = counter();
// initializing counter 2
const secondCounter = counter();

console.log(firstCounter());
console.log(firstCounter());
console.log(firstCounter());
console.log(firstCounter());
// the value of firstCounter is
console.log(secondCounter());
console.log(secondCounter());
console.log(firstCounter());
