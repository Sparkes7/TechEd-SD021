// Arrays
// Arrays are used to store multiple 'things' within a variable.
// This could be a list of names, a list of numbers, a mix of names and numbers - etc.

//this is how you declare an array. Square bracket!
const myArray = ["item", "item", "item", "item", "item"];

//examples

//collection of names
// Inefficient!
const person1 = "Will";
const person2 = "John"; //etc.

// We should store the names like this!
const people = ["Will", "John", "Chris", "Mike", "Dan", "Tom"];

// You can get the length of an array using the .length notation.
people.length; // this will return '6'

// Each item has its own index number starting at '0'. index 0 is Will, index 1 is John etc.
console.log(people[1]); // this will log "John"
console.log(people[5]); // this will log "Tom"

// WORKSHOP
// logs the entire array.
const blogPosts = ["First Blog Post", "Second Blog Post", "Third Blog Post"];
console.log(blogPosts);

// you can add items by setting an index to a value.
blogPosts[3] = "Fourth Blog Post";
console.log(blogPosts[3]);

//arrays can have mixed data types.
const Person = ["John", "Smith", 32, false, 3];

//More arrays!
const favouriteFoods = ["Chicken", "Pizza", "Sweet Potato", "Banana", "Steak"];

const favouriteColours = ["orange", "blue", "red", "purple"];

const favouriteFilms = [
  "The Prestige",
  "Hereditary",
  "Cold War",
  "Leon: The Professional",
];

//you can find the index number of a specific item by using the IndexOf method.
console.log(favouriteFilms.indexOf("Hereditary"));

// push() adds to the end of the array
favouriteFoods.push("Burger");
console.log(favouriteFoods);

//pop() takes off the end
favouriteFoods.pop();
console.log(favouriteFoods);

//shift() removes from the front
favouriteFoods.shift();
console.log(favouriteFoods);

//unshift() adds at the front
favouriteFoods.unshift("Strawberrys");
console.log(favouriteFoods);

//You can remove specific index too with splice(). To remove a specific item, you need 2 arguments. First argument is the index number of the item, then the number of items to remove, in this case, just one.
favouriteFoods.splice(2, 1);
console.log(favouriteFoods);
