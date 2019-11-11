import React from "react";
import styles from "../pages/scss/project.module.scss"

const Project =({ title, description, date, image}) => {

  if(title && description && date && image)
  {
    return (
      <>
      <section className={styles.wrapper}>
        <div className={styles.project}>
          <h1>{title}</h1>
          <h4>{date}</h4>
          <p>{description.description}</p>
          <img src={image} alt="test"></img>
        </div>
      </section>
      </>
    );
  } 
  else 
  {
    return <div>
      Error in Load
    </div>
  }
}

export default Project;