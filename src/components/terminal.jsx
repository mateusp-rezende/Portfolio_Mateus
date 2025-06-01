import styles from './terminal.module.css';

function Terminal() {
  return (
    <div className={styles.terminalLoader}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalTitle}>Status</div>
        <div className={styles.terminalControls}>
          <div className={`${styles.terminalClose} ${styles.control}`}></div>
          <div className={`${styles.controlMinimize} ${styles.control}`}></div>
          <div className={`${styles.controlMaximize} ${styles.control}`}></div>
        </div>
      </div>
      <div className={styles.text}>Veja meus Projetos</div>
    </div>
  );
}

export default Terminal;
