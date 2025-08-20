console.log("Hello World");
document.body.style.backgroundColor = "cornsilk";
// events occur when the user triggers them
// such as clicking buttons, inputting data, loading pages, submitting forms...
// events add interation to our website

// Structure:
// It needs THREE things -

// 1) Interactive DOM element
const eventButton = document.getElementById("event-button");
console.log(eventButton);

// 2) Event Handler --> the action that will trigger when the user interacts with the event
// A function.
function handleClick() {
  console.log("Clicked!");
}

// 3) Event Listener --> the type of interaction the user will do to trigger the handler
// Click, Submiting Forms, Loading Pages etc.
eventButton.addEventListener("click", handleClick);

// =======================================

// 1 - the interactive dom
const newParagraphButton = document.getElementById("paragraph-button");

// 2 - the function to run <-- the handler
function addParagraph() {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "This was created on a click event!";

  const container = document.getElementById("paragraph-container");
  container.appendChild(newParagraph);
}

// 3 - the listener for a click event, and what
newParagraphButton.addEventListener("click", addParagraph);

// =======================================

// Stretch Goal ==================
// 1) Creating the DOM Elements
const shape = document.createElement("div");
shape.style.backgroundColor = "White";
shape.style.margin = "2rem";
shape.style.border = "1px solid black";
shape.style.width = "100px";
shape.style.height = "100px";
shape.style.display = "flex";
shape.style.justifyContent = "center";
shape.style.alignItems = "center";
shape.style.position = "absolute";
shape.style.transformOrigin = "center";

const text = document.createElement("p");
text.textContent = "Hover Me";

// Appending the text to the shape, then the shape to the document body.
shape.appendChild(text);
document.body.appendChild(shape);

//const square = document.getElementById("square");

// 2) Function <-- handler
function HoverOver() {
  let randomTop = Math.ceil(Math.random() * 80);
  let randomLeft = Math.ceil(Math.random() * 80);

  shape.style.top = `${randomTop}%`;
  shape.style.left = `${randomLeft}%`;
  shape.style.backgroundColor = "Red";
  shape.style.cursor = "pointer";
}

// 3) The Listener - calling the HoverOver function on the 'mouseover' event
shape.addEventListener("mouseover", HoverOver);

// And an example of an anonymous function built into the listener
shape.addEventListener("mouseout", function () {
  shape.style.backgroundColor = "White";
});
