// async function fetchGitData() {
//   const response = await fetch(
//     "https://api.github.com/repos/Sparkes7/character-saver"
//   );

//   const data = await response.json();
//   const wrangledData = data.stargazers_count;
//   return wrangledData;
// }

// function createStarsText(parameter) {
//   const text = document.createElement("p");
//   text.textContent = parameter;
//   document.body.appendChild(text);
// }

// async function combineFunctions() {
//   const data = await fetchGitData();
//   createStarsText(data);
// }
// combineFunctions();

// ===========================================

const form = document.getElementById("imdb-form");
form.addEventListener("submit", handleMovieSearch);
console.log("jfkdaosjfokdsajfs");

async function handleMovieSearch(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const values = Object.fromEntries(formData);
  console.log(values.titles);
  let searchTerm = Object.values(values);

  const response = await fetch(
    "https://api.imdbapi.dev/search/titles?query=" + searchTerm
  );
  const data = await response.json();
  const results = data.titles;

  console.log(results);

  const movieResultsBox = document.getElementById("movie-results");
  movieResultsBox.innerHTML = "";
  for (i = 0; i < results.length; i++) {
    const div = document.createElement("div");
    div.classList.add("movie-box");
    const movieTitle = document.createElement("p");
    movieTitle.textContent = `Title: ${results[i].primaryTitle}`;

    const movieType = document.createElement("p");
    movieType.textContent = `Type: ${results[i].type}`;

    const movieRating = document.createElement("p");
    if (results[i].rating) {
      movieRating.textContent = `Rating: ${results[i].rating.aggregateRating}`;
    } else {
      movieRating.textContent = "no rating";
    }

    div.appendChild(movieTitle);
    div.appendChild(movieType);
    div.appendChild(movieRating);
    movieResultsBox.appendChild(div);
  }
}
