console.log("Hello World");

const person = {
  name: "Jim",
  age: 50,
  favouriteColour: "Blue",
  sayHello: function () {
    console.log("Hello");
  },
  sayHelloTo: function (name) {
    console.log(`Hello ${name}, my name is ${this.name}`);
  },
  getAge: function () {
    return this.age;
  },
};

//calls the sayHello method in the person object.
person.sayHello();

// passing arguments
person.sayHelloTo("Will");

const personsAge = person.getAge();
console.log(personsAge);

const car = {
  make: "BMW",
  model: "X1",
  colour: "Matte Black",
  advert: function () {
    return `Get the new ${this.make} ${this.model} in your favourite colours, such as ${this.colour} from our showroom today!`;
  },
};
const carAdvert = car.advert();
console.log(carAdvert);

const book = {
  title: "There And Back Again",
  author: "Bilbo Baggins",
  pageCount: 356,
  advert: function () {
    return `The New Best-seller from ${this.author}, a tale of adventure! Get "${this.title}" today, and get lost in the authors best writing for all ${this.pageCount} pages of this novel!`;
  },
};

const bookAdvert = book.advert();
console.log(bookAdvert);
