import { useEffect, useState } from 'react';

import { getMovieReviews } from 'shared/services/movie-api';

//id
const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [id, setId] = useState(0);
  useEffect(() => {
    if (id) {
      const fetchReviews = async () => {
        try {
          //   console.log('search', search);
          const { results } = await getMovieReviews(id);
          //   console.log(results);
          setReviews(results);
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchReviews();
    }
  }, [id]);

  //   const {...} = reviews;

  return;
};

export default Reviews;
