import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.scss';

import menuItems from './menuItems';

const NavBar = () => {
  const elements = menuItems.map(({ id, name, link }) => {
    return (
      <li key={id}>
        <NavLink className={styles.link} to={link}>
          {name}
        </NavLink>
      </li>
    );
  });
  return <ul className={styles.menu}>{elements}</ul>;
};

export default NavBar;
