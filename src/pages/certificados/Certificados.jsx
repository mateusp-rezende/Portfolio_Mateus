
import styles from './Certificados.module.css';

import java from "../../assets/java-certificado.webp";
import fundamentosJava from "../../assets/fundamentos-JAVA.webp";
import code_craft from "../../assets/code_craft.webp";


function Certificados() {
  return (
   <>
  
   
     <div className={styles.contact_container}>
      <h2>JAVA - Resolução de problemas</h2>
      <img src={java} alt="" />
    </div>

      <div className={styles.contact_container}>
      <h2>Fundamentos da Linguagem Java</h2>
      <img src={fundamentosJava} alt="" />
    </div>

      <div className={styles.contact_container}>
      <h2>CodeCraft - Desafio de Desenvolvimento </h2>
      <img src={code_craft} alt="" />
    </div>
   
   
    </>
  );
}

export default Certificados;
