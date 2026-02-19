import PropTypes from 'prop-types';
import styles from "./FlipCard.module.css";
import SubmitBtn from "./SubmitBtn";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

function FlipCard({ nome, src, Descricao, href }) {
  const [showModal, setShowModal] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <>
      <div className={styles.project_card}>
          <h1>{nome}</h1>
          <img src={src} alt={nome} />
          
          <div className={styles.actions}>
             <button className={styles.detailsBtn} onClick={() => setShowModal(true)}>
                Ver Detalhes
             </button>
             <SubmitBtn href={href} text="Acessar" />
          </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div 
            className={styles.modal_overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div 
              className={styles.modal_content}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setShowModal(false)}>
                <FiX size={24} />
              </button>
              
              <div className={styles.modal_header}>
                <img src={src} alt={nome} className={styles.modal_img} />
                <h2>{nome}</h2>
              </div>
              
              <div className={styles.modal_body}>
                 <h3>Sobre o Projeto</h3>
                 <p className={styles.description}>{Descricao}</p>
                 
                 <div className={styles.modal_footer}>
                    <SubmitBtn href={href} text="Acessar Projeto" />
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

FlipCard.propTypes = {
  nome: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  Descricao: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default FlipCard;
