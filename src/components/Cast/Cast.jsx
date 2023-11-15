import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

const API_KEY = '35a34ce8f38b4fede9b5661b8e9c4e2f';
const BASE_URL = 'https://api.themoviedb.org/3';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCast(data.cast);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <div className={styles.castContainer}>
      {cast.map(member => (
        <div key={member.cast_id} className={styles.castMember}>
          <img
            className={styles.castImage}
            src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
            alt={member.name}
          />
          <div className={styles.castInfo}>
            <p className={styles.castName}>{member.name}</p>
            <p className={styles.castCharacter}>
              Character: {member.character}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
