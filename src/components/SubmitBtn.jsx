
import PropTypes from 'prop-types';
import styles from './SubmitBtn.module.css'
function SubmitBtn( {text,href}){
    return(
     <div className={styles.btn}>
         <a  href={href} target="_blank" rel="noopener noreferrer">{text}</a>
     </div>
      )
}



SubmitBtn.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default SubmitBtn;
