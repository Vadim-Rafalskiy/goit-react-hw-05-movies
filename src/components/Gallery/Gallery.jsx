import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'shared/services/movie-api';

import styles from './Gallery.module.scss';

//--------------------------------------------------

//--------------------------------------------------

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        const { results } = await getTrendingMovies();
        setItems([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
      }
    };

    fetchTrendings();
  }, []);

  const elements = items.map(({ id, title }) => <li key={id}>{title}</li>);
  return <ul className={styles.Gallery}>{elements}</ul>;
};

export default Gallery;

Gallery.defaultProps = {
  items: [],
};

Gallery.propTypes = {
  // showImage: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
};
