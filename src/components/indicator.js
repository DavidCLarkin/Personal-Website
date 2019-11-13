import React from 'react';
import styles from "../pages/scss/indicator.module.scss";

const Indicator = ({ href }) => {
  return (
    <>
    <div className={styles.indicator}>
      <a href={href}>
        <span></span>
      </a>
    </div>
    </>
  )
}

export default Indicator;