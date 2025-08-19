console.log("hello world");

// objects are a data container for more complex data

// structure
// similar to an array, except use curly brackets instead of square brackets.

// between the brackets, you pu 'key value' pairs
// the 'key' is a property, and the value is assigned to the key.
let movie = {
  title: "Hereditary",
  director: "Ari Aster",
  released: 2018,
  rating: "18",
};

//you can log the whole object
console.log(movie);
// or just a key value pair:
console.log(movie.director);

// we can add a property to an existing object by trying to access a key that doesn't exist and giving it a value.
movie.genre = "Horror";

// and log it to test it worked.
console.log(movie.genre);

// you can embed arrays with other objects inside

let camera = {
  name: "Alexa LF",
  manufacturer: "Arri",
  usedIn: [
    { filmTitle: "Joker", director: "Todd Phillips" },
    { filmTitle: "The Substance", director: "Coralie Fargeat" },
  ],
};
console.log("==========================");
// workshop
// creating an object
const person = {
  firstName: "Will",
  lastName: "Sparkes",
  age: 32,
};

//different ways to show in console.
console.log(person);
console.table(person);

// changing key-pair values.
person.firstName = "John";
person.lastName = "Doe";
person.age = 45;

console.table(person);

//adding properties
person.gender = "Male";
person.favouriteColour = "Black"; // That's a very boring colour, John!
person.favouriteFood = "Fish and Chips";
console.table(person);

// creating complex objects
const blogPost = {
  title: "My first blog post",
  author: {
    name: "Will",
    age: 32,
    favouriteColour: "Orange",
  },
  tags: ["Coding", "JavaScript", "Objects", "Arrays"],
  content:
    "This is my first blog post about learning objects and arrays in Javascript!",
};

// accessing properties in complex objects
console.log(blogPost.author.name);
console.log(blogPost.tags[0]);
console.log(blogPost.tags.length);

console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}": `
);
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}

// You can put functions inside of objects and call them with a dot notation:
const city = {
  name: "Hull",
  population: 267100,
  readStats: function () {
    console.log(`Name: ${city.name}, Population: ${city.population}`);
  },
};
// calls the function readStats() inside the city object
city.readStats();
