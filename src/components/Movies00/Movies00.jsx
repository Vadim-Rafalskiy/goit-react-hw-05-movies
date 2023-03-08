import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from './Movies.module.scss';

const Movies = ({ items }) => {
  const elements = items.map(({ id, name }) => {
    return (
      <Link className={styles.link} key={id} to={`/movies/${id}`}>
        <li>{name}</li>
      </Link>
    );
  });
  console.log('movies', items);
  return <ul>{elements}</ul>;
};

export default Movies;

Movies.defaultProps = {
  items: [],
};

Movies.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
