import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Importando ícones
import styles from './NavBar.module.css';
import logo from '../assets/logo.png';



function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Botão do menu hamburguer (mobile) */}
        <div className={styles.menuToggle} onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        {/* Logo - agora com classe condicional */}
        <img 
          className={`${styles.image} ${menuOpen ? styles.imageMobile : ''}`} 
          src={logo} 
          alt="Logo" 
        />

        {/* Lista de links - classe condicional para mobile */}
        <ul className={`${styles.list} ${menuOpen ? styles.listOpen : ''}`}>
          <li className={styles.item}>
            <Link className={styles.link} to="/" onClick={() => setMenuOpen(false)}>Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/projects" onClick={() => setMenuOpen(false)}>Projetos</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/contact" onClick={() => setMenuOpen(false)}>Contato</Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="/certificados" onClick={() => setMenuOpen(false)}>Certificados</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;