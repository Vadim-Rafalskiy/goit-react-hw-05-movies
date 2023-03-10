import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { getMovieCredits } from 'shared/services/movie-api';

import styles from './Cast.module.scss';

const Cast = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await getMovieCredits(id);
        setCredits(data.cast);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchCredits();
  }, [id]);

  const creditsList = credits?.map(({ profile_path, cast_id, name }) => (
    <li className={styles.items} key={cast_id}>
      <img
        loading="lazy"
        className={styles.image}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/original/${profile_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/No_photo_available.svg/800px-No_photo_available.svg.png'
        }
        alt=""
      />
      <p className={styles.name}>{name}</p>
    </li>
  ));

  const isCredits = creditsList?.length > 0;

  const Loc = useLocation();

  // console.log('Loc', Loc);

  return (
    <ul className={styles.castList}>
      {isCredits ? creditsList : 'To information about the actors.'}
    </ul>
  );
};

export default Cast;
