import React from 'react'
import Fade from "react-reveal"
import styles from "../pages/scss/footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons"

const Footer = () => (
  <section className={styles.wrapper}>
    <footer className={styles.footerSection}>
    <a href="#contact" id="contact"/>

      <Fade bottom>
        <div>
          <h2>Contact</h2>
        </div>

        <div className={styles.clear}>
          <a href="https://github.com/DavidCLarkin">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
          </a>
          <a href="https://www.linkedin.com/in/david-larkin/">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>
          </a>
          <a href="mailto:davidlarkin96&#64;gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x"/>
          </a>
        </div>
        <p className={styles.footnote}>© 2021 David Larkin</p>
      </Fade>
    </footer> 
  </section>
)

export default Footer