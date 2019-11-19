import React from "react"
import styles from "../pages/scss/project.module.scss"
import Indicator from "./indicator"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class ProjectAbout extends React.Component {
  render() {
    return (
      <div className={styles.altBackground}>
        <section className={styles.wrapper}>
          <a href="#info" id="info" />
          <div className={styles.project}>
            <section className={styles.padding}>
              <h4 className={styles.subheading}>About this Project</h4>
              <p>{this.props.data.description.description}</p>

              <div className={styles.links}>
                {this.props.data.githubLink ? (
                  <a className={styles.hover} href={this.props.data.githubLink}>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    {" Code Repository"}
                  </a>
                ) : (
                  <p className={styles.invalidLink}>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    {" Github Repository is Private"}
                  </p>
                )}

                <a className={styles.hover} href={this.props.data.link}>
                  <FontAwesomeIcon icon={faLink} />
                  {" Link To Live Project/Demo"}
                </a>
              </div>
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

export default ProjectAbout
