import PropTypes from 'prop-types';
import styles from './Container.module.css';

function Container(props) {
    return (
        <div className={`${styles.container} ${styles.min_height} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    );
}

Container.propTypes = {
  customClass: PropTypes.string,   // Valida que customClass é uma string
  children: PropTypes.node.isRequired, // Valida que children são elementos React (obrigatório)
};

export default Container;
