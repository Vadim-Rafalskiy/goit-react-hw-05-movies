import { useEffect, useState } from 'react';
import { useSearchParams, useLocation, Link } from 'react-router-dom';

import SearchBar from 'components/Searchbar/Searchbar';

import { searchKeywords } from 'shared/services/movie-api';

import styles from './Movies.module.scss';

const Movies = () => {
  const [items, setItems] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    if (search) {
      const fetchSearch = async () => {
        try {
          const { results } = await searchKeywords(search);
          setItems([...results]);
        } catch ({ response }) {
          console.log(response.data.message);
        }
      };

      fetchSearch();
    }
  }, [search]);

  const searchQuery = search => {
    setSearchParams({ search });
    setItems([]);
  };
  const location = useLocation();

  const elements = items.map(({ id, name }) => {
    return (
      <Link
        className={styles.link}
        key={id}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <li>{name}</li>
      </Link>
    );
  });

  return (
    <>
      <SearchBar onSubmit={searchQuery} />
      <ul>{elements}</ul>
    </>
  );
};

export default Movies;
