import { NavLink } from 'react-router-dom';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';

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

  const genresList = details?.genres.map(({ name }) => name).join(', ');

  const from = location.state?.from;
  // console.log(from);

  const goBack = useCallback(() => navigate(from), [navigate, from]);

  //   const

  return (
    <>
      <button onClick={goBack} className={styles.btnBack}>
        Back
      </button>

      <div className={styles.detalesWrapper}>
        <img
          className={styles.poster}
          src={
            details?.poster_path
              ? `https://image.tmdb.org/t/p/original/${details?.poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/No_photo_available.svg/800px-No_photo_available.svg.png'
          }
          alt=""
        />
        <div className={styles.detalesInfo}>
          <h2>{details?.title}</h2>
          <h4>Vote average:</h4>
          <p>{` ${details?.vote_average.toFixed(1)} (${
            details?.vote_count
          })`}</p>
          <h4>Overview</h4>
          <p>{details?.overview}</p>
          <h4>Popularity</h4>
          <p>{details?.popularity}</p>
          <h4>Genres:</h4>
          <p>{genresList}</p>
          <h4>Time: </h4>
          <p>{details?.runtime} minutes</p>
        </div>
      </div>
      <div className={styles.btnDetailsWrapper}>
        <NavLink to={'cast'} className={styles.btnDetails} state={{ from }}>
          Cast
        </NavLink>
        <NavLink to={'reviews'} className={styles.btnDetails} state={{ from }}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
