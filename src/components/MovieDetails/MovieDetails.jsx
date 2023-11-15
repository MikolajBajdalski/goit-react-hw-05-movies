import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styles from './MovieDetails.module.css';
import { Outlet } from 'react-router-dom';
import { useNavigation } from 'contexts/NavigationContext';

const API_KEY = '35a34ce8f38b4fede9b5661b8e9c4e2f';
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { referrer, searchQuery } = useNavigation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`;
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

    if (id) {
      fetchMovie();
    }
  }, [id]);

  const handleGoBack = () => {
    if (referrer === 'movies' && searchQuery) {
      navigate(`/movies?query=${searchQuery}`);
    } else if (referrer === 'home') {
      navigate('/home');
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.goBack}>
        <button onClick={handleGoBack}>&larr; Go back</button>
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
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>
      <div className={styles.additionalInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
