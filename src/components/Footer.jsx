import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import styles from './Footer.module.css';

function Footer() {
  return( 
    <div className={styles.footer}>
      <ul className={styles.list}>
        <li><FaJava title="Java" /></li>
        <li><FaJs title="JavaScript" /></li>
        <li><SiSpringboot title="Spring Boot" /></li>
        <li><FaHtml5 title="HTML5" /></li>
        <li><FaCss3Alt title="CSS3" /></li>
        <li><FaDatabase title="SQL" /></li>
      </ul>

      <p className={styles.copy_right}><strong>RZND</strong> &copy; 2025</p>
      
      <a href="https://www.instagram.com/mateusp_rezendee/" target="_blank" rel="noopener noreferrer">
        Desenvolvido por Mateus de Paula Rezende
      </a>
    </div>
  );
}

export default Footer;