import { useState, memo } from 'react';

import PropTypes from 'prop-types';

import styles from './SearchBar.module.scss';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSabmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={styles.searchbar}>
      <form onSubmit={handleSabmit} className={styles.searchForm}>
        <input
          onChange={handleChange}
          value={search}
          className={styles.searchFormInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          required
        />
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}>
            <img src="./images/serch.png" alt="search" />
          </span>
        </button>
      </form>
    </header>
  );
};

export default memo(SearchBar);

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
