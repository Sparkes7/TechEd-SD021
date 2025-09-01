//Forms
// -> an event listener
const form = document.getElementById("user-form");
form.addEventListener("submit", handleSubmit);

//  -> an event handler
function handleSubmit(event) {
  // prevent the default behaviour of showing data in the URL, such as password
  event.preventDefault();

  //create an element to store our data --> object template
  // create an empty object called "formDataTemplate", assign it to the FormData, pass in our form element
  const formDataTemplate = new FormData(form);

  // add the user input values to our object template
  // save the form values from
  const formValues = Object.fromEntries(formDataTemplate);
  console.log(formValues);

  // week 4 topic --> send the formValues data to the server
}
