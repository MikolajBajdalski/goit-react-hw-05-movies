import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ activeLink }) => {
  const getActiveClass = linkName => {
    return activeLink === linkName ? styles.active : '';
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/" className={getActiveClass('home')}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/movies" className={getActiveClass('movies')}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
