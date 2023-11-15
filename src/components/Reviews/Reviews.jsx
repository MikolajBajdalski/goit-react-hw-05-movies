import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';

const API_KEY = '35a34ce8f38b4fede9b5661b8e9c4e2f';
const BASE_URL = 'https://api.themoviedb.org/3';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const url = `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setReviews(data.results);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!reviews.length) {
    return (
      <div className={styles.noReviews}>
        We don't have any reviews for this movie.
      </div>
    );
  }

  return (
    <div className={styles.reviewsContainer}>
      {reviews.map(review => (
        <div key={review.id} className={styles.review}>
          <h4 className={styles.author}>Author: {review.author}</h4>
          <p className={styles.content}>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
