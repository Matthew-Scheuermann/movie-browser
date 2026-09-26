// grab elements

const filmsList = document.querySelector("#films");
const details = document.querySelector("#output");

//STATE
const state = {
  films: [],
  selectedFilm: null,
};

// fetch API
const getMovies = async () => {
  const response = await fetch("https://ghibliapi.vercel.app/films");
  const result = await response.json();
  state.films = result;

  filmsList.innerHTML = state.films
    .map((object) => `<li data-id="${object.id}">${object.title}</li>`)
    .join("");
};
getMovies();

// event listener
filmsList.addEventListener("click", (clickedItem) => {
  const id = clickedItem.target.dataset.id;

  const clickedFilm = state.films.find((film) => film.id === id);
  state.selectedFilm = clickedFilm;
  details.innerHTML = `<h2>${clickedFilm.title}</h2><p>${clickedFilm.description}</p>`;
});
