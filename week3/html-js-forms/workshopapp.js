const userDataForm = document.getElementById("user-data");

userDataForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // stops the page reloading and stops users data entering the URL bar
  event.preventDefault();

  //FromData is a constructor object that takes form inputs and stores them in a key-value pair. The data isn't stored in a normal JS object that we can console.log, as it will return the "FormData" object and not a JavaScript Object.
  const userData = new FormData(userDataForm);
  console.log(userData); // this simply returns "FormObject {}"

  const values = Object.fromEntries(userData); // this turns the FormData object into a normal JS object so that we can log it to see the data
  console.log(values);
}

const raceForm = document.getElementById("race-form");

raceForm.addEventListener("submit", handleAccountForm);

function handleAccountForm(event) {
  event.preventDefault();

  const formData = new FormData(raceForm);

  const formDataValues = Object.fromEntries(formData);

  const keys = Object.keys(formDataValues);
  const values = Object.values(formDataValues);

  const string = document.createElement("P");
  string.textContent = JSON.stringify(formDataValues);
  document.body.appendChild(string);

  for (i = 0; i < keys.length; i++) {
    const key = document.createElement("p");
    key.textContent = keys[i];

    const value = document.createElement("p");
    value.textContent = values[i];
    document.body.appendChild(key);
    document.body.appendChild(value);
  }
}
