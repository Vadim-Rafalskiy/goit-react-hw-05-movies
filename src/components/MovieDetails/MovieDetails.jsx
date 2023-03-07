import { useEffect, useState } from 'react';

import { getMovieDetails } from 'shared/services/movie-api';

//id
const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const [id, setId] = useState(0);
  useEffect(() => {
    if (id) {
      const fetchDetails = async () => {
        try {
          //   console.log('search', search);
          const { results } = await getMovieDetails(id);
          //   console.log(results);
          setDetails(results);
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchDetails();
    }
  }, [id]);

  //   const {...} = details;

  return;
};

export default MovieDetails;
