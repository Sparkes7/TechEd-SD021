let myName = "Will";
let age = 32;
let favColour = "orange";
console.log("My name is " + myName + " and I am " + age + " years old. My favourite colour is " + favColour);
console.log("----");

// sets the conversion of miles to kilometers to 1.60934
const milesToKM = 1.60934;

// Entering a number of miles will output the distance in kilometers, using the milesToKM constant.
let miles = 10;
let kilometers = miles * milesToKM;
console.log(miles + " miles is " + kilometers + " kilometers");
console.log("----");

let a = 6;
let b = 3;
console.log("A is " + a + " and B is " + b);

let c = 0;
c = a;
a = b;
b = c;
console.log("A is " + a + " and B is " + b);