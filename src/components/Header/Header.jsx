import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();

  const getLinkClass = path => {
    return location.pathname === path ? styles.active : styles.navLink;
  };

  return (
    <header className={styles.headerContainer}>
      <nav>
        <ul className={styles.navItems}>
          <li>
            <NavLink to="/" className={getLinkClass('/')}>
              Home
            </NavLink>
          </li>
          <li>
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
