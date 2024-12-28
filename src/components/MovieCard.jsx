import { Link } from "react-router-dom"

import { FaStar} from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG

const MovieCard = ({movie, showLink = true}) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        {movie.vote_average.toFixed(1)} <FaStar className="star" />
      </p>
      {showLink && <Link className="detalhes" to={`/movie/${movie.id}`}>Detalhes</Link>}
    </Link>
  )
}

export default MovieCard
