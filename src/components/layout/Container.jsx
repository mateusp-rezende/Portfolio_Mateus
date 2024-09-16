import React from 'react';

import styles from './Container.module.css';

function Container(props) {
    return (
        <div className={`${styles.container} ${styles.min_height} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    );
}

export default Container;
