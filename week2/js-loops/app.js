//For loops
// Repeat a task a specific amount of times
// Example: List all the names in an array
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// const names = ["Tom", "Will", "Sam", "Mike", "Chris"];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// document.body.onload = addElement();

//   for (let i = 0; i < nolanMovies.length; i++) {
//     console.log(nolanMovies[i]);
//   }
// console.log("====================");
// Loop specifically for looping through arrays.

const nolanMovies = [
  "Following",
  "The Prestige",
  "Interstellar",
  "Inception",
  "Insomnia",
  "Momento",
  "Batman Begins",
  "The Dark Knight",
  "The Dark Knight Rises",
  "Tenet",
  "Oppenheimer",
];

for (let movie of nolanMovies) {
  const newText = document.createElement("p");
  newText.textContent = movie;
  const moviesDiv = document.getElementById("movies");
  moviesDiv.appendChild(newText);
}

// While Loop
let dice = null;
let timesRolled = 0;
const targetRoll = 6;

// This loop is useful because the amount of times the dice will need to run changes every time.
while (dice != targetRoll) {
  dice = Math.ceil(Math.random() * 6);
  timesRolled++;
  console.log(`Dice Rolled a ${dice}`);
}
console.log(`The dice was rolled ${timesRolled} times`);
console.log("==================");

//forEach() is a method of arrays that allows us to run a function for each item in the array
nolanMovies.forEach((movie) => console.log(movie));
