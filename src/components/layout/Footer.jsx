import React from 'react';

import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";


import styles from './Footer.module.css'
function Footer() {
  return( 
  <div className={styles.footer}>
    <ul className={styles.list} >
      <li><FaFacebook></FaFacebook></li>
      <li><FaInstagram></FaInstagram></li>
      <li><FaLinkedin></FaLinkedin></li>
    </ul>

    <p className={styles.copy_right}><span>Mateus.DEV</span> &copy; 2024</p>
    
     <a href="https://www.instagram.com/mateusp_rezendee/" target="_blank" rel="noopener noreferrer" > Desenvolvido por Mateus de Paula Rezende</a>

  </div>
  );
}

export default Footer;