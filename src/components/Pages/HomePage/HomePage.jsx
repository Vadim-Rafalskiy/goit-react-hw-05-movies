import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getTrendingMovies } from 'shared/services/movie-api';

import Gallery from 'components/Gallery/Gallery';

const HomePage = () => {
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

  const elements = items.map(({ id, title }) => (
    <Link className="" key={id} to={`/movies/${id}`}>
      <li>{title}</li>
    </Link>
  ));
  return <ul>{elements}</ul>;
};

HomePage.defaultProps = {
  items: [],
};

export default HomePage;
