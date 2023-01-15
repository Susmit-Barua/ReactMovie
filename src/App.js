import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./card";
const API_URL = "http://www.omdbapi.com?apikey=8224cb29";
const searchIcon = "./search.svg";

function App() {
  const moviesearch = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    moviesearch("batman");
  }, []);
  const [searchTerm, setsearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          placeholder="Search movie"
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => moviesearch(searchTerm)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movies={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
