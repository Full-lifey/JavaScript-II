// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function golf (){
  let todayScore = 77;
  function yesterday(){
    let yesterdayScore = 72
    return yesterdayScore++
  }
}
// Every time you call yesterday the score gets worse!!

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    count++
    return count
  }
};
const newCounter = counter();
// Example usage: const newCounter = counter();
// console.log(newCounter()); // 1
// console.log(newCounter())
// console.log(newCounter())
// console.log(newCounter())

// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (method) => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let inc_dec = {
    increment(){
      count++
      return count
    },
    decrement(){
      count--
      return count
    }
  }
  return inc_dec.method
};

let keepCounting = counterFactory()
console.log(keepCounting(increment));
console.log(keepCounting(increment));
console.log(keepCounting(increment));
console.log(keepCounting(increment));