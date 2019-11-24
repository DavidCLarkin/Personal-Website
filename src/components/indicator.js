import React from 'react';
import styles from "../pages/scss/indicator.module.scss";

const Indicator = ({ href, higherIndicator }) => {
  if(higherIndicator)
  {
    return (
      <>
      <div className={styles.indicator}
          style={{  
              transform: 
                "translateX(-10px) translateY(-1000%) rotate(45deg) "
              }}>
        <a href={href}>
          <span></span>
        </a>
      </div>
      </>
    )
  }
  else {
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
}

export default Indicator;