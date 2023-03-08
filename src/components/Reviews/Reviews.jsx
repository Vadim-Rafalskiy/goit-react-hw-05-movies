import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'shared/services/movie-api';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMovieReviews(id);
        setReviews(data.results);
      } catch ({ response }) {}
    };

    fetchReviews();
  }, [id]);

  const reviewsList = reviews?.map(({ author, content, created_at }, index) => (
    <li key={index}>
      <p>{created_at}</p>
      <h5>{author}</h5>
      <p>{content}</p>
    </li>
  ));

  return <ul>{reviewsList}</ul>;
};

export default Reviews;
