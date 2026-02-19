import { motion } from 'framer-motion';
import styles from './Contact.module.css';

import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from 'react-icons/fa6'; // Example if newer icons needed, sticking to installed react-icons

function Contact() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.div 
        className={styles.contact_container}
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h2 variants={item}>Entre em contato</motion.h2>
        <ul className={styles.contactGrid}>
          <motion.li variants={item}>
            <a href="mailto:mateusdepaularezende@gmail.com" className={styles.card}>
                <div className={styles.iconBox}><MdEmail /></div>
                <div className={styles.info}>
                    <span className={styles.label}>Email</span>
                    <span className={styles.value}>mateusdepaularezende@gmail.com</span>
                </div>
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="https://www.linkedin.com/in/mateus-de-paula-rezende/" target="_blank" rel="noopener noreferrer" className={styles.card}>
                <div className={styles.iconBox}><FaLinkedin /></div>
                <div className={styles.info}>
                    <span className={styles.label}>Linkedin</span>
                    <span className={styles.value}>mateus-de-paula-rezende</span>
                </div>
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="https://github.com/mateusp-rezende" target="_blank" rel="noopener noreferrer" className={styles.card}>
                <div className={styles.iconBox}><FaGithub /></div>
                <div className={styles.info}>
                    <span className={styles.label}>Github</span>
                    <span className={styles.value}>mateusp-rezende</span>
                </div>
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="https://www.instagram.com/mateusp_rezendee/" target="_blank" rel="noopener noreferrer" className={styles.card}>
                <div className={styles.iconBox}><FaInstagram /></div>
                <div className={styles.info}>
                    <span className={styles.label}>Instagram</span>
                    <span className={styles.value}>@mateusp_rezendee</span>
                </div>
            </a>
          </motion.li>
          <motion.li variants={item}>
            <a href="https://api.whatsapp.com/send?phone=5562996096028" target="_blank" rel="noopener noreferrer" className={styles.card}>
                <div className={styles.iconBox}><FaWhatsapp /></div>
                <div className={styles.info}>
                    <span className={styles.label}>Whatsapp</span>
                    <span className={styles.value}>(62) 99609-6028</span>
                </div>
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </>
  );
}

export default Contact;
