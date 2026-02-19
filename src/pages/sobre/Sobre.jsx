import { motion } from 'framer-motion';
import styles from './Sobre.module.css';

import img7 from '../../assets/MATEUS.png';

function Sobre() {
  return (
    <div className={styles.body}>
      <motion.div 
        className={styles.row}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img 
          className={styles.img} 
          src={img7} 
          alt="Foto de Mateus de Paula Rezende" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className={styles.card}>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            MATEUS DE PAULA REZENDE
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Engenharia da Computação & Desenvolvimento de Software
          </motion.p>
          
          <ul className={styles.infoList}>
            <li>
                <strong>Formação Acadêmica</strong>
                <ul>
                    <li> Bacharelado em Engenharia da Computação - IF Goiano <span className={styles.date}>2024 - Presente</span></li>
                    <li> Técnico em Informática para Internet - IF Goiano <span className={styles.date}>Concluído em 2023</span></li>
                </ul>
            </li>
            
            <li>
                <strong>Experiência Profissional</strong>
                <ul>
                    <li> Estagiário em Desenvolvimento de Software - TSE Engenharia <span className={styles.date}>Jan 2026 - Atualmente</span>
                        <ul>
                            <li>Atuação com .NET 8+, SQL Server e Clean Architecture</li>
                            <li>Integração e customização de sistemas MES (Siemens Opcenter)</li>
                        </ul>
                    </li>
                    <li>
                        Estágio em Suporte de Sistemas - Unimed Goiânia
                        <span className={styles.date}>Out 2024 - Dez 2025</span>
                        <ul>
                            <li>Sustentação de sistemas corporativos críticos de saúde</li>
                            <li>Diagnóstico técnico e resolução de incidentes</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>
                <strong>Stack Tecnológica</strong>
                <ul>
                  
                    <li><strong>Projetos & Web:</strong> Java (Spring Boot), TypeScript, React, Supabase e PostgreSQL.</li>
                    <li><strong>Atuação Profissional:</strong> C# (.NET Core), Mendix,SQL Server e Integração de Sistemas.</li>
                </ul>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default Sobre;