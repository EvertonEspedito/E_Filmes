import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import MovieCard from "../components/MovieCard"

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  
  const [topMovies, setMovies] = useState([]); 
  const query = searchParams.get("q");

 const getSerchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithUrl = `${searchUrl}?${apiKey}&query=${query}&language=pt-BR`;
    console.log(searchWithUrl);
    getSerchedMovies(searchWithUrl);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  )
}

export default Search
