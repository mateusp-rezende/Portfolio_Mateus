// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../images/logo.png';

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img className={styles.image} src={logo} alt="microlaser logo" />
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to="/">Sobre</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/projects">Projetos</Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
