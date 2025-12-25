async function loadMovies() {
  const res = await fetch("http://localhost:3000/movies");
  const movies = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  movies.forEach(movie => {
    const li = document.createElement("li");
    li.innerText = `${movie.title} ⭐ ${movie.rating}`;
    list.appendChild(li);
  });
}
