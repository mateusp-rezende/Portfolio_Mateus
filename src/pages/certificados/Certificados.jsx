import { motion } from 'framer-motion';
import styles from './Certificados.module.css';
import java from "../../assets/java-certificado.webp";
import fundamentosJava from "../../assets/fundamentos-JAVA.webp";
import code_craft from "../../assets/code_craft.webp";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function Certificados() {
  const certificates = [
    {
      id: 1,
      title: "JAVA - Resolução de Problemas",
      image: java
    },
    {
      id: 2,
      title: "Fundamentos da Linguagem Java",
      image: fundamentosJava
    },
    {
      id: 3,
      title: "CodeCraft - Desafio de Desenvolvimento",
      image: code_craft
    }
  ];

  return (
    <div className={styles.cert_container}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certificados
      </motion.h2>

      <motion.div 
        className={styles.cert_grid}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {certificates.map((cert) => (
          <motion.div 
            key={cert.id} 
            className={styles.cert_card}
            variants={item}
            whileHover={{ y: -10 }}
          >
            <div className={styles.image_wrapper}>
              <img src={cert.image} alt={cert.title} className={styles.cert_img} />
            </div>
            <div className={styles.card_content}>
              <h2>{cert.title}</h2>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Certificados;
