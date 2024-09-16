import React from 'react';
import styles from './Contact.module.css';

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

function Contact() {
  return (
   <>
  
    <div className={styles.contact_container}>
      <h2>Entre em contato</h2>
      <ul>
        <li><span className={styles.icon}><MdEmail /></span><a href="mailto:">Email: mateusdepaularezende@gmail.com</a></li>
        <li><span className={styles.icon}><FaLinkedin /></span><a href="https://www.linkedin.com/in/mateus-de-paula-rezende/">linkedin: mateus-de-paula-rezende</a></li>
        <li><span className={styles.icon}><FaGithub /></span><a href="https://github.com/mateusp-rezende">Github: mateusp-rezende</a></li>
        <li><span className={styles.icon}><FaInstagram /></span><a href="https://www.instagram.com/mateusp_rezendee/">Instagram: @mateusp_rezendee</a></li>
        <li><span className={styles.icon}><FaWhatsapp /></span><a  href="https://api.whatsapp.com/send?phone=5562996096028">Whatsapp: 62 99609-6028</a></li>
      
      </ul>
   
    </div>
    
   
    </>
  );
}

export default Contact;
