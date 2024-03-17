import PropType from "prop-type";
import styles from "./Button.module.css";

const Button = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};

Button.PropType = {
  text: PropType.toString.isRequired,
};

export default Button;
