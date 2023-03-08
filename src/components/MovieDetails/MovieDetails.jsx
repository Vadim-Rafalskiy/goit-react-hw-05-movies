import { useEffect, useState, useCallback } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { getMovieDetails } from 'shared/services/movie-api';
import styles from './MovieDetails.module.scss';

const MovieDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setDetails(data);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchDetails();
  }, [id]);

  const genresList = details?.genres.map(({ name }) => name).join(' ');

  const { from } = location?.state;

  const goBack = useCallback(() => navigate(from), [navigate, from]);

  return (
    <>
      <button onClick={goBack} className={styles.btnBack}>
        Back
      </button>

      <h2>{details?.title}</h2>
      <p>Vote average: {details?.vote_average}</p>
      <h4>Overview</h4>
      <p>{details?.overview}</p>
      <h4>Genres</h4>
      <p>{genresList}</p>
      <Link to={'cast'} className={styles.btnBack} state={{ from }}>
        Cast
      </Link>
      <Link to={'reviews'} className={styles.btnBack} state={{ from }}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
};

export default MovieDetails;
