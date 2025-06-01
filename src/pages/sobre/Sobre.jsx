
import styles from './Sobre.module.css';

import img7 from '../../assets/MATEUS.png';

function Sobre() {
  return (
    <div className={styles.body}>
      <div className={styles.row}>
      <img className={styles.img} src={img7} alt="Foto de Mateus de Paula Rezende" />
        <div className={styles.card}>
          <h1>Mateus de Paula Rezende</h1>
          <p className={styles.subtitle}>Desenvolvedor Web| Estudante de Engenharia da Computação</p>
          <ul className={styles.infoList}>
          <li><strong>Formação Acadêmica:</strong></li>
            <li> <strong> Técnico em Informática para Internet</strong> - IF Goiano<br />  Concluído em 2023</li>
            
           <li><strong>Engenharia da Computação</strong> - IF Goiano<br />
           <span className={styles.date}>2024 - Presente (Transferido de Ciência da Computação)</span></li> 
            
            <li><strong>Experiência Profissional:</strong></li>
            <ul>
            <li> <strong>Desenvolvedor web </strong>(2024 - Atualmente)</li>
            <li>
            <strong>Estagiário de Suporte em Sistemas</strong> - Unimed Goiânia<br />
                <span className={styles.date}>Out 2024 - Presente</span>
                <ul className={styles.responsibilities}>
                  <li>Atendimento e suporte técnico a usuários</li>
                  <li>Manutenção de sistemas corporativos</li>
                </ul>
              </li>
              
            </ul>
            <li><strong>Tecnologias: </strong></li>
            <li> 
    <ul>
      <li>JavaScript, React Native,HTML5 & CSS3</li>
      <li>JAVA,SPRINGBOOT, SQL</li>
    </ul>
  </li>
           
          </ul>
        </div>
       
      </div>
    </div>
  );
}

export default Sobre;
