/**
 * Filename: sophisticated_code.js
 * Content: Example code demonstrating a sophisticated and complex JavaScript application
 *          that calculates the Fibonacci series using memoization technique.
 */

// Function to calculate Fibonacci series using memoization
function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  if (fibonacci.memo.hasOwnProperty(n)) {
    return fibonacci.memo[n];
  }

  fibonacci.memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return fibonacci.memo[n];
}

fibonacci.memo = {};

// Calculate and display Fibonacci series for numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Fibonacci(${i}):`, fibonacci(i));
}

// Calculate and display Fibonacci series for numbers 11 to 20
for (let i = 11; i <= 20; i++) {
  console.log(`Fibonacci(${i}):`, fibonacci(i));
}

// Calculate and display Fibonacci series for numbers 21 to 30
for (let i = 21; i <= 30; i++) {
  console.log(`Fibonacci(${i}):`, fibonacci(i));
}

// Calculate and display Fibonacci series for numbers 31 to 40
for (let i = 31; i <= 40; i++) {
  console.log(`Fibonacci(${i}):`, fibonacci(i));
}

// Generate a random number and display its Fibonacci value
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(`Fibonacci(${randomNum}):`, fibonacci(randomNum));

// Calculate and display Fibonacci series for numbers 41 to 50
for (let i = 41; i <= 50; i++) {
  console.log(`Fibonacci(${i}):`, fibonacci(i));
}

// Generate a random number and display its Fibonacci value
const randomNum2 = Math.floor(Math.random() * 100) + 1;
console.log(`Fibonacci(${randomNum2}):`, fibonacci(randomNum2));


// ... continue calculating and displaying Fibonacci series for more numbers
// ...

// End of code