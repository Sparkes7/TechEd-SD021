console.log("Hello World");

// declaring a constant in global scope

const myName = "Will";

function sayHello() {
  console.log("Hello " + myName); // this function has access to the myName constant.
}
sayHello(); // outputs "Hello Will".

function sayHelloAgain() {
  const myNameAgain = "Will";
  console.log("Hello Again " + myNameAgain);
}
sayHelloAgain(); // outputs "Hello Again Will".
// BUT if I try to console.log the variable inside the function "myNameAgain"...
console.log(myNameAgain); // ERROR: myNameAgain is not defined.
// This is because myNameAgain is defined inside of the function sayHelloAgain().
// The console.log is occuring in the global scope, and when it tries to find myNameAgain, it cannot, because it will not check inside the function sayHelloAgain();
