import './App.css';
import MovieCard from './MovieCard';
import {useEffect, useState} from 'react'
import SearchIcon from "./search.svg";

// const API_KEY = '3d14944b';
const API_URL = 'https://www.omdbapi.com/?apikey=3d14944b';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);



useEffect(() => {
  searchMovies("Batman");
}, []);

const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  setMovies(data.Search);
  console.log(data);
};


  return (
    <div className="app">
        <h1> 
          MovieLand
        </h1>
        <div className = "search"> 
        
        <input placeholder ="Search for movies" value="Superman"   onChange={(e) => setSearchTerm(e.target.value)} />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
        </div>

        {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
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
