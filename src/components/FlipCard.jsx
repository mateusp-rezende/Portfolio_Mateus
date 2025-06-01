import PropTypes from 'prop-types';
import styles from "./FlipCard.module.css";
import SubmitBtn from "./SubmitBtn";
import { useState } from 'react';

function FlipCard({ nome, src, Descricao, href }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`${styles.flip_card} ${flipped ? styles.flip_card_flipped : ''}`} onClick={handleClick}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
          <h1>{nome}</h1>
          <img src={src} alt="produto" />
          <SubmitBtn href={href} text="Acessar projeto" />
        </div>
        <div className={styles.flip_card_back}>
          <h1>DESCRIÇÃO</h1>
          <h2>{Descricao}</h2>
        </div>
      </div>
    </div>
  );
}

FlipCard.propTypes = {
  nome: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  Descricao: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default FlipCard;
