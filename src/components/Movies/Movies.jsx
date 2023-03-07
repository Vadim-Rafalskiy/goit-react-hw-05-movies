import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from 'components/Searchbar/Searchbar';

import { searchKeywords } from 'shared/services/movie-api';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (search) {
      const fetchImage = async () => {
        try {
          console.log('search', search);
          const { results } = await searchKeywords(search);
          console.log(results);
          setItems([...results]);
        } catch (error) {
          console.log(error.message);
        }
      };

      fetchImage();
    }
  }, [search]);

  const searchQuery = search => {
    setSearch(search);
    setItems([]);
  };

  const elements = items.map(({ id, name }) => {
    return (
      <Link key={id} to={`/movies/${id}`}>
        {' '}
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

// Movies.propTypes = {
//   searchQuery: PropTypes.func.isRequired,
// };
