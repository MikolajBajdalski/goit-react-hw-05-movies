// Home.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useNavigation } from 'contexts/NavigationContext';

const API_KEY = '35a34ce8f38b4fede9b5661b8e9c4e2f';
const BASE_URL = 'https://api.themoviedb.org/3';

const Home = ({ onNavigate }) => {
  const [movies, setMovies] = useState([]);
  const { updateReferrer } = useNavigation();

  useEffect(() => {
    updateReferrer('home');
  }, [updateReferrer]);

  useEffect(() => {
    const fetchMovies = async endpoint => {
      try {
        const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const getPopularMovies = async () => {
      const data = await fetchMovies('/trending/movie/day');
      setMovies(data.results || []);
    };

    getPopularMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trending today</h2>
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`}>
              <img
                className={styles.movieImage}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
              <span className={styles.movieTitle}>
                {movie.title || movie.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
