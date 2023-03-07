import { useEffect, useState } from 'react';

import { getMovieCredits } from 'shared/services/movie-api';

//id
const Cast = () => {
  const [credits, setCredits] = useState(null);
  const [id, setId] = useState(0);
  useEffect(() => {
    if (id) {
      const fetchCredits = async () => {
        try {
          //   console.log('search', search);
          const { results } = await getMovieCredits(id);
          //   console.log(results);
          setCredits(results);
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchCredits();
    }
  }, [id]);

  //   const {...} = credits;

  return;
};

export default Cast;
