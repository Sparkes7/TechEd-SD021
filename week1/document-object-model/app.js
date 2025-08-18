console.log(window);

//this will select an element by the ID and assign it to our variable
const myH2 = document.getElementById("subtitle");
console.log(myH2);

//this will also select an element, but by the class name ".container", and assigning it to our variable.
const maincontainer = document.querySelector(".container");
console.log(maincontainer);

myH2.textContent = "This was changed using JS";
myH2.style.color = "red";

//creating an image in the document.
const myImage = document.createElement("img");
console.log(myImage);
myImage.src =
  "https://images.unsplash.com/photo-1736776885128-b0fdf476e2da?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
myImage.alt = "a cool picture";
myImage.width = 500;

//to add the image, we have to appendChild(variablename) to wherever you want it to be
maincontainer.appendChild(myImage);

//removes the image after adding it, but we want to keep the image :D
//myImage.remove();
