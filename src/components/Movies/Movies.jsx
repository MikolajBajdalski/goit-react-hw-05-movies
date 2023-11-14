import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Movies.module.css'; // Zaimportuj moduł stylów

const API_KEY = '35a34ce8f38b4fede9b5661b8e9c4e2f';
const BASE_URL = 'https://api.themoviedb.org/3';

const Movies = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (onNavigate) {
      onNavigate();
    }
  }, [onNavigate]);

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
          )}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          console.error('Error:', error);
        }
      };

      fetchMovies();
    }
  }, [query]);

  const handleSearchChange = event => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    navigate(`/movies?query=${query}`);
  };

  return (
    <div>
      <div className={styles.searchBar}>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search for a movie..."
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
        </form>
      </div>
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
