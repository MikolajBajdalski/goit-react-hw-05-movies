import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Zaimportuj moduł stylów

const API_KEY = '35a34ce8f38b4fede9b5661b8e9c4e2f';
const BASE_URL = 'https://api.themoviedb.org/3';

const Home = () => {
  const [movies, setMovies] = useState([]);

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
      <header className={styles.headerNav}>
        <ul className={styles.navList}>
          <li className={styles.headerNavItem}>
            <Link className={styles.headerLink} to="/">
              Home
            </Link>
          </li>
          <li className={styles.headerNavItem}>
            <Link className={styles.headerLink} to="/movies">
              Movies
            </Link>
          </li>
        </ul>
      </header>
      <h2 className={styles.title}>Trending today</h2>
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link className={styles.movieLink} to={`/movies/${movie.id}`}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
