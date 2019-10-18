import React from 'react'
import styles from "../pages/scss/footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons"
const Footer = () => (
  <footer className={styles.footerSection}>
		<div>
      <a href="https://github.com/DavidCLarkin" className="Github">
        <FontAwesomeIcon icon={faGithub} size="2x"/>
      </a>
      <a href="https://www.linkedin.com/in/david-larkin/" className="Linkedin">
        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
      </a>
      <a href="mailto:davidlarkin96@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="2x"/>
      </a>

    </div>
  </footer> 
)

export default Footer