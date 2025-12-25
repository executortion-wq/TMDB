import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const API_KEY = "TMDB_API_KEY"; // buraya TMDB key
const PORT = 3000;

app.get("/movies", async (req, res) => {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=tr-TR&page=1`;

  const response = await fetch(url);
  const data = await response.json();

  const movies = data.results.map(movie => ({
    title: movie.title,
    overview: movie.overview,
    rating: movie.vote_average
  }));

  res.json(movies);
});

app.listen(PORT, () => {
  console.log("Movie backend çalışıyor");
});
