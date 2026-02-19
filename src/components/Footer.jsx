import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiDotnet } from "react-icons/si"; // Adicionei o SiDotnet
import styles from './Footer.module.css';

function Footer() {
  return( 
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {/* .NET Primeiro: Prioridade de carreira */}
        <li><SiDotnet title=".NET 8+" /></li>
        
        {/* Stack Backend Sólida */}
        <li><FaJava title="Java" /></li>
        <li><SiSpringboot title="Spring Boot" /></li>
        <li><FaDatabase title="SQL / Banco de Dados" /></li>

        {/* Stack Frontend */}
        <li><FaJs title="JavaScript" /></li>
        <li><FaHtml5 title="HTML5" /></li>
        <li><FaCss3Alt title="CSS3" /></li>
      </ul>

      <p className={styles.copy_right}>
          <strong>RZND</strong> &copy; 2025
      </p>
      
      <a 
        href="https://www.instagram.com/mateusp_rezendee/" 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.devLink}
      >
        Desenvolvido por Mateus de Paula Rezende
      </a>
    </footer>
  );
}

export default Footer;