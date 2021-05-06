import React from 'react';
import styles from "./Button.module.sass";

const Button = (props) => {
  return (
    <div className={styles.btn}>
      {props.children}
    </div>
  );
};

export default Button;