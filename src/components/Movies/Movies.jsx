// Movies.jsx

import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './Movies.module.css';
import { useNavigation } from 'contexts/NavigationContext';

const API_KEY = '35a34ce8f38b4fede9b5661b8e9c4e2f';
const BASE_URL = 'https://api.themoviedb.org/3';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const { updateReferrer, updateSearchQuery } = useNavigation();

  useEffect(() => {
    updateReferrer('movies');
  }, [updateReferrer]);

  const handleSearch = async event => {
    event.preventDefault();
    const searchQuery = event.target.elements.query.value;
    setSearchParams({ query: searchQuery });
    updateSearchQuery(searchQuery);
    if (searchQuery) {
      try {
        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          searchQuery
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
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (query) {
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
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a movie..."
            className={styles.searchInput}
            name="query"
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
              <img
                className={styles.movieImage}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
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

export default Movies;
