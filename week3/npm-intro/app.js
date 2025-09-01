// to use the cowsay code, we need to import it. We can use the require("packagename") and save it to a variable, then use that to access the package scripts (methods)

//const cowsay = require("cowsay"); //commonJS. This is the same as the line below but using older JS tools
import cowsay from "cowsay"; //ES6 - this is the new way to import. Both work, the JS devs just decided it could be better than above :) Just make sure to use "type": "module" in package.json

// cowsay is out variable. cowsay.say() is a method of cowsay
console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U ",
  })
);

function get_cows(error, cow_names) {
  if (error) {
    console.log(error);
  } else if (cow_names) {
    console.log(`Number of cows available: ${cow_names.length}`);
  }
}

cowsay.list(get_cows);
