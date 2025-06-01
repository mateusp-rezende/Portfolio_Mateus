
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../assets/logo.png';

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
        <li className={styles.item}>
          <Link className={styles.link} to="/certificados">Certificados</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
