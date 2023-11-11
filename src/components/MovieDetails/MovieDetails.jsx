import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './MovieDetails.module.css';

const API_KEY = '35a34ce8f38b4fede9b5661b8e9c4e2f';
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/movies">Movies</Link>
      </nav>
      <div className={styles.goBack}>
        <Link to="/movies">&larr; Go back</Link>
      </div>
      <div className={styles.movieDetails}>
        <div className={styles.movieImage}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className={styles.movieInfo}>
          <h1>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </h1>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
          <div className={styles.additionalInfo}></div>
        </div>
      </div>
      <p>Additional information</p>
      <ul>
        {' '}
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
