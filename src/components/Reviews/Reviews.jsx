import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'shared/services/movie-api';

import styles from './Reviews.module.scss';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(id);
        setReviews(data.results);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchReviews();
  }, [id]);

  const reviewsList = reviews?.map(({ author, content }, index) => (
    <li className={styles.item} key={index}>
      <h5 className={styles.author}>{author}</h5>
      <p>{content}</p>
    </li>
  ));

  const isReviews = reviewsList?.length > 0;

  return (
    <ul className={styles.list}>
      {isReviews ? reviewsList : 'There are no reviews.'}
    </ul>
  );
};

export default Reviews;
