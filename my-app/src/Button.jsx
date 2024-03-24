import PropType from "prop-type";
import styles from "./Button.module.css";
import { useEffect } from "react";

const Button = ({ text, onClick }) => {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
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
