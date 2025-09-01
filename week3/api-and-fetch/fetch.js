// Steps to get an API to work

// 1 - connect with the API to request the data

// we need to put this fetch method into an 'async' function to use the "await" keyword on fetch()

async function getData() {
  //const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // turns the response into data we can use by using response.json().
  const data = await response.json();
  console.log(data);
}

getData();

// async functions happen in a different stack to other functions.
// If you need a function to execute when it;s ready, use async functions and await keywords.
