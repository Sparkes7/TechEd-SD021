console.log("Hello world");

// when creating functions, it starts with the keyword 'function' followed by the name of your function.
// after the function name, you put () which is for parameters which are optional
// curly brackets surround the code to be executed
function myFunctionName() {
  console.log("This is my function");
}

// Functions on their own will never be executed unless we execute it.
function sayHello() {
  console.log("Hello");
}
// to execute the function, we just call it as below:
sayHello();

// You can add argument parameters to the function to allow the function to be flexible, reusable and adaptable.
function greetUser(user, greeting) {
  console.log(`${greeting} ${user}!`);
}

greetUser("Will", "Good Morning");

// You can return the output of the function by using the 'return' keyword.
function addNums(num1, num2) {
  return num1 + num2;
}
addNums(4, 8); // the value of this would be '12' which can be stored as a variable

let result = addNums(4, 8);
console.log(result);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

console.log(calculate(2, 5, "*"));
