function printHelloWorld() {
  console.log("Hello World!");
  console.log("I have been called back!");
}

function myFunction(callback) {
  console.log(
    "This is the myFunction function, calling back a different function that I pass in"
  );
  callback();
}

myFunction(printHelloWorld);

// You can also pass in an anonymous function if you wanted:
myFunction(function () {
  console.log("I'm an anonymous function");
});

// or in shorthand ...
myFunction(() => {
  console.log("shorthand anonymous function");
});

function greaterOrLessThan(greaterThan, lessThan) {
  const random = Math.random();
  if (random > 0.5) {
    greaterThan();
  } else {
    lessThan();
  }
}

function numGreaterThan() {
  console.log("The number is greater than half");
}

function numLessThan() {
  console.log("The number is less than half");
}

greaterOrLessThan(numGreaterThan, numLessThan);
// ======================================
console.log("======================================");
// ======================================

//defining individual operator functions for add, subtract, multiply and divide.
function add(a, b) {
  console.log(`Adding ${a} to ${b}`);
  return a + b;
}
function subtract(a, b) {
  console.log(`Subtracting ${a} from ${b}`);
  return a - b;
}
function multiply(a, b) {
  console.log(`Multiplying ${a} by ${b}`);
  return a * b;
}
function divide(a, b) {
  console.log(`Dividing ${a} by ${b}`);
  return a / b;
}

// our function that calls the operator function we want, and takes the numbers into the operator function.
// because we are not logging within the function, we can return the value and store it in a variable.
function Calculator(operator, a, b) {
  return operator(a, b);
}

// stored result of our callback from myCalculator -> multiply
const result = Calculator(add, 8, 16);
console.log(result);
