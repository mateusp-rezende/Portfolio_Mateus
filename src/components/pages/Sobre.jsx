import React from 'react';
import styles from './Sobre.module.css';

import img7 from '../../images/MATEUS.png';

function Sobre() {
  return (
    <div className={styles.body}>
      <div className={styles.row}>
      <img className={styles.img} src={img7} alt="Foto de Mateus de Paula Rezende" />
        <div className={styles.card}>
          <h1>Mateus de Paula Rezende</h1>
          <ul className={styles.infoList}>
            <li><strong>Formação:</strong><br /> Técnico em Informática para Internet (IF Goiano) - Concluído em 2023</li>
            <li><strong>Graduação:</strong> <br />Ciência da Computação (PUC Goiás) - Em andamento</li>
            <li><strong>Experiência Profissional:</strong></li>
            <ul>
            <li>Desenvolvedor Front-end – Autonômo (2024 - Atualmente)</li>
              <li>Auxiliar de Loja – Natura Cosméticos S/A (2024 - Atualmente)</li>
              <li>Manutenção de Equipamentos Hospitalares – Microlaser LTDA (2023)</li>
            </ul>
            <li><strong>Cursos Complementares:</strong></li>
            <ul>
              <li>Informática Básica (Word, Excel, PowerPoint, Edição de Imagens)</li>
              <li>Desenvolvimento Web (Java, JavaScript, HTML, CSS, React Native)</li>
              <li>Hardware (Montagem e Manutenção de Computadores)</li>
            </ul>
           
          </ul>
        </div>
       
      </div>
    </div>
  );
}

export default Sobre;
