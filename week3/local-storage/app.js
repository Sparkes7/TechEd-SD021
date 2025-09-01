const form = document.getElementById("form");

form.addEventListener("submit", saveData);

function saveData(event) {
  event.preventDefault();

  const formData = new FormData(form);

  // getting the colour value from the colour input and storing it as a variable
  const colour = formData.get("colour");
  const birthday = formData.get("birthday");

  // this object could store all our variables from our form
  const preferences = {
    colour,
    birthday,
    gender, // our variable
  };

  // adding our preferences object under the key "Preferences".
  localStorage.setItem("preferences", JSON.stringify(preferences));
  console.log(preferences);
}

// you could add everything you want to retreive here, then call it when you want, either on page load, or on a "load" click event etc.
function retreiveData() {
  const preferences = JSON.parse(localStorage.getItem("preferences"));

  if (preferences) {
    const colourInput = document.getElementById("colour-picker");
    colourInput.value = preferences.colour || "#000000";

    const birthdayInput = document.getElementById("birthday-picker");
    birthdayInput.value = preferences.birthday;

    const body = document.body;
    body.style.color = preferences.colour || "#000000";
  }
}

retreiveData();
