//TODO: Get images from an API and render the images on the DOM

async function getFox() {
  const response = await fetch("https://randomfox.ca/floof");
  const data = await response.json();

  // filtering the data to only what you want is often referred to as "data wrangling"
  // in this case, we only want the image, not the link

  const foxImg = document.createElement("img");
  foxImg.src = data.image;
  document.body.appendChild(foxImg);
}

getFox();

async function getMovies() {
  const response = await fetch(
    "https://api.imdbapi.dev/titles?types=MOVIE&startYear=1990&endYear=2010"
  );
  const data = await response.json();
  console.log(data);
}

getMovies();
