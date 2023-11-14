import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  const getLinkClass = path => {
    return location.pathname === path ? styles.active : styles.navLink;
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/" className={getLinkClass('/')}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/movies" className={getLinkClass('/movies')}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
