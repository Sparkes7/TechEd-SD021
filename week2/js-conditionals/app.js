console.log("Hello World");

//falsey, will not run
if (0 > 1) {
  console.log("1 is greater than 0");
}

let myAge = 32;
let retirementAge = 70;

if (myAge < retirementAge) {
  console.log(
    "Sorry buddy! You've got " + (retirementAge - myAge) + " years left!"
  );
} else if (myAge >= retirementAge) {
  console.log("Take a rest, you've earned it :)");
} else {
  console.log("I'm unsure if you can retire yet!");
}

// dark mode demonstration
let isDarkMode = true;

if (isDarkMode === true) {
  document.body.style.backgroundColor = "Black";
} else if (isDarkMode === false) {
  document.body.style.backgroundColor = "White";
} else {
  console.log("Check isDarkMode boolean is set to true or false.");
}

//Entering any age and movie rating from the standard: U, PG, 12, 15, 18 ratings will provide you with a confirmation. If the movie rating is not standard, it will tell you otherwise.
let age = 12;
let movieRating = "UT";

if (age >= movieRating) {
  console.log("You can watch the movie");
} else if (age < movieRating) {
  console.log("Sorry! You cannot watch the movie");
} else if (movieRating == "PG") {
  if (age < 8) {
    console.log("You need to be accompanied by a parent");
  } else if (age >= 8) {
    console.log("You can watch the movie");
  } else {
    console.log("Please confirm your age");
  }
} else {
  if (movieRating == "U") {
    console.log("You can watch the movie");
  } else if (age == null || age == undefined) {
    console.log("Please confirm your age");
  } else if (!movieRating.includes("U" || "PG")) {
    console.log("Please enter a valid movie rating");
  } else {
    console.log("Sorry, we cannot help you");
  }
}
