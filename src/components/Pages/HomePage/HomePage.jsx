import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'shared/services/movie-api';
// import Movies from 'components/Movies/Movies';

import styles from './HomePage.module.scss';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        const { results } = await getTrendingMovies();
        setItems([...results]);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };

    fetchTrendings();
  }, []);

  const elements = items.map(({ id, title }) => (
    <Link
      className={styles.link}
      key={id}
      to={`/movies/${id}`}
      state={{ from: location }}
    >
      <li>{title}</li>
    </Link>
  ));
  return <ul>{elements}</ul>;
};

export default HomePage;
