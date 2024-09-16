import React from 'react';

import styles from './SubmitBtn.module.css'
function SubmitBtn( {text,href}){
    return(
     <div className={styles.btn}>
         <a  href={href} target="_blank" rel="noopener noreferrer">{text}</a>
     </div>
      )
}

export default SubmitBtn;