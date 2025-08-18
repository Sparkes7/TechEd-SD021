console.log("Hello World!");

//numbers
let myNumber = 150;
console.log(myNumber);

let dvdCount = 33;
let blurayCount = 20;
let totalMovies = dvdCount + blurayCount;
console.log(totalMovies);
console.log("-----")
//strings
let myDogsName = "Elmo";
console.log(myDogsName);

let myCatsName = "Pizy";
let myPetsNames = `My pet's names are ${myDogsName} and ${myCatsName}`
console.log(myPetsNames);
console.log("-----")
//booleans
let isHappy = true;
let isHydrated = false;
console.log(isHappy);
console.log(isHydrated);
console.log("-----")

//typeof
let x = 5;
let y = 6;
let z = "11";
console.log(`x:${x} y:${y} z:${z}`)
console.log(typeof x, typeof y, typeof z);

let isXplusYequalZ = x + y == z;
console.log(`(Comparison) using two equals signs, is it ${isXplusYequalZ} that they are the same`);

isXplusYequalZ = x + y === z;
console.log(`(Strict Comparison) using three equals signs, is it ${isXplusYequalZ} that they are the same`);
console.log("-----")
//undefined and null
let variable;
let anotherVariable = null;
console.log(variable);
console.log(anotherVariable);

console.log("-----")

let a = null;
let b = undefined;
let comparison = a == b;
console.log(typeof a);
console.log(typeof b);
// unless strictly compared, null and undefined are compared as the same, however have different data types.
console.log(comparison);