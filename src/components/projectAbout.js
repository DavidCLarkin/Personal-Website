import React from "react"
import styles from "../pages/scss/project.module.scss"
import Indicator from "./indicator"

class ProjectAbout extends React.Component {
  render() {
    return (
    <div className={styles.altBackground}>

      <section className={styles.wrapper}>
      <a href="#info" id="info"/> 
        <div className={styles.project}>
          <section className={styles.padding}>
            <h4 className={styles.subheading}>About this Project</h4>
            <p>{this.props.data.description.description}</p>
          </section>
          <section className={styles.padding}>
            <h4 className={styles.subheading}>Technologies Used</h4>
            <ul className={styles.list}>
              {this.props.data.technologies.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
      <Indicator href="#contact" />

      </div>
    )
  }
}

export default ProjectAbout;
